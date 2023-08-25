import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import datas from "../../data/data.json";
import Dropdown from "react-bootstrap/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { filtervalues, resetFilter } from "../../Redux/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchData, setSearchedData] = useState({
    planetName: "",
    Discovery_method: "",
    hostname: "",
    discovery_year: "",
    discovery_facility: "",
    discovery_Date: "",
  });

  const notify = () => {
    toast("select alteast one value", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const [filteredData, setFilteredData] = useState(datas);

  const dispatch = useDispatch();
  return (
    <div className="flex justify-around m-4 w-full  ">
      <Dropdown
        as={ButtonGroup}
        onSelect={(e) => {
          setSearchedData({ ...searchData, planetName: `${e}` });
          setFilteredData(
            filteredData.filter((data) => data.pl_name === `${e}`)
          );
        }}
      >
        <Button variant="success">
          {searchData.planetName ? `${searchData.planetName}` : "Planet Name"}
        </Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          {datas.map((data) => {
            return (
              <Dropdown.Item eventKey={data.pl_name}>
                {data.pl_name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        as={ButtonGroup}
        onSelect={(e) => {
          setSearchedData({ ...searchData, discovery_year: `${e}` });
          setFilteredData(
            filteredData.filter((data) => data.disc_year === `${e}`)
          );
        }}
      >
        <Button variant="success">
          {searchData.discovery_year
            ? `${searchData.discovery_year}`
            : "Discovery Year"}
        </Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          {datas.map((data) => {
            return (
              <Dropdown.Item eventKey={data.disc_year}>
                {data.disc_year}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        as={ButtonGroup}
        onSelect={(e) => {
          setSearchedData({ ...searchData, Discovery_method: `${e}` });
          setFilteredData(
            filteredData.filter((data) => data.discoverymethod === `${e}`)
          );
        }}
      >
        <Button variant="success">
          {searchData.Discovery_method
            ? `${searchData.Discovery_method}`
            : "discover method"}
        </Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          {datas.map((data) => {
            return (
              <Dropdown.Item eventKey={data.discoverymethod}>
                {data.discoverymethod}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        as={ButtonGroup}
        onSelect={(e) => {
          setSearchedData({ ...searchData, hostname: `${e}` });
          setFilteredData(
            filteredData.filter((data) => data.hostname === `${e}`)
          );
        }}
      >
        <Button variant="success">
          {searchData.hostname ? `${searchData.hostname}` : "hostname"}
        </Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          {datas.map((data ) => {
            return (
              <Dropdown.Item eventKey={data.hostname}>
                {data.hostname}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <Button
          variant="primary"
          className="mr-1"
          onClick={() => {
            console.log(filteredData);
            const isNullish = Object.values(searchData).every((value) => {
              if (value === "") {
                return true;
              }
              return false;
            });

            if (!isNullish) {
              console.log(filteredData);
              dispatch(filtervalues(filteredData));
            } else {
              notify();
            }
          }}
        >
          Search
        </Button>
        <Button
          variant="primary"
          className="ml-1"
          onClick={() => {
            setFilteredData(datas);
            dispatch(resetFilter());
          }}
        >
          Clear
        </Button>
      </div>
      <ToastContainer
        toastStyle={{ backgroundColor: "rgb(245, 84, 66)", color: "white" }}
      />
    </div>
  );
};

export default SearchBar;
