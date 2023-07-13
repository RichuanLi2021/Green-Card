import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchResultPage.css";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data with search term:", searchTerm);
      const response = await axios.get(`http://localhost:8887/api/search?term=${searchTerm}`);
      console.log(response.data);
      setResults(response.data);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {results.length > 0 ? (
        <div className="grid-container">
          {results.map((row, index) => (
            <div className="grid-item" key={index}>
              <div className="table-name">{row.tableName}</div>
              {Object.entries(row).map(([column, columnValue]) => {
                if (column !== "tableName") {
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
    </div>
  );
};

export default SearchResultPage;
