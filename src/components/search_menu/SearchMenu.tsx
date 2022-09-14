import { useState } from "react";
import { createPortal } from "react-dom";

import useClickToClose from "../../hooks/useClickToClose";
import Counter from "../counter/Counter";
import LocationPin from "../location_pin/LocationPin";
import Button from "./Button";
import Container from "../container/Container";

import { AiOutlineClose } from "react-icons/ai";

import { iStay } from "../../typescript_stuff/interfaces";

import {
  changeGuests,
  changeLocation,
  FiltersState,
} from "../../redux/filters/filters";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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

  const filters = useSelector(
    (state: { filters: { value: FiltersState } }) => state.filters.value
  );

  const [location, setLocation] = useState<string>(filters.location);
  const [adults, setAdults] = useState<number>(filters.guests.adults);
  const [children, setChildren] = useState<number>(filters.guests.children);

  const locations = Array.from(
    new Set(data.map((s) => `${s.city}, ${s.country}`))
  );
  const totalNoOfGuests = adults + children;

  const ringStyle = "ring-inset ring-2 ring-offset-4 ring-lightGray";

  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log("is it working");
    dispatch(changeLocation(location));
    dispatch(
      changeGuests({
        guests: { adults, children },
        totalGuests: totalNoOfGuests,
      })
    );
    setShowSearchMenu(false);
  };

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
                    location ? "text-darkGray" : "text-lightGray"
                  }`}
                >
                  {location.length > 0 ? location : "Add location"}
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
                <Button onClick={handleSearch} />
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
                        onClick={() => setLocation(location)}
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
                      value={adults}
                      onMinusClick={() => {
                        if (adults > 0) setAdults((prev) => prev - 1);
                      }}
                      onPlusClick={() => setAdults((prev) => prev + 1)}
                    />
                    <Counter
                      title="Children"
                      subtitle="Age 2-12"
                      value={children}
                      onMinusClick={() => {
                        if (children > 0) setChildren((prev) => prev - 1);
                      }}
                      onPlusClick={() => setChildren((prev) => prev + 1)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:hidden mx-auto">
            <Button onClick={handleSearch} />
          </div>
        </Container>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

export default SearchMenu;
