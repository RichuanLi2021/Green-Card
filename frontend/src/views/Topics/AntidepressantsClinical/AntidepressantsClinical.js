import * as React from 'react';
import Typography from '@mui/material/Typography';
//import axios from 'axios';
//import { useState, useEffect } from 'react';
import SearchBar from "../../searchBar/searchBar";
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell, { tableCellClasses } from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
//import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";

import AccordionDetails from '@mui/material/AccordionDetails';
import "./AntidepressantsClinical.css";
//import antidepressantClinicalUpdate from './antidepressantsClinicalBackend';



// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.success.main,
//     color: theme.palette.common.white,
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//     textDecorationLine: 'underline',


//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,

//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

export default function AntidepressantsClinical() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8887/api/antidepressantsclinical')
  //     .then(response => {
  //       setData(response.data)
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // const [value, setValue] = useState('');
  // const admin = localStorage.getItem('admin');

  // const store_value = (event) => {
  //   setValue(event.target.value);
  // }

  // const update_value = (event) => {
  //   if (admin) {
  //     console.log(value);
  //     if (event.target.value !== value) {
  //       event.preventDefault();
  //       antidepressantClinicalUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
  //       }).catch((error) => {
  //         console.error(error);
  //         alert('Failed to update!');
  //       });
  //     } else {
  //       console.log("value was not changed, not updating");
  //     }
  //   } else {
  //     alert("You must be an administrator to edit");
  //   }
  // };

  // if (data.length > 0) {
  //   if (admin) {
  //     return (
  //       <>
  //         <Navigation />
  //         <SearchBar placeholder="Search" data={Data} />
  //         <div id="antidepressantClinical">
  //           <Box
  //             sx={{
  //               marginTop: 3,
  //               display: 'flex',
  //               flexDirection: 'column',
  //               alignItems: 'center',
  //             }}
  //           >
  //             <Typography variant="h3" id="antidepressantClinicalHeader">Antidepressants Clinical Guide</Typography>
  //           </Box>

  //           <TableContainer component={Paper} >
  //             <Table sx={{ minWidth: 700 }} aria-label="customized table" id="antidepressantClinicalTable" >
  //               <TableHead >
  //                 <TableRow >
  //                   <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>ID</StyledTableCell>
  //                   <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Description</StyledTableCell>
  //                 </TableRow>
  //               </TableHead>
  //               <TableBody>
  //                 {data.map((dataObj, index) => (
  //                   <StyledTableRow key={index} >
  //                     <StyledTableCell component="th" scope="row">
  //                       {dataObj.LIST_HEADERS_Id}
  //                     </StyledTableCell>
  //                     <StyledTableCell align="left"><input id='`Description`' name={dataObj.Description} type='text' onFocus={store_value} onBlur={update_value} defaultValue={dataObj[`Description`]} /></StyledTableCell>
  //                   </StyledTableRow>
  //                 ))}
  //               </TableBody>
  //             </Table>
  //           </TableContainer><br></br>
  //           <p><b>Key notes: ANTID_INAD means "For inadequate response", ANTID_MAIN means "Maintenance", ANTID_TAPE means "Tapering" </b> </p>

  //         </div>
  //         <Footer />
  //       </>
  //     );
  //   }
  // } else {
    return (
      <>
        <Navigation />
        <SearchBar placeholder="Search" data={Data} />
        <div id="antidepressant-clinical">
          <Typography id="antidepressantClinicalHeader">Antidepressant Clinical Guide</Typography>
          <AccordionDetails>
            <Typography id="mainText">
            <div className='content-insomnia'>
              <p><b>For inadequate response: </b>Switching is preferred over augmentation (↓ risk of falls)</p>
              <p><b>Maintenance: </b>Single episode: ≥ 2 years. Multiple episodes: ongoing (preventative)</p>
              <p><b>Tapering: </b>2-3 months if switching or ineffective. Longer tapering period if remitted (≥1-2 years).</p>
              <p><b>Note: </b>Trial length: up to 10-12 weeks at therapeutic dose.</p>
            </div>
            </Typography>
          </AccordionDetails>   
        </div>
        <Footer />
      </>
    );
  }
//}