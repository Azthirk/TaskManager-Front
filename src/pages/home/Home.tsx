import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem, deleteItem, getData, updateItem } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Action, AppDispatch, ModalState, TaskBodyProps } from '../../redux/types/types';
import { FaSpinner } from 'react-icons/fa';
import Header from '../components/header/header';
import TaskCard from '../components/card/card';
import Pagination from '../components/pagination/pagination'; 
import NoResults from '../components/notResults/notResults'; 
import Modal from '../components/modal/modal'; 
import EditTaskForm from '../components/form/form';

const HomeComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    content: null,
    actions: [],
    errorMessage: ''
  });

  const { loading, info, error } = useSelector((state: RootState) => state.api);
  const totalPages = useSelector((state: RootState) => state.api.info?.totalPages);
  const hasData = info?.data && info.data?.length > 0;

  useEffect(() => {
    dispatch(getData(page, filter));
  }, [dispatch, filter, page]);

  const closeModal = () => setModalState({ ...modalState, isOpen: false });

  const openModal = useCallback((content: React.ReactNode, actions: Action[]) => setModalState({ isOpen: true, content, actions }), []);

  const handleCheckChange = async (item: TaskBodyProps) => {
    const updatedTask = { ...item, completed: !item.completed };
    handleAsyncAction(() => updateItem(item._id, updatedTask), 'Error updating task');
  };

  const handleDeleteClick = (item: TaskBodyProps) => {
    openModal(
      <p>Are you sure you want to delete the task "{item.title}"?</p>,
      [
        {
          label: 'Cancel',
          onClick: closeModal,
          className: 'rounded-lg bg-red-500 text-white w-[50%] h-[30px]',
        },
        {
          label: 'Delete',
          onClick: async () => {
            handleAsyncAction(() => deleteItem(item._id), 'Error deleting task');
          },
          className: 'rounded-lg bg-yellow-500 text-white w-[50%] h-[30px]',
        },
      ]
    );
  };

  const handleEditClick = (item: TaskBodyProps) => {
    openModal(
      <EditTaskForm
        task={item}
        onSave={async (updatedTask) => {
          handleAsyncAction(() => updateItem(item._id, updatedTask), 'Error saving task');
        }}
        onCancel={closeModal}
      />,
      []
    );
  };

  const handleCreateClick = () => {
    openModal(
      <EditTaskForm
        task={{}}
        onSave={async (newTask) => {
          handleAsyncAction(() => createItem(newTask), 'Error creating task');
        }}
        onCancel={closeModal}
      />,
      []
    );
  };

  const changeView = (pageNumber: number) => {
    setPage(pageNumber);
    dispatch(getData(pageNumber, filter));
  };

  const handleFilterChange = (newFilter: string) => {
    setPage(1);
    setFilter(newFilter);
  };

  const modalError = (text: string, error: any) => {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    return openModal(
      <p>{text}: {errorMessage}</p>,
      [
        {
          label: 'Close',
          onClick: closeModal,
          className: 'rounded-lg bg-red-500 text-white w-[50%] h-[30px]',
        },
      ]
    );
  };
  

  const handleAsyncAction = async (action: Function, errorMessage: string) => {
    try {
      await dispatch(action());
      dispatch(getData(page, filter));
      closeModal();
    } catch (error) {
      modalError(errorMessage, error);
    }
  };
  
  if(error) return (
    <div className="flex justify-center items-center h-screen">
      <p>Error: {error} </p>
    </div>
  )

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner className="animate-spin text-xl" />
    </div>
  );

  return (
    <div>
      <Header onFilterChange={handleFilterChange} onEditClick={handleCreateClick}/>
      <div className="flex w-full my-4 items-center justify-center flex-wrap">
        <div className="w-full flex-wrap justify-center flex gap-4 items-center mx-4">
          {hasData ? (
            info.data?.map((e: TaskBodyProps, index: number) => (
              <TaskCard
                key={e._id || index}
                title={e.title}
                status={e.completed}
                createdAt={e.createdAt}
                onCheckClick={() => handleCheckChange(e)}
                onEditClick={() => handleEditClick(e)}
                onDeleteClick={() => handleDeleteClick(e)}
                description={e.description}
              />
            ))
          ) : (
            <NoResults />
          )}
        </div>
        {hasData && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={changeView}
            totalItems={info.totalItems}
          />
        )}
      </div>
      <Modal
        isOpen={modalState.isOpen}
        title="Task Management"
        content={modalState.content}
        actions={modalState.actions}
      />
    </div>
  );
};

export default HomeComponent;
