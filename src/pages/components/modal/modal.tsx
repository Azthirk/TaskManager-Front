import { ModalProps } from '../../../redux/types/types';

const Modal = ({ isOpen, title, content, actions }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="top-0 left-0 w-full h-full bg-[#6b6b6b97] flex fixed justify-center items-center z-20">
            <div className="bg-white p-5 rounded-lg shadow lg:w-[450px] w-full">
                <div className='flex w-full flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold'>{title}</h2>
                    <div className='flex w-full text-start max-w-[80%]'>{content}</div>
                    <div className="mt-5 flex gap-[10px] flex-row justify-center w-full">
                    {actions?.map((action, index) => (
                        <button
                            key={index}
                            className={action.className}
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Modal;