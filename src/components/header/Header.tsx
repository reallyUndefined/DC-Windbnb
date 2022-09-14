import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../../logo.png";
import { FiltersState } from "../../redux/filters/filters";

interface HeaderProps {
  setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
function Header({ setShowSearchMenu }: HeaderProps) {
  const filters = useSelector(
    (state: { filters: { value: FiltersState } }) => state.filters.value
  );

  return (
    <header className="pt-4 mb-9 md:flex items-center justify-between md:pt-8 md:mb-14">
      <img className="cursor-pointer" src={logo} alt="logo" />
      <div
        className="rounded-2xl overflow-hidden mx-auto mt-9 custom-shadow flex items-center max-w-[18.75rem] w-full md:m-0"
        onClick={() => setShowSearchMenu(true)}
      >
        <div
          className={`w-full p-4 border-r-[1px] text-sm ${
            filters.location.length > 0 ? "text-mediumGray" : "text-lightGray"
          } flex-2 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {filters.location.length > 0 ? filters.location : "Add location"}
        </div>
        <div
          className={`w-full p-4 border-r-[1px] text-sm ${
            filters.totalGuests > 0 ? "text-mediumGray" : "text-lightGray"
          } flex-2 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {filters.totalGuests > 0
            ? `${filters.totalGuests} guests`
            : "Add guests"}
        </div>
        <button aria-label="search" className="flex-1 h-full p-4">
          <FaSearch className="text-softRed" />
        </button>
      </div>
    </header>
  );
}

export default Header;
