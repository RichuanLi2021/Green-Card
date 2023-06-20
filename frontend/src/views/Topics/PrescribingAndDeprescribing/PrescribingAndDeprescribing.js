import './PrescribingAndDeprescribing.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import SearchBar from "../../searchBar/searchBar";
import Data from "../../searchBar/Data.json";


export default function PrescribingAndDeprescribing() {
  

  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
      <br></br>
        <div id = "PrescribingAndDeprescribing">
            <Typography id="mainTopic"><b> Prescribing and Deprescribing Principles</b></Typography>
            <Typography id="mainText">
            <ul>
            <li> Reassess regularly for efficiacy and tolerability </li>
            <li> Assess medication list regularly for anticholinergic activity and drug drug interactions</li>
            <li> Most psychotropics have rebound or withdrawal effects so taper gradually and assess frequently </li>
            <li> Avoid medication with long half lives if possible</li>
            <li> For additional information: deprescribing.org, Beers Criteria, STOPP/START Criteria </li>
            </ul>
            </Typography>
      </div>
      <Footer />
    </>
  );
}
