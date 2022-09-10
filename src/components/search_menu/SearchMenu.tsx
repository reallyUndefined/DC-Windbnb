import { createPortal } from "react-dom";

import useClickToClose from "../../hooks/useClickToClose";
import Counter from "../counter/Counter";
import LocationPin from "../location_pin/LocationPin";
import Button from "./Button";

import { AiOutlineClose } from "react-icons/ai";

interface SearchMenuProps {
  showSearchMenu: boolean;
  setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
function SearchMenu({ setShowSearchMenu, showSearchMenu }: SearchMenuProps) {
  const node = useClickToClose(showSearchMenu, setShowSearchMenu);

  return createPortal(
    <div className="fixed inset-0 w-full h-full bg-overlay">
      <div
        ref={node}
        className="bg-white min-h-[80%] p-3 flex flex-col justify-between font-mulish lg:min-h-min lg:p-24"
      >
        <div>
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <span className="text-xs">Edit your search</span>
            <button aria-label="close" onClick={() => setShowSearchMenu(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden grid custom-shadow lg:grid-cols-3">
            <div className="flex flex-col px-6 py-3 border-b-[1px] lg:border-0 lg:border-r-[1px]">
              <span className="text-[0.5625rem] font-extrabold">LOCATION</span>
              <span className="text-sm text-lightGray">Add location</span>
            </div>
            <div className="flex flex-col px-6 py-3 lg:border-r-[1px]">
              <span className="text-[0.5625rem] font-extrabold">GUESTS</span>
              <span className="text-sm text-lightGray">Add guests</span>
            </div>
            <div className="hidden lg:flex items-center justify-center lg:border-r-[1px]">
              <Button />
            </div>
          </div>
          <div className="px-6 mt-8 lg:grid grid-cols-3">
            <div className="grid gap-8">
              <LocationPin location="Helsinki, Finland" />
              <LocationPin location="Turku, Finland" />
              <LocationPin location="Oulu, Finland" />
              <LocationPin location="Vaasa, Finland" />
            </div>
            <div className="grid gap-8">
              <Counter title="Adult" subtitle="Age 13 or above" />
              <Counter title="Children" subtitle="Age 2-12" />
            </div>
          </div>
        </div>
        <div className="lg:hidden self-center">
          <Button />
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

export default SearchMenu;
