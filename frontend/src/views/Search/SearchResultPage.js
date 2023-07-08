import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data with search term:", searchTerm); // Added console log
      const response = await axios.get(`http://localhost:8887/api/search?term=${searchTerm}`);
      setResults(response.data);
    };

    fetchData();
  }, [searchTerm]);

  return <div>// Render your results here.</div>;
};
export default SearchResultPage;
