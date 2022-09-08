import Header from "./components/header/Header";
import StaysList from "./components/stays_list/StaysList";
import data from "./data/stays.json";

function App() {
  return (
    <div className="min-h-screen text-darkGray">
      <div className="max-w-[79.5rem] mx-auto px-3 w-full">
        <Header />
        <StaysList staysData={data} />
      </div>
    </div>
  );
}

export default App;
