import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchResultPage.css";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data with search term:", searchTerm); // Added console log
      const response = await axios.get(`http://localhost:8887/api/search?term=${searchTerm}`);
      console.log(response.data);
      setResults(response.data);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="grid-container">
      {results.map((row, index) => (
        <div className="grid-item" key={index}>
          {Object.entries(row).map(([column, columnValue]) => (
            <div className="box" key={column}>
              <div className="box-content">
                <strong>{column}: </strong>
                <span>{columnValue}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchResultPage;
