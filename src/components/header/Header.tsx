import { FaSearch } from "react-icons/fa";
import logo from "../../logo.png";

function Header() {
  return (
    <header className="pt-4 mb-9">
      <img src={logo} alt="logo" />
      <div className="rounded-2xl overflow-hidden mx-7 mt-9 custom-shadow flex items-center">
        <div className="w-full p-4 border-r-[1px] text-sm text-lightGray">
          Add location
        </div>
        <div className="w-full p-4 border-r-[1px] text-sm text-lightGray">
          Add guests
        </div>
        <button aria-label="search" className="flex-1 h-full p-4">
          <FaSearch className="text-softRed" />
        </button>
      </div>
    </header>
  );
}

export default Header;
