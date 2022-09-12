import { useState } from "react";
import Header from "./components/header/Header";
import SearchMenu from "./components/search_menu/SearchMenu";
import StaysList from "./components/stays_list/StaysList";
import data from "./data/stays.json";
import { iGuests } from "./typescript_stuff/interfaces";

function App() {
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);

  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [noOfGuests, setNoOfGuests] = useState<iGuests>({
    adults: 0,
    children: 0,
  });

  return (
    <div className="min-h-screen text-darkGray">
      <div className="max-w-[79.5rem] mx-auto px-3 w-full">
        <Header setShowSearchMenu={setShowSearchMenu} />
        <StaysList staysData={data} />
      </div>
      {showSearchMenu && (
        <SearchMenu
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          noOfGuests={noOfGuests}
          setNoOfGuests={setNoOfGuests}
          data={data}
          showSearchMenu={showSearchMenu}
          setShowSearchMenu={setShowSearchMenu}
        />
      )}
    </div>
  );
}

export default App;
