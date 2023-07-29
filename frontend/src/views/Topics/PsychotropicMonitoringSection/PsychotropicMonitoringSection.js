
import PsychotropicMonitoringUpdate from "./PsychotropicMonitoringbackend";
import './PsychotropicMonitoringSection.css';

import * as React from 'react';

import Typography from '@mui/material/Typography';

import axios from 'axios';

import {useState, useEffect} from 'react';

import SearchBar from "../../searchBar/searchBar";

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';

import Navigation from '../../Navigation/navigation';

import Footer from '../../Footer/Footer';

import Data from "../../searchBar/Data.json";

import Box from '@mui/material/Box';



const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {

    backgroundColor: theme.palette.success.main,

    color:theme.palette.common.white,

    fontWeight:'bold',

    fontStyle:'italic',

    textDecorationLine:'underline',



  },

  [`&.${tableCellClasses.body}`]: {

    fontSize: 14,


  },

}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({

  '&:nth-of-type(odd)': {

    backgroundColor: theme.palette.action.hover,

  },

  // hide last border

  '&:last-child td, &:last-child th': {

    border: 0,

  },

}));


 

export default function PsychotropicMonitoringSection() {
  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');

  const handleDelete = async (Name) =>{
    if(window.confirm('Are you sure you want to delete this record?')){
    try{
      
      await axios.delete('http://localhost:8887/api/psychotropic/delete/'+Name)
      window.alert('Drug Deleted Successfully !')
      window.location.reload();
    }catch(err) {
      console.log(err);
    }
  }
  }

   //used to store value when an input is selected by user
  const store_value = (event) => {
    setValue(event.target.value);
  };
 
  const update_value = (event) => {
        if (admin) {
          console.log(value);
          if (event.target.value !== value) {
            event.preventDefault();
            PsychotropicMonitoringUpdate(event.target.name, event.target.id, event.target.value)
              .then((data) => {
                alert('Updated Successfully Called! \nDrug:' + event.target.name + "\nColumn:" + event.target.id + "\nValue:"+ event.target.value);
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
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8887/api/psychotropicmonitoringsection')

        .then(response => {

          setData(response.data)

          console.log(response.data[0]);

        })

        .catch(error => {

          console.log(error);

        });

  }, []);

 

  if(data.length > 0)

  {
    if (admin){
      return (

        <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap/.min.css" />
          <Navigation />
    
          <SearchBar placeholder="Search" data={Data} />
    
        <div id="Psychotropic">
    
        <Box
    
            sx={{
    
              marginTop: 3,
    
              display: 'flex',
    
              flexDirection: 'column',
    
              alignItems: 'center',
    
            }}
    
          >
    
            <Typography variant="h3" id="topicHeader">Psychotropic Monitoring</Typography>
    
          </Box>
    
            <div class = "container tbl-container" >
              <div class = "row tbl-fixed">
                
              
    
              <table class="table-striped table-condensed" aria-label="customized table" id="psychotropicMonitoringTable" >
                

                
                <thead >
    
                  <tr >
    
                    <th style={{ backgroundColor: '#96d2b0' }} >Name</th>
    
                    <th style={{ backgroundColor: '#96d2b0' }}>Antipsychotics</th>
    
                    <th style={{ backgroundColor: '#96d2b0' }}>Lithium</th>
    
                    <th style={{ backgroundColor: '#96d2b0' }}>Valproate</th>
    
                  </tr>
    
                </thead>
             
              
                <tbody 
                >
    
                  {data.map((dataObj, index) => (
    
                    <tr key={index} >
    
                      <td >
    
                        {dataObj.Name}
                        <button style={{background:'none',border:'none',cursor:'pointer',marginTop:'10px'}} onClick={e => handleDelete(dataObj.Name)} > <span class="material-symbols-outlined">
delete
</span></button>
                      </td>
    
                      <td ><input id="`Antipsychotics`"
                                 name={dataObj.Name}
                                 type='text'
                                 onFocus={store_value}
                                 onBlur={update_value}
                                 defaultValue={dataObj[`Antipsychotics`]} /></td>
    
                      <td ><input id="`Lithium`"
                              name={dataObj.Name} 
                              type='text' 
                              onFocus={store_value} 
                              onBlur={update_value} 
                              defaultValue={dataObj[`Lithium`]}  /></td>
    
                      <td ><input id="`Valproate`" 
                              name={dataObj.Name} 
                              type='text' 
                              onFocus={store_value} 
                              onBlur={update_value} 
                              defaultValue={dataObj[`Valproate`]} /></td>
    
                    </tr>
    
                  ))}
    
                </tbody>
    
              </table>
                    </div>
            </div><br></br>

            
          <p><b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment  </p>
    
        </div>
    
        <Footer />
    
        </>
    
      );
    }

  return (

    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap/.min.css" />
          <Navigation />
    
          <SearchBar placeholder="Search" data={Data} />
    
        <div id="Psychotropic">
    
        <Box
    
            sx={{
    
              marginTop: 3,
    
              display: 'flex',
    
              flexDirection: 'column',
    
              alignItems: 'center',
    
            }}
    
          >
    
            <Typography variant="h3" id="topicHeader">Psychotropic Monitoring</Typography>
    
          </Box>
    
            <div class = "container tbl-container" >
              <div class = "row tbl-fixed">
                
              
    
              <table class="table-striped table-condensed" aria-label="customized table" id="psychotropicMonitoringTable" >
                

                
                <thead >
    
                  <tr >
    
                    <th style={{ backgroundColor: '#96d2b0' }} >Name</th>
    
                    <th style={{ backgroundColor: '#96d2b0' }}>Antipsychotics</th>
    
                    <th style={{ backgroundColor: '#96d2b0' }}>Lithium</th>
    
                    <th style={{ backgroundColor: '#96d2b0' }}>Valproate</th>
    
                  </tr>
    
                </thead>
             
              
                <tbody 
                >
    
                  {data.map((dataObj, index) => (
    
                    <tr key={index} >
    
                      <td >
    
                        {dataObj.Name}
                       
                      </td>
    
                      <td >{dataObj[`Antipsychotics`]} </td>
    
                      <td >{dataObj[`Lithium`]}  </td>
    
                      <td >{dataObj[`Valproate`]} </td>
    
                    </tr>
    
                  ))}
    
                </tbody>
    
              </table>
                    </div>
            </div><br></br>

            
          <p><b>Key:</b>ACI: as clinically indicated, BL: baseline, m: month mark (eg. 6m: 6 month mark).  <b>NOTES</b>: these are meant to be minimum screening requirements, more frequent investigation may be necessary based on clinical judgment  </p>
    
        </div>
    
        <Footer />
    
        </>

  );

}

};

