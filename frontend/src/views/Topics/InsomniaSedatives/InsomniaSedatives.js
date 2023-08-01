import "./InsomniaSedatives.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import Navigation from "../../Navigation/navigation";

import { InsomniaSedativesUpdate, submitDrug } from "./InsomniaSedativesBackend";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Footer from "../../Footer/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Search from "../../Search/Search";
import { useNavigate } from "react-router-dom";
import "./InsomniaSedatives.css";

export default function InsomniaSedatives() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://gpgc-server.vercel.app/api/insomniasedatives")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState("");
  const admin = localStorage.getItem("admin");

  //add drug components shifted to this page itself
  const [drugName, setdrugName] = useState("");
  const [doseEquiv, setdoseEuiv] = useState("");
  const [timeToPeakInPlasma, settimeToPeakInPlasma] = useState("");
  const [halfLife, sethalfLife] = useState("");
  const [avgDoseRange, setavgDoseRange] = useState("");
  const [mgFormsupplied, setmgFormsupplied] = useState("");

  const handleDrugName = (event) => {
    setdrugName(event.target.value);
  };

  const handleDoseEquiv = (event) => {
    setdoseEuiv(event.target.value);
  };

  const handleTime = (event) => {
    settimeToPeakInPlasma(event.target.value);
  };

  const handleHalfLife = (event) => {
    sethalfLife(event.target.value);
  };

  const handleAvgDoseRange = (event) => {
    setavgDoseRange(event.target.value);
  };

  const handleMgFormSupplied = (event) => {
    setmgFormsupplied(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ drugName, doseEquiv, timeToPeakInPlasma, halfLife, avgDoseRange, mgFormsupplied });
    submitDrug(drugName, doseEquiv, timeToPeakInPlasma, halfLife, avgDoseRange, mgFormsupplied)
      .then((data) => {
        window.alert("Drug was added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to submit the Drug!");
      });
  };

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
        InsomniaSedativesUpdate(event.target.name, event.target.id, event.target.value)
          .then((data) => {
            alert(
              "Data successfully updated! \nDrug:" +
                event.target.name +
                "\nColumn:" +
                event.target.id +
                "\nNew Value:" +
                event.target.value
            );
            window.location.reload();
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

  const handleDelete = async (Name) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete("https://gpgc-server.vercel.app/api/InsomniaSedatives/delete/" + Name);
        window.alert("Drug Deleted Successfully !");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
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
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <Typography className="subtitle" gutterBottom>
              Sedatives/Hypnotics Guide
            </Typography>
            <div className="grid-container" id="insomnia-sedatives-grid">
              {Object.keys(data).map((id) => {
                const dataObj = data[id];
                const isDrugSelected = selectedDrugs.includes(dataObj);
                return (
                  <div className="grid-item drug-display" key={id}>
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
                      <div>
                        <div className="box drug-box">
                          <div className="box-content">
                            <strong>Dose equiv.: </strong>
                            <input
                              id="`Dose equiv.`"
                              name={dataObj.Name}
                              type="text"
                              onFocus={store_value}
                              onBlur={update_value}
                              defaultValue={dataObj[`Dose equiv.`]}
                            />
                          </div>
                          <div className="box-content">
                            <strong>Time to peak in plasma: </strong>
                            <input
                              id="`Time to peak in plasma`"
                              name={dataObj.Name}
                              type="text"
                              onFocus={store_value}
                              onBlur={update_value}
                              defaultValue={dataObj[`Time to peak in plasma`]}
                            />
                          </div>

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
                          <div className="box-content" style={{ width: 230 }}>
                            <strong>Avg dose range (mg/day): </strong>
                            <input
                              id="`Avg dose range (mg/day)`"
                              name={dataObj.Name}
                              type="text"
                              onFocus={store_value}
                              onBlur={update_value}
                              defaultValue={dataObj[`Avg dose range (mg/day)`]}
                            />
                          </div>
                          <div className="box-content">
                            <strong>mg/Form supplied: </strong>
                            <input
                              id="`mg/Form supplied`"
                              name={dataObj.Name}
                              type="text"
                              onFocus={store_value}
                              onBlur={update_value}
                              defaultValue={dataObj[`mg/Form supplied`]}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="box-content">
                <div className="form-header">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" className="title">
                      Add New Drug
                    </Typography>
                  </Box>
                </div>

                <form onSubmit={handleSubmit}>
                  <Box>
                    <TextField label="Drug Name" variant="filled" value={drugName} onChange={handleDrugName} required />
                  </Box>
                  <Box>
                    <TextField
                      label="Dose Equiv."
                      variant="filled"
                      value={doseEquiv}
                      onChange={handleDoseEquiv}
                      type="text"
                      required
                    />
                  </Box>
                  <Box>
                    <TextField
                      label="Time to peak in plasma"
                      variant="filled"
                      value={timeToPeakInPlasma}
                      onChange={handleTime}
                      required
                    />
                  </Box>

                  <Box>
                    <TextField
                      label="Half-life"
                      variant="filled"
                      value={halfLife}
                      onChange={handleHalfLife}
                      name="halfLife"
                      multiline
                      required
                    />
                  </Box>

                  <Box>
                    <TextField
                      label="Avg Dose range (mg/day)"
                      variant="filled"
                      value={avgDoseRange}
                      onChange={handleAvgDoseRange}
                      name="avgDoseRange"
                      multiline
                      required
                    />
                  </Box>

                  <Box>
                    <TextField
                      label="mg Form supplied"
                      variant="filled"
                      value={mgFormsupplied}
                      onChange={handleMgFormSupplied}
                      name="mgFormsupplied"
                      multiline
                      required
                    />
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Button type="submit" variant="contained" className="submit-button" color="primary">
                      Submit
                    </Button>
                  </Box>
                </form>
              </div>
            </div>{" "}
            {/*  grid container ends here*/}
            <div className="keynote-div">
              <p className="keynote">
                <b>Key: </b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime.
                <br /> <br />
                <b>NOTES: </b> doses may not reflect manufacturer's recommendations but are based on research and/or
                expert opinion. All sedatives should be used sparingly in the older adults and in people with liver
                disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio.
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
          <Search onSearch={handleSearch}></Search>
          <div style={{ marginTop: "1rem" }}>
            <Typography className="subtitle" gutterBottom>
              Sedatives/Hypnotics Guide
            </Typography>

            <div className="table-container">
              <Table id="sedative-table">
                <TableHead>
                  <TableRow>
                    <TableCell className="sticky-col">Name</TableCell>
                    <TableCell className="background-cl">Dose equiv.</TableCell>
                    <TableCell className="background-cl">Time to peak in plasma</TableCell>
                    <TableCell className="background-cl">Half-life</TableCell>
                    <TableCell className="background-cl">Avg dose range (mg/day)</TableCell>
                    <TableCell className="background-cl">mg/Form supplied</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.isArray(data) &&
                    data.map((dataObj, idx) => {
                      const isDrugSelected = selectedDrugs.includes(dataObj);
                      return (
                        <TableRow key={idx} style={isDrugSelected ? { background: "lightgray" } : {}}>
                          <TableCell className="sticky-col">{dataObj.Name}</TableCell>
                          <TableCell>{dataObj["Dose equiv."]}</TableCell>
                          <TableCell>{dataObj["Time to peak in plasma"]}</TableCell>
                          <TableCell>{dataObj["Half-life"]}</TableCell>
                          <TableCell>{dataObj["Avg dose range (mg/day)"]}</TableCell>
                          <TableCell>{dataObj["mg/Form supplied"]}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>

            <div className="keynote-div">
              <p className="keynote">
                <b>Key: </b> †does not reflect maximum doses; *should be given 30-90 mins before bedtime.
                <br /> <br />
                <b>NOTES: </b> doses may not reflect manufacturer's recommendations but are based on research and/or
                expert opinion. All sedatives should be used sparingly in the older adults and in people with liver
                disease; use lowest possible dose. In older adults, there is a poor risk/benefit ratio.
              </p>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
