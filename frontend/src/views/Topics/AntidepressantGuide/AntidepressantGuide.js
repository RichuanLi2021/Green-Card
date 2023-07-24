import * as React from "react";
import Navigation from "../../Navigation/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import Data from "../../searchBar/Data.json";
// import SearchBar from "../../searchBar/searchBar";
import AntidepressantGuideUpdate from "./AntidepressantGuidebackend.js";
import "./AntidepressantsGuide.css";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";

export default function MoodStabilizers() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/antidepressantguide")
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
        AntidepressantGuideUpdate(event.target.name, event.target.id, event.target.value)
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
          {/* <SearchBar placeholder="Search" data={Data} /> */}
          <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
            <Typography className="page-heading" gutterBottom>
              Antidepressant Guide
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
                          <strong>Half-life: </strong>
                          <input
                            id="`Half-life`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Half-life`]}
                          />
                        </div>
                        <div className="box-content">
                          <strong>Primary NT: </strong>
                          <input
                            id="`Primary NT`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Primary NT`]}
                          />
                        </div>

                        <div className="box-content">
                          <strong>Dose (mg/day) Initial | Maint. | Max: </strong>
                          <input
                            id="`Dose (mg/day) Initial | Maint. | Max.`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}
                          />
                        </div>

                        <div className="box-content">
                          <strong>Frequency: </strong>
                          <input
                            id="`Frequency`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`Frequency`]}
                          />
                        </div>

                        <div className="box-content">
                          <strong>mg/Form Supplied: </strong>
                          <input
                            id="`mg/Form Supplied`"
                            name={dataObj.Name}
                            type="text"
                            onFocus={store_value}
                            onBlur={update_value}
                            defaultValue={dataObj[`mg/Form Supplied`]}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="keynote-div">
              <p className="keynote">
                <b>Key:</b> 5HT: serotonin; DA: dopamine; NaSSA: noradrenaline serotonin specific antidepressant; NDRI:
                noradrenaline dopamine reuptake inhibitor; NT: neurotransmitter; NA: noradrenaline; SARI: serotonin
                antagonist & reuptake inhibitor; SSRI: selective serotonin reuptake inhibitor; TCA: tricyclic
                antidepressant (2°&3°: secondary and tertiary amines); xl, sr & er: slow release; † therapeutic levels
                available and useful; ^ accounts for half life of active metabolite; **preferred choice based on
                existing evidence; ∅ less appropriate due to long half life; ♯ less appropriate due to anticholinergic
                activity.
                <b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical literature
                and expert opinion. Half lives are estimates based on adult data and in older adults they can often be
                increased up to 170%.{" "}
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
          {/* <SearchBar placeholder="Search" data={Data} /> */}
          <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
            <Typography className="page-heading" gutterBottom>
              Antidepressant Guide
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
                          <strong>Half-life: </strong>
                          <span>{dataObj[`Half-life`]}</span>
                        </div>
                        <div className="box-content">
                          <strong>Primary NT: </strong>
                          <span>{dataObj[`Primary NT`]}</span>
                        </div>
                        <div className="box-content">
                          <strong>Dose (mg/day) Initial | Maint. | Max.: </strong>
                          <span>{dataObj[`Dose (mg/day) Initial | Maint. | Max.`]}</span>
                        </div>

                        <div className="box-content">
                          <strong>Frequency: </strong>
                          <span>{dataObj[`Frequency`]}</span>
                        </div>

                        <div className="box-content">
                          <strong>mg/Form Supplied: </strong>
                          <span>{dataObj[`mg/Form Supplied`]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="keynote-div">
              <p className="keynote">
                <b>Key:</b> 5HT: serotonin; DA: dopamine; NaSSA: noradrenaline serotonin specific antidepressant; NDRI:
                noradrenaline dopamine reuptake inhibitor; NT: neurotransmitter; NA: noradrenaline; SARI: serotonin
                antagonist & reuptake inhibitor; SSRI: selective serotonin reuptake inhibitor; TCA: tricyclic
                antidepressant (2°&3°: secondary and tertiary amines); xl, sr & er: slow release; † therapeutic levels
                available and useful; ^ accounts for half life of active metabolite; **preferred choice based on
                existing evidence; ∅ less appropriate due to long half life; ♯ less appropriate due to anticholinergic
                activity.
                <b> NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical literature
                and expert opinion. Half lives are estimates based on adult data and in older adults they can often be
                increased up to 170%.{" "}
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
