import "./antipsychoticsGuide.css";
import * as React from "react";
import Navigation from "../../Navigation/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Data from "../../searchBar/Data.json";
import SearchBar from "../../searchBar/searchBar";
import antipsychoticsGuideUpdate from "./antipsychoticsGuidebackend";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Footer from "../../Footer/Footer";

export default function AntipsychoticsGuide() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/antipsychoticsGuide")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [newDrug, setNewDrug] = useState({
    Name: "",
    Approx_equiv_dose: "",
    Half_life: "",
    Frequency: "",
    Tab_Strength_Form_Supplied: "",
    NPS: "",
    PP: "",
    MDE_ADaugment: "",
    MDE_w_psychosis: "",
    Delirium: "",
    EO_SCZ: "",
    LO_SCZ: "",
  });
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
        antipsychoticsGuideUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert(
              "Data successfully updated! \nDrug:" +
                event.target.name +
                "\nColumn:" +
                event.target.id +
                "\nNew Value:" +
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

  // addDrug function
  const addDrug = (drugData) => {
    if (admin) {
      axios
        .post("http://localhost:8887/api/antipsychoticsGuide/add", drugData)
        .then((response) => {
          alert("Data successfully added! \nDrug:" + drugData.Name);
          fetchData(); // Refresh the data after the new drug is added.
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to add drug!");
        });
    } else {
      alert("You must be an administrator to add a drug");
    }
  };

  const handleDelete = async (Name) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        console.log(Name);
        await axios.delete("http://localhost:8887/api/antipsychoticsGuide/delete/" + Name);
        alert("Data deleted succesfully! \nDrug:" + Name);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleInputChange = (e) => {
    setNewDrug({ ...newDrug, [e.target.name]: e.target.value });
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
    if (admin) {
      return (
        <>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div className="subHeader" style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <Typography className="heading-antipsychotics" gutterBottom>
              Antipsychotics Guide
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
                      <button
                        style={{ background: "none", border: "none", cursor: "pointer" }}
                        onClick={(e) => handleDelete(dataObj.Name)}
                      >
                        <span class="material-symbols-outlined">delete</span>
                      </button>
                    </button>

                    {isDrugSelected && (
                      <div className="box">
                        <div className="box-content">
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>General Information</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="accordion-content">
                                <div className="box-content">
                                  <strong>Approx equiv dose: </strong>
                                  <input
                                    id="`Approx. equiv. dose`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Approx. equiv. dose`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Half-Life: </strong>
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
                                <div className="box-content" style={{ width: 230 }}>
                                  <strong>Tab Strength/Form Supplied: </strong>
                                  <input
                                    id="`Tab Strength/Form Supplied`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Tab Strength/Form Supplied`]}
                                  />
                                </div>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </div>

                        <div className="box-content">
                          <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>Recommended Dosing</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="accordion-content">
                                <div className="box-content">
                                  <strong>Neuropsychiatric symptoms of dementia: </strong>
                                  <input
                                    id="`NPS`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`NPS`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Parkinson's psychosis: </strong>
                                  <input
                                    id="`PP`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`PP`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Major depressive disorder (antidepressant augment): </strong>
                                  <input
                                    id="`MDE (ADaugment)`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`MDE (ADaugment)`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Major depressive disorder (w.psychosis): </strong>
                                  <input
                                    id="`MDE (w.psychosis)`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`MDE (w.psychosis)`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Delirium: </strong>
                                  <input
                                    id="`Delirium`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`Delirium`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Early-onset schizophrenia: </strong>
                                  <input
                                    id="`EO-SCZ`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`EO-SCZ`]}
                                  />
                                </div>
                                <div className="box-content">
                                  <strong>Late-onset schizophrenia: </strong>
                                  <input
                                    id="`LO-SCZ`"
                                    name={dataObj.Name}
                                    type="text"
                                    onFocus={store_value}
                                    onBlur={update_value}
                                    defaultValue={dataObj[`LO-SCZ`]}
                                  />
                                </div>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => setFormVisible(!formVisible)} className="button-style">
                {formVisible ? "Cancel" : "Add Drug"}
              </button>
              {formVisible && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addDrug(newDrug);
                    setFormVisible(false);
                  }}
                  className="form-style"
                >
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="Approx_equiv_dose"
                    placeholder="Approx. equiv. dose"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="Half_life"
                    placeholder="Half-life"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="Frequency"
                    placeholder="Frequency"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="Tab_Strength_Form_Supplied"
                    placeholder="Tab Strength/Form Supplied"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="NPS"
                    placeholder="Neuropsychiatric symptoms of dementia"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="PP"
                    placeholder="Parkinson's psychosis"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="MDE_ADaugment"
                    placeholder="Major depressive disorder (antidepressant augment)"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="MDE_w_psychosis"
                    placeholder="Major depressive disorder (w.psychosis)"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="Delirium"
                    placeholder="Delirium"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="EO_SCZ"
                    placeholder="Early-onset schizophrenia"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <input
                    type="text"
                    name="LO_SCZ"
                    placeholder="Late-onset schizophrenia"
                    onChange={handleInputChange}
                    className="input-style"
                  />
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              )}
            </div>

            <div className="antipsychoticsGuide-footer">
              <p className="footer-notes">
                <b>Key: </b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset
                schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric
                symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult equivalent dose
                shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites;
                **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data.
                <br /> <br />
                <b>NOTES: </b> doses may not reflect manufacturers' recommendations but are based on clinical literature
                and opinion. Half-lives are estimates based on adult data and in older adults they can often be
                increased up to 170%.
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navigation />
          <SearchBar placeholder="Search" data={Data} />
          <div style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <Typography className="heading-antipsychotics" gutterBottom>
              Antipsychotics Guide
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
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>General Information</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div className="box-content">
                              <strong>Approx equiv dose: </strong>
                              <span>{dataObj["Approx. equiv. dose"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Half-Life: </strong>
                              <span>{dataObj["Half-life"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Frequency: </strong>
                              <span>{dataObj["Frequency"]}</span>
                            </div>
                            <div className="box-content" style={{ width: 230 }}>
                              <strong>Tablet Strength/Form Supplied: </strong>
                              <span>{dataObj["Tab Strength/Form Supplied"]}</span>
                            </div>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Recommended Dosing</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div className="box-content">
                              <strong>Neuropsychiatric symptoms of dementia: </strong>
                              <span>{dataObj["NPS"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Parkinson's psychosis: </strong>
                              <span>{dataObj["PP"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Major depressive disorder (antidepressant augment):</strong>
                              <span>{dataObj["MDE (ADaugment)"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Major depressive disorder (w.psychosis): </strong>
                              <span>{dataObj["MDE (w.psychosis)"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Delirium: </strong>
                              <span>{dataObj["Delirium"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Early-onset schizophrenia: </strong>
                              <span>{dataObj["EO-SCZ"]}</span>
                            </div>
                            <div className="box-content">
                              <strong>Late-onset schizophrenia: </strong>
                              <span>{dataObj["LO-SCZ"]}</span>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="antipsychoticsGuide-footer">
              <p className="footer-notes">
                <b>Key: </b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ: early-onset
                schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS: neuropsychiatric
                symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult equivalent dose
                shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active metabolites;
                **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient data.
                <br /> <br />
                <b>NOTES: </b> doses may not reflect manufacturers' recommendations but are based on clinical literature
                and opinion. Half-lives are estimates based on adult data and in older adults they can often be
                increased up to 170%.
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
