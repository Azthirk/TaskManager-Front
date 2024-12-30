import { useState, useEffect } from 'react';
import { EditTaskFormProps } from '../../../redux/types/types';

const EditTaskForm = ({ task, onSave, onCancel }: EditTaskFormProps) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [completed, setCompleted] = useState(task?.completed || false);
  const [titleError, setTitleError] = useState('');

  useEffect(() => {
    if (task?.title) setTitle(task.title);
    if (task?.description) setDescription(task.description);
    if (task?.completed) setCompleted(task.completed);
  }, [task]);

  const handleSubmit = () => {
    if (!title.trim()) {
      setTitleError('Title is required');
      return; 
    }

    setTitleError('');

    onSave({
      title,
      description,
      completed,
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (titleError) {
      setTitleError('');
    }
  };

  return (
    <div className="w-full flex">
      <form className="w-full flex flex-col justify-center">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-sm mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${titleError ? 'border-red-500' : ''}`}
            required
          />
          {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium text-sm mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-sm mb-2">Status</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={completed.toString()}
            onChange={(e) => setCompleted(e.target.value === 'true')}
          >
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
        </div>

        <div className="flex justify-between w-full gap-4">
          <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded w-[50%]">
            Cancel
          </button>
          <button type="button" onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded w-[50%]">
            {task?.title ? 'Save' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
