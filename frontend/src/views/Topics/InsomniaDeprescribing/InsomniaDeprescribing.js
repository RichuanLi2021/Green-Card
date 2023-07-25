import "./InsomniaDeprescribing.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
// import SearchBar from "../../searchBar/searchBar";
import Navigation from "../../Navigation/navigation";
// import Data from "../../searchBar/Data.json";

import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";

export default function InsomniaDeprescribing() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/insomniadeprescribing")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);

  const handleDrugClick = (dataObj) => {
    setSelectedDrugs((prevSelectedDrugs) => {
      const isSelected = prevSelectedDrugs.includes(dataObj);
      if (isSelected) {
        return prevSelectedDrugs.filter((drug) => drug !== dataObj);
      } else {
        return [...prevSelectedDrugs, dataObj];
      }
    });
  };

  if (Object.keys(data).length > 0) {
    return (
      <>
        <Navigation />
        <Search onSearch={handleSearch} />

        <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
          <Typography variant="h3" align="center">
            <div className="subtitle">Deprescribing Sedatives/Hypnotics</div>
          </Typography>

          <table className="sticky-table">
            <thead className="heading-bg">
              <tr>
                <th>Drug Details</th>
                <th>Dose Reduction Schedule Duration (weeks)</th>
                <th>Interval Between Dose Reductions (weeks)</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                const isDrugSelected = selectedDrugs.includes(dataObj);
                return (
                  <tr key={id} className={isDrugSelected ? "active" : ""}>
                    <td onClick={() => handleDrugClick(dataObj)}>
                      BZRA {dataObj["Duration of BZRA use (months)"]} weeks
                    </td>
                    <td>{dataObj["Dose Reduction Schedule Duration (weeks)"]}</td>
                    <td>{dataObj["Interval Between Dose Reductions (weeks)"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="insomnia-footer">
            <p className="insomnia-notes">
              <b>Key: </b> BZRA: benzodiazepine and z-drugs (benzodiazepine agonists)
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
