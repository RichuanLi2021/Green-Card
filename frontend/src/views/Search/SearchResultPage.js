import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResultPage = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`yourServerURL/search?term=${props.searchTerm}`);
      setResults(response.data);
    };

    fetchData();
  }, [props.searchTerm]);

  return <div>// Render your results here.</div>;
};

export default SearchResultPage;
