import './antipsychoticsGuide.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Navigation from '../../Navigation/navigation';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {TextField} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
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

export default function AntipsychoticsGuide() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/antipsychoticsGuide')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  const [name, setName] = useState('');
  const [approx_equiv_dose, setApprox] = useState('');
  const [half_life , setHalfLife] = useState('');
  const [frequency, setFrequency] = useState('');
  const [tab_strength_form_supplied, setTabStrength] = useState('');
  const [nps, setNps] = useState('');
  const [pp, setPP] = useState('');
  const [mde_w_psychosis, setMDE] = useState('');
  const [delirium, setDelirium] = useState('');
  const [eo_scz, setEoScz] = useState('');
  const [lo_scz, setLoScz] = useState('');
  const admin = localStorage.getItem('admin');

  const approx_equiv_dose_change = (event) => {
    if(admin)
    {
      setApprox(event.target.value);
    }
    else
    {
      alert("You must be an administrator to edit");
    }
  };
  const half_life_change = (event) => {
    if(admin)
    {
      setHalfLife(event.target.value);
    }
    else
    {
      alert("You must be an administrator to edit");
    }
  };

  if(data.length > 0)
  {
    return (
        <>
          <Navigation/>
          <div id="antipsychoticsGuide">
            <h1 id="heading">Antipsychotics Guide</h1>
            <TableContainer component={Paper}>
              <Table sx={{minWidth: 700}} aria-label="customized table" id="table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{width:15}}>Name</StyledTableCell>
                    <StyledTableCell align="left" style={{width:15}}>Approx equiv.dose</StyledTableCell>
                    <StyledTableCell align="right">Half-life&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Frequency&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Tab Strength/ Form Supplied&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">NPS&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">PP&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">MDE(AD augment)&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">MDE(w.psychosis)&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Delirium&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">EO-SCZ&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">LO-SCZ&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((dataObj, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {dataObj.Name}
                        </StyledTableCell>
                        <StyledTableCell align="left"><TextField onChange={approx_equiv_dose_change} value={dataObj[`Approx. equiv. dose`]}/></StyledTableCell>
                        <StyledTableCell align="right"><TextField onChange={half_life_change} value={dataObj[`Half-life`]}/></StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`Frequency`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`Tab Strength/Form Supplied`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`NPS`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`PP`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`MDE (ADaugment)`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`MDE (w.psychosis)`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`Delirium`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`EO-SCZ`]}</StyledTableCell>
                        <StyledTableCell align="right">{dataObj[`LO-SCZ`]}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <footer id="footer"><b>Key:</b> AD: antidepressant; er: extended release; ir: immediate release; EO-SCZ:
              early-onset schizophrenia; LO-SCZ: late-onset schizophrenia; MDE: major depressive disorder; NPS:
              neuropsychiatric symptoms of dementia; NR: not recommended; PP: Parkinson's psychosis; †0.25 of adult
              equivalent dose shown (see Yellow Card); ‡take with meal (≥350 kcal); ^accounts for half-life of active
              metabolites; **preferred medication based on research and/or expert opinion; ?inconsistent or insufficient
              data. <b>NOTES:</b> doses may not reflect manufacturers' recommendations but are based on clinical
              literature and opinion. Half lives are estimates based on adult data and in older adults they can often be
              increased up to 170%.
            </footer>
          </div>
        </>
    );
  }
};
