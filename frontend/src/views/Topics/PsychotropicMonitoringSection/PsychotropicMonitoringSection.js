// import './PsychotropicMonitoringSection.css';
// import * as React from 'react';
// import Navigation from '../../Navigation/navigation';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import Data from "../../searchBar/Data.json";
// import SearchBar from "../../searchBar/searchBar";
// import PsychotropicMonitoringUpdate from "./PsychotropicMonitoringbackend";

// import Footer from '../../Footer/Footer';

// export default function PsychotropicMonitoringSection() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get('http://localhost:8887/api/psychotropicmonitoringsection')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const [selectedDrugs, setSelectedDrugs] = useState([]);
//   const [value, setValue] = useState('');
//   const admin = localStorage.getItem('admin');

//    //used to store value when an input is selected by user
//   const store_value = (event) => {
//     setValue(event.target.value);
//   };

//   //calls update query when an input was selected and is not anymore (if the value actually changed)
//   const update_value = (event) => {
//     if (admin) {
//       console.log(value);
//       if (event.target.value !== value) {
//         event.preventDefault();
//         PsychotropicMonitoringUpdate(event.target.name, event.target.id, event.target.value)
//           .then((data) => {
//             alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
//           })
//           .catch((error) => {
//             console.error(error);
//             alert("Failed to update!");
//           });
//       } else {
//         console.log("value was not changed, not updating");
//       }
//     } else {
//       alert("You must be an administrator to edit");
//     }
//   };

//   const handleDrugClick = (dataObj) => {
//     setSelectedDrugs((prevSelectedDrugs) => {
//       const isSelected = prevSelectedDrugs.includes(dataObj);
//       if (isSelected) {
//         return prevSelectedDrugs.filter((drug) => drug !== dataObj);
//       } else {
//         return [...prevSelectedDrugs, dataObj];
//       }
//     });
//   };

//   if (Object.keys(data).length > 0) {
//     // Editable Fields
//     if (admin) {
//       return (
//         <>
//           <Navigation />
//           <SearchBar placeholder="Search" data={Data} />
//           <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
//             <Typography variant="h4" align="center" gutterBottom>
//             <div className='subtitle'>
//               Psychotropic Monitoring
//             </div>
//             </Typography>

//             <div className="grid-container">

//               {Object.keys(data).map((id) => {
//                 const dataObj = data[id];

//                 return (
//                   <div className="grid-item" key={id}>
//                     {/* <button
//                       onClick={() => handleDrugClick(dataObj)}
//                       className={`drug-button ${isDrugSelected ? 'active' : ''}`}
//                     >
//                       {dataObj.Name}
//                     </button> */}
//                      <div className='tableFixHead'>
//                 <table>
//                   <thead>
//                   <tr>
//                       <th></th>
//                       <th> Antipsychotics </th>
//                       <th>Lithium</th>
//                       <th>Valproate</th>
//                     </tr>
//                     </thead>
//                     <tbody>

//                     {/* <tr>
//                         <td>
//                           <input id="`Antipsychotics`"
//                             name={dataObj.Name}
//                             type='text'
//                             onFocus={store_value}
//                             onBlur={update_value}
//                             defaultValue={dataObj[`Antipsychotics`]} />
//                             </td>
//                        </tr> */}

//                     </tbody>
//                     </table>
//                     </div>

//                       {/* <div className="box">

//                         <div className="box-content">

//                         </div>

//                         <div className="box-content">
//                           <strong>Lithium: </strong>
//                           <input id="`Lithium`"
//                           name={dataObj.Name}
//                           type='text'
//                           onFocus={store_value}
//                           onBlur={update_value}
//                           defaultValue={dataObj[`Lithium`]}  />
//                         </div>

//                         <div className="box-content">
//                           <strong>Valproate: </strong>
//                           <input id="`Valproate`"
//                           name={dataObj.Name}
//                           type='text'
//                           onFocus={store_value}
//                           onBlur={update_value}
//                           defaultValue={dataObj[`Valproate`]} />
//                         </div>

//                     </div> */}

//                   </div>
//                 );
//               })}

// {/* <div class="tableFixHead">
//       <table>
//         <thead>
//           <tr>
//             <th>Antipsychotics</th>
//             <th>Lithium</th>
//             <th>Valproate</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1.1</td>
//             <td>2.1</td>
//           </tr>
//           <tr>
//             <td>1.2</td>
//             <td>2.2</td>
//           </tr>
//           <tr>
//             <td>1.3</td>
//             <td>2.3</td>
//           </tr>
//           <tr>
//             <td>1.4</td>
//             <td>2.4</td>
//           </tr>
//           <tr>
//             <td>1.5</td>
//             <td>2.5</td>
//           </tr>
//           <tr>
//             <td>1.6</td>
//             <td>2.5</td>
//           </tr>
//           <tr>
//             <td>1.7</td>
//             <td>2.5</td>
//           </tr>
//           <tr>
//             <td>1.8</td>
//             <td>2.5</td>
//           </tr>
//         </tbody>
//       </table>
//     </div> */}

//     {/* </thead>
//                 </table>
//               </div> */}
//             </div>
//             <div className="psychotropic-footer">
//               <p className='psychotropic-notes'>
//               <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <br /> <br />
//               <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment
//               </p>
//             </div>
//           </div>
//           <Footer />
//         </>
//       );
//     }

//     // Non-Editable Fields
//     else {
//       return (
//         <>
//           <Navigation />
//           <SearchBar placeholder="Search" data={Data} />
//           <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
//             <Typography variant="h4" align="center" gutterBottom>
//             <div className='subtitle'>
//               Psychotropic Monitoring
//             </div>
//             </Typography>

//             <div className="grid-container">
//               {Object.keys(data).map((id) => {
//                 const dataObj = data[id];
//                 const isDrugSelected = selectedDrugs.includes(dataObj);
//                 return (
//                   <div className="grid-item" key={id}>
//                     <button
//                       onClick={() => handleDrugClick(dataObj)}
//                       className={`drug-button ${isDrugSelected ? 'active' : ''}`}
//                     >
//                       {dataObj.Name}
//                     </button>

//                     {isDrugSelected && (
//                     <div className="box">
//                       <div className="box-content">
//                         <strong>Antipsychotics: </strong>
//                         <span>{dataObj[`Antipsychotics`]}</span>
//                       </div>
//                       <div className="box-content">
//                         <strong>Lithium: </strong>
//                         <span>{dataObj[`Lithium`]}</span>
//                       </div>

//                       <div className="box-content">
//                         <strong>Valproate: </strong>
//                         <span>{dataObj[`Valproate`]}</span>
//                       </div>

//                     </div>
//                   )}
//                 </div>

//                 );
//               })}
//             </div>

//             <div class="tableFixHead">
//       <table>
//         <thead>
//           <tr>
//             <th>Col 1</th>
//             <th>Col 2</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1.1</td>
//             <td>2.1</td>
//           </tr>
//           <tr>
//             <td>1.2</td>
//             <td>2.2</td>
//           </tr>
//           <tr>
//             <td>1.3</td>
//             <td>2.3</td>
//           </tr>
//           <tr>
//             <td>1.4</td>
//             <td>2.4</td>
//           </tr>
//           <tr>
//             <td>1.5</td>
//             <td>2.5</td>
//           </tr>
//           <tr>
//             <td>1.6</td>
//             <td>2.5</td>
//           </tr>
//           <tr>
//             <td>1.7</td>
//             <td>2.5</td>
//           </tr>
//           <tr>
//             <td>1.8</td>
//             <td>2.5</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//             <div className="psychotropic-footer">
//               <p className='psychotropic-notes'>
//               <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <br /> <br />
//               <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment
//               </p>
//             </div>
//           </div>
//           <Footer />
//         </>
//       );
//     }
//   }
// }

import "./PsychotropicMonitoringSection.css";

import * as React from "react";

import Typography from "@mui/material/Typography";

import axios from "axios";

import { useState, useEffect } from "react";

import SearchBar from "../../searchBar/searchBar";

import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableContainer from "@mui/material/TableContainer";

import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import Navigation from "../../Navigation/navigation";

import Footer from "../../Footer/Footer";

import Data from "../../searchBar/Data.json";

import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,

    color: theme.palette.common.white,

    fontWeight: "bold",

    fontStyle: "italic",

    textDecorationLine: "underline",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PsychotropicMonitoringSection() {
  const [data, setData] = useState([]);
  const admin = localStorage.getItem("admin");
  
  useEffect(() => {
    axios
      .get("http://localhost:8887/api/psychotropicmonitoringsection")

      .then((response) => {
        setData(response.data);

        console.log(response.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data.length > 0) {
    if (admin) {
      return (
        <>
          <Navigation />
  
          <SearchBar placeholder="Search" data={Data} />
  
          <div id="Psychotropic">
            <Box
              sx={{
                marginTop: 3,
  
                display: "flex",
  
                flexDirection: "column",
  
                alignItems: "center",
              }}
            >
              <Typography variant="h3" id="topicHeader">
                Psychotropic Monitoring
              </Typography>
            </Box>
  
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="psychotropicMonitoringTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Name</StyledTableCell>
  
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Antipsychotics</StyledTableCell>
  
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Lithium</StyledTableCell>
  
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Valproate</StyledTableCell>
                  </TableRow>
                </TableHead>
  
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {dataObj.Name}
                      </StyledTableCell>
  
                      <StyledTableCell>{dataObj[`Antipsychotics`]}</StyledTableCell>
  
                      <StyledTableCell>{dataObj[`Lithium`]}</StyledTableCell>
  
                      <StyledTableCell>{dataObj[`Valproate`]}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>
  
            <p>
              <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark). <b>NOTES</b>:
              these are meant to be minimum screening requirements, more frequent investigation may be necessary based on
              clinical judgment{" "}
            </p>
          </div>
  
          <Footer />
        </>
      );
    }
    else {
      return (
        <>
          <Navigation />
  
          <SearchBar placeholder="Search" data={Data} />
  
          <div id="Psychotropic">
            <Box
              sx={{
                marginTop: 3,
  
                display: "flex",
  
                flexDirection: "column",
  
                alignItems: "center",
              }}
            >
              <Typography variant="h3" id="topicHeader">
                Psychotropic Monitoring
              </Typography>
            </Box>
  
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" id="psychotropicMonitoringTable">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Name</StyledTableCell>
  
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Antipsychotics</StyledTableCell>
  
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Lithium</StyledTableCell>
  
                    <StyledTableCell style={{ backgroundColor: "#96d2b0" }}>Valproate</StyledTableCell>
                  </TableRow>
                </TableHead>
  
                <TableBody>
                  {data.map((dataObj, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {dataObj.Name}
                      </StyledTableCell>
  
                      <StyledTableCell>{dataObj[`Antipsychotics`]}</StyledTableCell>
  
                      <StyledTableCell>{dataObj[`Lithium`]}</StyledTableCell>
  
                      <StyledTableCell>{dataObj[`Valproate`]}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>
  
            <p>
              <b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark). <b>NOTES</b>:
              these are meant to be minimum screening requirements, more frequent investigation may be necessary based on
              clinical judgment{" "}
            </p>
          </div>
  
          <Footer />
        </>
      );
    }
    
  }
}
