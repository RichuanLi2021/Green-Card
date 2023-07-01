import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Data from "../../searchBar/Data.json";
import {useState} from "react";
import {useEffect} from "react";
import Navigation from '../../Navigation/navigation';
import Box from '@mui/material/Box';
import Footer from '../../Footer/Footer';

export default function SearchResults(){


const drugs = [
    {
       title: 'citalopram (Celexa)**',
       Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
    },
    {
        title: 'escitalopram (Cipralex)**',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'fluoxetine (Prozac) ∅',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'sertraline (Zoloft)**',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'paroxetine (Paxil) ♯',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'Vortioxetine (Trintellix)',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'duloxetine (Cymbalta)**',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'venlafaxine XR (Effexor XR)**	',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'desvenlafaxine (Pristiq)',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'mirtazapine (Remeron)**',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'bupropion (Wellbutrin SR)**	',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'bupropion (Wellbutrin XL)**		',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'desipramine (Norpramin)†	',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'nortriptyline(Aventyl)†',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'amitriptyline (Elavil)',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab'
     },
     {
        title: 'phenelzine (Nardil)	',
        Content: 'HalfLife: 23 PrimaryNT:5HT DOSE: 5-10 | 20 | 20	Frequency: od FormSupplied: 10,20,30,40/tab',
        anotherField:'dummy'
     },
     
]

const [search,setSearch] = useState('');
// useEffect(() =>{
//     const getSearch= async ()=>{
//         const res = await fetch('http://localhost:8887/api/antipsychoticsGuide');
//         const getdata = await res.json();
//         const results = getdata.filter((data) => {
//             return data.Name.toLowerCase().includes(value);
       
            
//         });

//         console.log(results);
       
//         // setSearch(getdata);
//         // console.log(getdata);
//     }
// // },[]);
return(
    <>
   
<Navigation />
 
  <input type="text" placeholder="Drug Name"  onChange={(e)=> setSearch(e.target.value)} />
  
           {drugs.filter((data) => {
                return search.toLowerCase() === '' 
                 ? data.value
                 : data.title.toLowerCase().includes(search);
           }).map((data) =>(

                <div>
                <Accordion id="firstAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>{data.title}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                <p>{data.Content}</p>
                <p>{data.anotherField}</p>
                </Typography>
        </AccordionDetails>
      </Accordion>
                </div>
                
            )
           )}
         
  
  
  </>
)}
