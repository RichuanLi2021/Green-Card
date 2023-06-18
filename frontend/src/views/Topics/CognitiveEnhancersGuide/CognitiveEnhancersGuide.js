import './cognitiveEnhancersGuide.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import { styled } from '@mui/material/styles';
import Data from "../../searchBar/Data.json";
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


function createDataThirdTable(contraindications,adverseEffectsAChEI,adverseEffectsMemantine ){
   return{contraindications,adverseEffectsAChEI,adverseEffectsMemantine};
}




const rowsThirdTable = [
  createDataThirdTable("No absolute contraindication","Intolerance 10-20%","Intolerance ~11%"),
  createDataThirdTable("Relative (for AChEI):","Nausea, vomiting","Dizziness"),
  createDataThirdTable("LBBB, Bradycardia","Diarrhea","Constipation"),
  createDataThirdTable("Peptic ulcer disease","Muscle cramps","Headache"),
  createDataThirdTable("COPD (severe)","Insomnia/nightmares","Sedation"),
  createDataThirdTable("Anticholinergic medication","Anorexia","Anxiety"),
  createDataThirdTable("CrCl <15ml/min(memantine)","Weight loss","Hallucinations"),
  createDataThirdTable("","Dizziness",""),
  createDataThirdTable(<i><b><u>Baseline</u></b></i>,"Drooling",""),
  createDataThirdTable("Ensure resting HR > 50","Nasopharyngitis",""),
  createDataThirdTable(<i><b><u>Monitoring</u></b></i>,<i><b><u>How & When</u></b></i>,""),
  createDataThirdTable("Cognition","MMSE (or similar) q ≥ 3-6 months",""),
  createDataThirdTable("Global functioning","IADLs & ADLs",""),
  createDataThirdTable("Target symptoms and goal attainment","Individual (eg. Repetitive questions, baking, etc)",""),
  
];

export default function CognitiveEnhancersGuide() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/CognitiveEnhancersGuide')
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

  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
        <div id = "cognitiveEnhancersGuide">
        
          <Accordion id="firstAccordionCognitive">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="firstTopic"><b>COGNITIVE ENHANCERS GUIDE</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

            <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tableOne" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell  >Name</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                        <StyledTableCell >Half-life</StyledTableCell>
                        <StyledTableCell >Dose (initial/monthly increment/maint)</StyledTableCell>
                        <StyledTableCell >Frequency</StyledTableCell>
                        <StyledTableCell >mg/form supplied</StyledTableCell>
                        <StyledTableCell >With food?</StyledTableCell>
                        

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((dataObj, index) => (
                        <StyledTableRow key={index} >
                          <StyledTableCell component="th" scope="row">
                            {dataObj.Name}
                          </StyledTableCell>
                          <StyledTableCell >{dataObj[`Action`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Half-life`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Dose (initial/monthly increment/maint)`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`Frequency`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`mg/form supplied`]}</StyledTableCell>
                          <StyledTableCell >{dataObj[`With food?`]}</StyledTableCell>
                          
                        </StyledTableRow>
                      ))}
                      
                    </TableBody>
                  </Table>
                </TableContainer><br></br><br></br>
                <p id="firstKey"><b>Key:</b> AChEI: acetylcholinesterase inhibitor; BuChEI: butyrylcholinesterase inhibitor</p>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="secondAccordionCognitive">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="secondTopic"><b>COGNITIVE ENHANCERS GUIDE cont.</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              
                <TableContainer component={Paper} >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tableTwo" >
                    <TableHead >
                      <TableRow >
                        <StyledTableCell >Name</StyledTableCell>
                        <StyledTableCell >MCI</StyledTableCell>
                        <StyledTableCell >mild-mod Alz</StyledTableCell>
                        <StyledTableCell >Severe Alz</StyledTableCell>
                        <StyledTableCell >Mixed (Alz+vas)</StyledTableCell>
                        <StyledTableCell >Vascular</StyledTableCell>
                        <StyledTableCell >LBD</StyledTableCell>
                        <StyledTableCell >FTD</StyledTableCell>
                        <StyledTableCell >PD</StyledTableCell>
                        <StyledTableCell >DSD</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((dataObjSecondTable, indexSecondTable) => (
                        <StyledTableRow key={indexSecondTable} >
                          <StyledTableCell component="th" scope="row">
                            {dataObjSecondTable.Name}
                          </StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`MCI`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`mild-mod Alz`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`Severe Alz`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`Mixed (Alz+vas)`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`Vascular`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`LBD`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`FTD`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`PD`]}</StyledTableCell>
                          <StyledTableCell >{dataObjSecondTable[`DSD`]}</StyledTableCell>
                          
                        </StyledTableRow>
                      ))}
                      
                    </TableBody>
                  </Table>
                </TableContainer><br></br><br></br>
                <p id="secondKey"><b>Key:</b> DSD: down syndrome dementia; FTD: frontotemporal dementia; LBD: lewy body dementia; MCI: mild cognitive impairment; N: not indicated; PD: parkinson's disease; Y: indicated.</p>

            </Typography>
          </AccordionDetails>
       </Accordion>

        <Accordion  id="thirdAccordionCognitive">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="thirdTopic"><b>COGNITIVE ENHANCERS CLINICAL GUIDE</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 700 }} aria-label="customized table" id="tableThree" >
                  <TableHead >
                    <TableRow >
                      <StyledTableCell style={{width:15}} >Contraindications</StyledTableCell>
                      <StyledTableCell style={{width:15}}>Adverse Effects (AChEI)</StyledTableCell>
                      <StyledTableCell >Adverse Effects (Memantine)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsThirdTable.map((row) => (
                      <StyledTableRow key={row.contraindications} >
                        <StyledTableCell component="th" scope="row">
                          {row.contraindications}
                        </StyledTableCell>
                        < StyledTableCell >{row.adverseEffectsAChEI}</StyledTableCell>
                        < StyledTableCell >{row.adverseEffectsMemantine}</StyledTableCell>
                        
                      </StyledTableRow>
                    ))}
                    
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </AccordionDetails>
                    </Accordion>
        <footer id="footer" > </footer>        
      </div>
      <Footer />
    </>
  );
}
};

