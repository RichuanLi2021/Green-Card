import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchResultPage.css";
import Navbar from "../Navigation/navigation";
import Search from "./Search"
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data with search term:", searchTerm);
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `http://localhost:8887/api/search?term=${searchTerm}`);
      console.log(response.data);
      setResults(response.data);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <Search onSearch={handleSearch}></Search>
      {results.length > 0 ? (
        <div className="grid-container result-div">
          {results.map((row, index) => (
            <div className="grid-item" key={index}>
              <div className="table-name">{row.tableName}</div>
              {Object.entries(row).map(([column, columnValue]) => {
                // Exclude the "id" column (case-insensitive) from being displayed
                if (column.toLowerCase() !== "id" && column !== "tableName") {
                  return (
                    <div className="box" key={column}>
                      <div className="box-content">
                        <strong>{column}: </strong>
                        <span>{columnValue}</span>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">No results found</div>
      )}

    <Footer/>
    </div>
  );
};

export default SearchResultPage;
