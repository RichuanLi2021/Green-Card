import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useState} from "react";
import {useEffect} from "react";
import Navigation from '../../Navigation/navigation';
import SearchIcon from '@mui/icons-material/Search';
import '../../searchBar/searchBar.css';

export default function SearchResults(){
  



const [data,setData] = useState([]);
const [searchApiData,setSearchApiData] = useState([]);
const [filterVal,setFilterVal] = useState('');

useEffect(()=>{
   const fetchData=()=>{
      fetch(process.env.REACT_APP_BACKEND_URL + "/api/SearchResults")
      .then(response=>response.json())
      .then(json =>{
         // setData(json)
         setSearchApiData(json)
      })
   }
   fetchData();

},[])

const handleFilter = (e) =>{
   const searchWord = e.target.value;
   if (searchWord === "") {
      setData([]);
   } else{
      const filterResult = searchApiData.filter(item => item.Name.toLowerCase().includes(e.target.value.toLowerCase()))
      setData(filterResult);
   }
   setFilterVal(searchWord);

}


return(
    <>
   
<Navigation />
<div className='Search-Bar-Container'>
            <div className='searchBar'>

                <form id="form">
                  <input type="text" class="inputField" placeholder="Drug Name"  value = {filterVal} onInput={(e) => handleFilter(e)} />
                  </form>
                <SearchIcon /> 
            </div>
            </div>
           {data.map((item,index) =>{
            return (
               <div key={index}>
                <Accordion id="firstAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >
            
            <b > {item.Name}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              {Object.keys(item).map((key)=>{
               return(
                  <b>{key}:{item[key]}<br/></b>
               )
               
              })}
                </Typography>
        </AccordionDetails>
      </Accordion>
                </div>
            )
           }

                
                
            )
           }
         
  
  
  </>
)}
