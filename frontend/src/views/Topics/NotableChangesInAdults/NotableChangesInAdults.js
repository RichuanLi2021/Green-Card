import './NotableChangesInAdults.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import SearchBar from "../../searchBar/searchBar";
import Data from "../../searchBar/Data.json";


export default function NotableChangesInAdults() {
  

  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
      <br></br>
        <div id = "NotableChangesInAdults">
          <Typography id="mainTopic"><b>Notable Changes In Older Adults That Affect Prescribing</b></Typography>
          <Typography id="mainText">
          <ul>
          <li> Changes in volume of distribution </li>
          <li> CYP450 interactions</li>
          <li> Decline in P450 activity with some isoenzymes </li>
          <li> Decline in renal function </li>
          <li> Decreased gastric acid </li>
          <li> Decreased mesenteric blood flow </li>
          <li> Hepatic metabolism decreases with age </li>
          <li> Increased permeability of blood brain barrier </li>
          <li> Medical comorbidities </li>
          <li> Polypharmacy leading to DDIs </li>
          <li> Reduced Ach synthesis and neurons (↑AEs) </li>
          <li> Reduced baroreceptor sensitivity </li>
          <li> Reduction in DA receptors/neurons (↑EPS) </li>
          <li> SIADH and ↓Na with SSRIs more common </li>
          </ul>
          </Typography>
      </div>
      <Footer />
    </>
  );
}

