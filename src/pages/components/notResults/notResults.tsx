import alertIcon from '../../../assets/svg/alert-icon.svg';

const NoResults = () => (
  <div className="flex flex-col gap-2 w-full justify-center items-center h-[450px]">
    <img src={alertIcon} alt="No results" className="w-10 h-10" />
    <p className="text-black text-center">No results found</p>
  </div>
);

export default NoResults;
