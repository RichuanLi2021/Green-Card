import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Config from "../../config/config";
import DataDisplay from '../../components/DataDisplay/dataDisplay'; // Adjust path as necessary
import "./DataTables.css";

const DataTables = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Config.API_URL}/api/all/categories`, { withCredentials: true });
        // Transform the data to include updatedAt in a more accessible format, mirroring the approach from Home.js
        const formattedData = response.data.message.map(category => ({
          categoryName: category.title,
          subcategoryHeaders: category.Subcategories.map(subcategory => ({
            name: subcategory.description,
            data: subcategory.Subcategory_Headers,
          })),
          updatedAt: category.updatedAt // Ensure this matches the data structure and naming
        }));
        setCategoriesData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="data-tables-container">
      {categoriesData.map((category, index) => (
        <div key={index} style={{ maxWidth: '80vw', margin: '0 auto' }}>
          {/* Consistently display the last updated date, similar to Home.js */}
          <h4>Last update: {category.updatedAt ? new Date(category.updatedAt).toLocaleString('en-CA') : 'No update date available'}</h4>
          <h2>{category.categoryName}</h2>
          {category.subcategoryHeaders.map((subHeader, subIndex) => (
            <DataDisplay key={subIndex} subcategoryHeaders={subHeader.data} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataTables;

