import { useState } from 'react';
import { TaskCardProps } from '../../../redux/types/types';
import checkIcon from '../../../assets/svg/check-icon.svg'
import pendingIcon from '../../../assets/svg/pending-icon.svg'
import editIcon from '../../../assets/svg/edit-icon.svg'
import editIconYellow from '../../../assets/svg/edit-icon-yellow.svg'
import trashIcon from '../../../assets/svg/trash-icon.svg'
import trashIconYellow from '../../../assets/svg/trash-icon-yellow.svg'

const TaskCard = ({ title, status, createdAt, onCheckClick, onEditClick, onDeleteClick, description }: TaskCardProps) => {
    const [isChecked, setIsChecked] = useState(status);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      onCheckClick(!isChecked);
    };

    const handleEditClick = () => {
        onEditClick(!isChecked);
      };

    const handleDeleteClick= () => {
        onDeleteClick(!isChecked);
    };

  return (
    <div className={`w-full flex flex-col items-center lg:max-w-[350px] text-[14px] gap-y-2
    bg-white rounded-2xl h-[150px] border-[1px] ${status ? 'border-[#d1f6d0]' : 'border-[#ffeac9]'}`}>

        <div
            className={`w-full justify-between flex px-4 rounded-t-lg rounded-tl-lg items-center h-[30px] ${status ? 'bg-[#d1f6d0]' : 'bg-[#ffeac9]'}`}
        >
            <div className='w-full flex flex-row gap-2'>
                <img src={status ? checkIcon : pendingIcon } alt="check Icon" className="w-5 h-5" />
                <p className={status ? 'text-green-500 font-semibold' : 'text-[#e7a600] font-semibold'}>
                    { status ? 'Completed' : 'Pending'}
                </p>
            </div>
            <div className='w-full flex justify-end flex-row gap-2'>
                <img src={ status ? editIcon : editIconYellow } onClick={handleEditClick} alt="edit Icon" className="w-5 h-5 cursor-pointer" />
                <img src={ status ? trashIcon : trashIconYellow } onClick={handleDeleteClick} alt="trash Icon" className="w-5 h-5 cursor-pointer" />
            </div>
        </div>

        <div className="flex items-start justify-start w-full px-4 gap-2 h-[70px] flex-col text-start">
            <p>{title}</p>
            <p className='text-[#858c90] text-[11px]'>
                {description && description?.length > 100 ? `${description?.slice(0, 100)}...` : description}
            </p>
        </div>

        <div className="flex flex-row items-start justify-between w-full px-4 text-[12px]">
            <div className='w-full flex flex-row gap-2'>
                <p className='text-[#858c90]'>{new Date(createdAt).toLocaleDateString()}</p>
            </div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="cursor-pointer accent-gray-50 h-5 w-5"
            />
        </div>
    </div>
  );
};

export default TaskCard;
