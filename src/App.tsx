import { useState } from "react";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import SearchMenu from "./components/search_menu/SearchMenu";
import StaysList from "./components/stays_list/StaysList";
import data from "./data/stays.json";

function App() {
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);

  return (
    <div className="min-h-screen text-darkGray">
      <Container>
        <Header setShowSearchMenu={setShowSearchMenu} />
        <StaysList staysData={data} />
      </Container>
      {showSearchMenu && (
        <SearchMenu
          data={data}
          showSearchMenu={showSearchMenu}
          setShowSearchMenu={setShowSearchMenu}
        />
      )}
    </div>
  );
}

export default App;
