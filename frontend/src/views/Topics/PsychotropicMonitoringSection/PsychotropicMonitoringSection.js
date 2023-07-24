import "./PsychotropicMonitoringSection.css";
import * as React from "react";
import Navigation from "../../Navigation/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import Data from "../../searchBar/Data.json";
// import SearchBar from "../../searchBar/searchBar";
import PsychotropicMonitoringUpdate from "./PsychotropicMonitoringbackend";

import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";

export default function PsychotropicMonitoringSection() {
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
      .get("http://localhost:8887/api/psychotropicmonitoringsection")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState("");
  const admin = localStorage.getItem("admin");

  //used to store value when an input is selected by user
  const store_value = (event) => {
    setValue(event.target.value);
  };

  //calls update query when an input was selected and is not anymore (if the value actually changed)
  const update_value = (event) => {
    if (admin) {
      console.log(value);
      if (event.target.value !== value) {
        event.preventDefault();
        PsychotropicMonitoringUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert(
              "Updated Successfully Called! \nDrug:" +
                event.target.name +
                "\nColumn:" +
                event.target.id +
                "\nValue:" +
                event.target.value
            );
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to update!");
          });
      } else {
        console.log("value was not changed, not updating");
      }
    } else {
      alert("You must be an administrator to edit");
    }
  };

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
    // Editable Fields
    if (admin) {
      return (
        <>
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <Typography variant="h4" align="center" gutterBottom>
              <div className="subtitle">Psychotropic Monitoring</div>
            </Typography>

            <div className="grid-container">
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                const isDrugSelected = selectedDrugs.includes(dataObj);
                return (
                  <div className="grid-item" key={id}>
                    <button
                      onClick={() => handleDrugClick(dataObj)}
                      className={`drug-button ${isDrugSelected ? "active" : ""}`}
                    >
                      {dataObj.Name}
                    </button>

                    {isDrugSelected && (
                      <div className="box">
                        <div className="box-content">
                          <strong>Antipsychotics: </strong>
                          <input
                            id="`Antipsychotics`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Antipsychotics`]}
                          />
                        </div>

                        <div className="box-content">
                          <strong>Lithium: </strong>
                          <input
                            id="`Lithium`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Lithium`]}
                          />
                        </div>

                        <div className="box-content">
                          <strong>Valproate: </strong>
                          <input
                            id="`Valproate`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Valproate`]}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="psychotropic-footer">
              <p className="psychotropic-notes">
                <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark). <br />{" "}
                <br />
                <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be
                necessary based on clinical judgment
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }

    // Non-Editable Fields
    else {
      return (
        <>
          <Navigation />
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <Typography variant="h4" align="center" gutterBottom>
              <div className="subtitle">Psychotropic Monitoring</div>
            </Typography>

            <div className="grid-container">
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                const isDrugSelected = selectedDrugs.includes(dataObj);
                return (
                  <div className="grid-item" key={id}>
                    <button
                      onClick={() => handleDrugClick(dataObj)}
                      className={`drug-button ${isDrugSelected ? "active" : ""}`}
                    >
                      {dataObj.Name}
                    </button>

                    {isDrugSelected && (
                      <div className="box">
                        <div className="box-content">
                          <strong>Antipsychotics: </strong>
                          <span>{dataObj[`Antipsychotics`]}</span>
                        </div>
                        <div className="box-content">
                          <strong>Lithium: </strong>
                          <span>{dataObj[`Lithium`]}</span>
                        </div>

                        <div className="box-content">
                          <strong>Valproate: </strong>
                          <span>{dataObj[`Valproate`]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="psychotropic-footer">
              <p className="psychotropic-notes">
                <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark). <br />{" "}
                <br />
                <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be
                necessary based on clinical judgment
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
