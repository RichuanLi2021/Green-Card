import React, { useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import Config from "../../config/config"


export default function StickyHeadTable({ drugName, subcategoryHeaders}) {

  const [showEditForm, setShowEditForm] = useState(false);
  const [rowEditNum, setRowEditNum] = useState();
  const [showEditButton, setShowEditButton] = useState(true);

  if (!subcategoryHeaders || subcategoryHeaders.length === 0) {
    return <div className="Liam"></div>;
  }

  // Generate headers from the subcategory titles
  const headers = subcategoryHeaders.map(header => ({
    id: header.title,
    label: header.title,
    uuid: header.uuid,
    minWidth: 170
  }));

  // Generate rows by aligning data across subcategories
  const rows = [];
  const numberOfRows = subcategoryHeaders[0].Subcategory_Data.length;

  for (let i = 0; i < numberOfRows; i++) {
    let row = {};
    subcategoryHeaders.forEach(header => {
      row[header.title] = header.Subcategory_Data[i]?.value || '-';
    });
    rows.push(row);
  }

  function handleClickEvent() {
    setShowEditForm(!showEditForm);
    setShowEditButton(!showEditButton);
  }

 
  const updateDrugData = async (drugUUID, subcategoryHeaderUUID, dataValue) => {
    try{
      const updateData = await axios.put(`${Config.API_URL}/api/subcategory_data/${drugUUID}`, {
        headerUUID: subcategoryHeaderUUID,  
        value: dataValue
      }, {withCredentials: true});
      if(updateData.status === 200) {
        alert("success");
      }

    } catch(error) {
      console.log(error);
    }
  }



  return (
    
    <Paper sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {showEditButton && (
                  <TableCell> Edit </TableCell>
                )}
                {headers.map((header, index) => (
                  
                  <TableCell
                    key={header.id}
                    align={header.align}
                    style={{ backgroundColor: 'white', fontSize: '16px', position: index === 0 ? 'sticky' : 'static', left: index === 0 ? 0 : 'auto', zIndex: index === 0 ? 1 : 'auto' }}
                  >
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {!showEditForm && (
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow hover tabIndex={rowIndex} key={rowIndex}>
                    {showEditButton && (
                      <TableCell> 
                        <Button onClick={function(event){setRowEditNum(rowIndex); handleClickEvent()}}>Edit</Button>  
                      </TableCell>
                    )}
                    {headers.map((header, index) => (
                      
                      <TableCell
                        key={header.id}
                        align={header.align}
                        style={{ backgroundColor: 'white', fontSize: '16px', position: index === 0 ? 'sticky' : 'static', left: index === 0 ? 0 : 'auto', zIndex: index === 0 ? 1 : 'auto' }}
                      >
                        {row[header.id]}
                      </TableCell>
                    ))}
                    
                  </TableRow>
                ))}
              </TableBody>
            )}
            {showEditForm && (
              <TableBody>
                
                  <TableRow hover >

                    {headers.map((header, index) => (
                      
                      <TableCell
                        key={header.id}
                        align={header.align}
                        style={{ backgroundColor: 'white', fontSize: '16px', position: index === 0 ? 'sticky' : 'static', left: index === 0 ? 0 : 'auto', zIndex: index === 0 ? 1 : 'auto' }}
                      >
                        <TextField defaultValue={rows[rowEditNum][header.id]}/>
                        {console.log(subcategoryHeaders[0].Subcategory_Data[0].uuid)}
                      </TableCell>
                    ))}
                    
                  </TableRow>
                
                <Button onClick={handleClickEvent}>Done</Button>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      
      
      
      

    </Paper>
    
      
  );
}
