import { useState } from "react";
import Header from "./components/header/Header";
import SearchMenu from "./components/search_menu/SearchMenu";
import StaysList from "./components/stays_list/StaysList";
import data from "./data/stays.json";

function App() {
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(true);

  return (
    <div className="min-h-screen text-darkGray">
      <div className="max-w-[79.5rem] mx-auto px-3 w-full">
        <Header setShowSearchMenu={setShowSearchMenu} />
        <StaysList staysData={data} />
      </div>
      {showSearchMenu && (
        <SearchMenu
          showSearchMenu={showSearchMenu}
          setShowSearchMenu={setShowSearchMenu}
        />
      )}
    </div>
  );
}

export default App;
