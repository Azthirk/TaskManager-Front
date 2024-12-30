import arrowLeft from '../../../assets/svg/arrow-left-icon.svg';
import arrowRight from '../../../assets/svg/arrow-right-icon.svg';
import { PaginationProps } from '../../../redux/types/types';

const Pagination = ({ currentPage, totalPages, onPageChange, totalItems }: PaginationProps) => {
  const getPageRange = (currentPage: number) => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(start + 3, totalPages);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <div className="w-full flex justify-between items-center flex-row mt-5 lg:px-[3%] mx-4 lg:mx-0">
      <div className="flex lg:w-[50%] justify-start items-center">
        <p>{totalItems} results</p>
      </div>
      <div className="lg:w-[50%] text-[16px] flex flex-row items-center justify-end gap-4 text-black">
        <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="cursor-pointer">
          <img src={arrowLeft} alt="Previous" className="w-8 h-8" />
        </button>
        {getPageRange(currentPage).map((page) => (
          <p
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer ${currentPage === page ? 'font-bold' : ''}`}
          >
            {page}
          </p>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="cursor-pointer">
          <img src={arrowRight} alt="Next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
