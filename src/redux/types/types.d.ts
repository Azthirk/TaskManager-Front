import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers';

type AppThunk = ThunkAction<void, RootState, unknown, any>;

type AppDispatch = ThunkDispatch<RootState, unknown, any>;

interface TaskCardProps {
    title: string;
    status: boolean;
    createdAt: string;
    onCheckClick: Function;
    onEditClick: Function;
    onDeleteClick: Function;
    description?: string;
};

interface ApiState {
    loading: boolean;
    info: any | null;
    error: string | null;
}

interface TaskBodyProps {
    _id: string,
    title: string;
    completed: boolean;
    description: string;
    createdAt: string;
};

interface TaskPostProps {
    title: string;
    completed: boolean;
    description?: string;
};

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: Function;
    totalItems: number;
};

interface Action {
    label: string;
    onClick: () => void;
    className?: string;
}
  
interface ModalProps {
    isOpen: boolean;
    title?: string;
    content?: React.ReactNode;
    actions?: Action[];
}

interface EditTaskFormProps {
    task?: { title?: string; description?: string; completed?: boolean };
    onSave: (updatedTask: { title: string; description: string; completed: boolean }) => void;
    onCancel: () => void;
}

interface HeaderProps {
    onFilterChange: Function;
    onEditClick: Function;
};

interface Action {
    label: string;
    onClick: () => void;
    className?: string;
}
  
interface ModalState {
    isOpen: boolean;
    content: React.ReactNode | null;
    actions: Action[];
    errorMessage?: string;
}

interface ModalState {
    isOpen: boolean;
    content: React.ReactNode | null;
    actions: Action[];
}
