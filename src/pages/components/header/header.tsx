import { ChangeEvent, useState } from 'react';
import logoIcon from '../../../assets/svg/logo.svg';
import filterIcon from '../../../assets/svg/filter-icon.svg';
import { HeaderProps } from '../../../redux/types/types';

const Header = ({ onFilterChange, onEditClick }: HeaderProps) => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleCreateClick = (e: any) => {
    onEditClick(e.target.value);
  };

  return (
    <div className='w-full bg-[#243b66] gap-4 sticky top-0 z-10 flex flex-col lg:flex-row lg:justify-between h-[100px] lg:h-[82px] items-center px-4'>
      <div className='w-full flex gap-2 items-center flex-row justify-between'>
        <div className='w-full flex gap-2 items-center flex-row justify-start mt-3 lg:mt-0'>
          <img src={ logoIcon } alt="logo Icon" className="w-8 h-8" />
          <p className='text-[#ffff]'>Task Manager</p>
        </div>
        <div className='items-center justify-end flex-row gap-2 cursor-pointer flex lg:hidden' onClick={handleCreateClick}>
          <span className='text-[#ffff] text-[32px] mt-[-7px]'>+</span>
          <span className='text-[#ffff]'>Add</span>
        </div>
      </div>

      <div className='w-full flex flex-row justify-center items-center gap-2'>
        <div className='text-start items-center flex-row flex justify-between'>
          <img src={ filterIcon } alt="filter Icon" className="w-6 h-6" />
        </div>
        <div className='w-full lg:max-w-[200px]'>
          <select className='h-[20px] w-full mt-1' value={selectedState} onChange={handleStateChange}>
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className='w-full flex-col justify-center items-center hidden lg:flex lg:justify-end lg:items-end'>
        <div className='flex items-center justify-end flex-row gap-2 cursor-pointer' onClick={handleCreateClick}>
          <span className='text-[#ffff] text-[32px] mt-[-7px]'>+</span>
          <span className='text-[#ffff]'>Add</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
