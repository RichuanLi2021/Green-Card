import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Data from "../../searchBar/Data.json";
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
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

const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [value, setValue] = useState('');
  const admin = localStorage.getItem('admin');

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

const update_value = (event) => {
  if (admin) {
    console.log(event.target.name,event.target.value,event.target.column);
    if (event.target.value !== value) {
      event.preventDefault();
      InsomniaDeprescribingUpdate(event.target.name, event.target.id, event.target.value).then((data) => {
        alert('Data successfully updated! \nDrug:'+event.target.name + "\nColumn:" + event.target.id + "\nNew Value:"+ event.target.value);
        window.location.reload();
      }).catch((error) => {
        console.error(error);
        alert('Failed to update!');
      });
    } else {
      console.log("value was not changed, not updating");
    }
  } else {
    alert("You must be an administrator to edit");
  }
};

export default function InsomniaSafety() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/insomniasafety')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  if(data.length > 0)
  { if (admin){return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
    <div id="insomniaSafety">
    <div style={{ marginTop: '1rem', padding: '0 1rem' }}>
        <Typography id="topicHeader">Sedatives/Hypnotics Safety Concerns</Typography>
      
        <TableContainer component={Paper} >
        <Table aria-label="customized table" id="safetyTable" >
          <TableBody>
            {data.map((dataObj, index) => (
              <StyledTableRow key={index} >
                <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='keynote-div'>
        <p className='keynote'><b>Key notes:</b> SHYPCLIN_SAF means safety concerns </p>
      </div>
    </div>
    </div>
  
    <Footer />
    </>
  );}else{

  
  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
    <div id="insomniaSafety">
    <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography id="topicHeader">Sedatives/Hypnotics Safety Concerns</Typography>
      </Box>
        <TableContainer component={Paper} >
        <Table aria-label="customized table" id="safetyTable" >
          <TableBody>
            {data.map((dataObj, index) => (
              <StyledTableRow key={index} >
                <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='keynote-div'>
        <p className='keynote'><b>Key notes:</b> SHYPCLIN_SAF means safety concerns </p>
      </div>
    </div>
    <Footer />
    </>
  );}
}};