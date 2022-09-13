import { useState } from "react";
import { createPortal } from "react-dom";

import useClickToClose from "../../hooks/useClickToClose";
import Counter from "../counter/Counter";
import LocationPin from "../location_pin/LocationPin";
import Button from "./Button";

import { AiOutlineClose } from "react-icons/ai";
import { iStay } from "../../typescript_stuff/interfaces";
import { guestCategory } from "../../typescript_stuff/enums";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import {
  changeLocation,
  decrementGuest,
  FiltersState,
  incrementGuest,
} from "../../redux/filters/filters";
import { useDispatch } from "react-redux";

interface SearchMenuProps {
  showSearchMenu: boolean;
  setShowSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
  data: iStay[];
}
function SearchMenu({
  setShowSearchMenu,
  showSearchMenu,
  data,
}: SearchMenuProps) {
  const node = useClickToClose(showSearchMenu, setShowSearchMenu);

  const [showLocations, setShowLocations] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);

  const locations = Array.from(
    new Set(data.map((s) => `${s.city}, ${s.country}`))
  );

  const ringStyle = "ring-inset ring-2 ring-offset-4 ring-lightGray";

  const selectedLocation = useSelector(
    (state: { filters: { value: FiltersState } }) =>
      state.filters.value.location
  );

  const noOfGuests = useSelector(
    (state: { filters: { value: FiltersState } }) => state.filters.value.guests
  );
  const totalNoOfGuests = noOfGuests.adults + noOfGuests.children;

  const dispatch = useDispatch();

  const handleLocationClick = (loc: string) => dispatch(changeLocation(loc));

  return createPortal(
    <div className="fixed inset-0 w-full h-full bg-overlay font-mulish">
      <div
        ref={node}
        className="bg-white min-h-[80%] flex flex-col lg:min-h-max"
      >
        <Container className="bg-white flex-1 h-full py-3 flex flex-col justify-between lg:py-24">
          <div>
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <span className="text-xs">Edit your search</span>
              <button
                aria-label="close"
                onClick={() => setShowSearchMenu(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden grid custom-shadow lg:grid-cols-3">
              <div
                className={`flex flex-col px-6 py-3 border-b-[1px] lg:border-0 lg:border-r-[1px] cursor-pointer rounded-t-2xl lg:rounded-none lg:rounded-l-2xl ${
                  showLocations && ringStyle
                }`}
                onClick={() => {
                  setShowLocations(true);
                  setShowGuests(false);
                }}
              >
                <span className="text-[0.5625rem] font-extrabold">
                  LOCATION
                </span>
                <span
                  className={`text-sm ${
                    selectedLocation ? "text-darkGray" : "text-lightGray"
                  }`}
                >
                  {selectedLocation.length > 0
                    ? selectedLocation
                    : "Add location"}
                </span>
              </div>
              <div
                className={`flex flex-col px-6 py-3 lg:border-r-[1px] cursor-pointer rounded-b-2xl lg:rounded-none ${
                  showGuests && ringStyle
                }`}
                onClick={() => {
                  setShowGuests(true);
                  setShowLocations(false);
                }}
              >
                <span className="text-[0.5625rem] font-extrabold">GUESTS</span>
                <span
                  className={`text-sm ${
                    totalNoOfGuests > 0 ? "text-darkGray" : "text-lightGray"
                  }`}
                >
                  {totalNoOfGuests > 0
                    ? `${totalNoOfGuests} guests`
                    : "Add guests"}
                </span>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <Button />
              </div>
            </div>
            <div className="px-6 mt-8 lg:grid grid-cols-3">
              <div>
                {showLocations && (
                  <div className="grid gap-8">
                    {locations.map((location) => (
                      <LocationPin
                        key={location}
                        location={location}
                        onClick={() => handleLocationClick(location)}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div>
                {showGuests && (
                  <div className="grid gap-8">
                    <Counter
                      title="Adult"
                      subtitle="Age 13 or above"
                      value={noOfGuests.adults}
                      onMinusClick={() =>
                        dispatch(decrementGuest(guestCategory.adult))
                      }
                      onPlusClick={() =>
                        dispatch(incrementGuest(guestCategory.adult))
                      }
                    />
                    <Counter
                      title="Children"
                      subtitle="Age 2-12"
                      value={noOfGuests.children}
                      onMinusClick={() =>
                        dispatch(decrementGuest(guestCategory.children))
                      }
                      onPlusClick={() =>
                        dispatch(incrementGuest(guestCategory.children))
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:hidden mx-auto">
            <Button />
          </div>
        </Container>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

export default SearchMenu;
