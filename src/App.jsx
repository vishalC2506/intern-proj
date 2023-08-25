import "./App.css";
import DisplayTable from "./components/DisplayTable/DisplayTable";
import SearchBar from "./components/SearchBar/SearchBar";
import { selectFilter } from "./Redux/searchSlice";
import { useSelector } from "react-redux";
import InfoPage from "./components/InfoPage/InfoPage";
function App() {
  const filteredData = useSelector(selectFilter);
  return (
    <>
      <SearchBar />
      {filteredData.length !== 0 ? <DisplayTable /> : <InfoPage />}
    </>
  );
}

export default App;
