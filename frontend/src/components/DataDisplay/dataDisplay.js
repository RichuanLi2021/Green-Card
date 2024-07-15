import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import PropTypes from 'prop-types';
import Config from '../../config/config';

export default function StickyHeadTable({ drugName, subcategoryHeaders, showEditButton }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [rowEditNum, setRowEditNum] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    console.log('drugName:', drugName); // Log the subCategories uuid on console to check its value
  }, [drugName]);

  if (!subcategoryHeaders || subcategoryHeaders.length === 0) {
    return <div className="Liam"></div>;
  }

  // Initialize the column of the table: Table Header with its data
  const headers = subcategoryHeaders.map(header => ({
    id: header.title,
    uuid: header.uuid, 
    label: header.title, 
    data: header.Subcategory_Data, //Subcategory_Data contains the cell's value and uuid
    minWidth: 170
  }));

  console.log("header is: ", headers)
  

  // Generate rows of the table by aligning data across subcategories
  const rows = [];
  const numberOfRows = subcategoryHeaders[0].Subcategory_Data.length;

  for (let i = 0; i < numberOfRows; i++) {
    let row = {};
    subcategoryHeaders.forEach(header => {
      row[header.title] = {
       value: header.Subcategory_Data[i]?.value || '-',
       uuid: header.Subcategory_Data[i]?.uuid || null
      }
    });
    rows.push(row);
  }

  //Check teh rows
  console.log("current rows are:", rows);

  const handleClickEvent = () => {
    setShowEditForm(!showEditForm);
  };

  const handleInputChange = (e, headerId) => {
    const { value } = e.target;
    setEditedValues(prev => ({
      ...prev,
      [headerId]: value
    }));
  };

  const handleSave = async () => {
    // Compare input values with initial fetched values
    const updatedData = subcategoryHeaders
      .filter(header => {
        const currentValue = rows[rowEditNum][header.title];
        const newValue = editedValues[header.title];
        return newValue !== undefined && newValue !== currentValue;
      })
      .map(header => {
        const dataItem = header.Subcategory_Data[rowEditNum];
        return {
          title: header.title,
          headerUUID: header.uuid,
          valueUUID: dataItem.uuid,
          value: editedValues[header.title]
        };
      });

    if (updatedData.length === 0) {
      console.log('No changes to the current data');
      handleClickEvent();
      return;
    }

    console.log("changes: ", updatedData)
  
    try {
      await Promise.all(updatedData.map(async (data) => {
        console.log("sending data :", data)
        const response = await axios.put(`${Config.API_URL}/api/subcategory_data/${data.valueUUID}`, data, { withCredentials: true });
        console.log("response is:", response)
      }));
    
      // Optionally update local state or re-fetch data to reflect changes
    } catch (error) {
      console.error('Error saving data:', error);
      console.error('Response:', error.response?.data);
    }
  
    handleClickEvent();
  };


  return (
    <Paper sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {showEditButton && <TableCell>Edit</TableCell>}
              {headers.map((header, index) => (
                <TableCell
                  key={header.id}
                  align={header.align}
                  style={{
                    backgroundColor: 'white',
                    fontSize: '16px',
                    position: index === 0 ? 'sticky' : 'static',
                    left: index === 0 ? 0 : 'auto',
                    zIndex: index === 0 ? 1 : 'auto'
                  }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!showEditForm &&
              rows.map((row, rowIndex) => (
                <TableRow hover tabIndex={rowIndex} key={rowIndex}>
                  {showEditButton && (
                    <TableCell>
                      <Button
                        onClick={() => {
                          setRowEditNum(rowIndex);
                          handleClickEvent();
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  )}
                  {headers.map((header, index) => (
                    <TableCell
                      key={header.id}
                      align={header.align}
                      style={{
                        backgroundColor: 'white',
                        fontSize: '16px',
                        position: index === 0 ? 'sticky' : 'static',
                        left: index === 0 ? 0 : 'auto',
                        zIndex: index === 0 ? 1 : 'auto'
                      }}
                    >
                      {row[header.id]?.value}
                       <div style={{ display: 'none' }}>
                        {row[header.id]?.uuid}
                        </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {showEditForm && (
              <TableRow hover>
                {headers.map((header, index) => (
                  <TableCell
                    key={header.data}
                    align={header.align}
                    style={{
                      backgroundColor: 'white',
                      fontSize: '16px',
                      position: index === 0 ? 'sticky' : 'static',
                      left: index === 0 ? 0 : 'auto',
                      zIndex: index === 0 ? 1 : 'auto'
                    }}
                  >
                    <TextField
                      defaultValue={rows[rowEditNum][header.id]?.value}
                      onChange={e => handleInputChange(e, header.id)}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <Button onClick={handleSave}>Save</Button>
                  <Button onClick={handleClickEvent}>Cancel</Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

StickyHeadTable.propTypes = {
  drugName: PropTypes.string.isRequired,
  subcategoryHeaders: PropTypes.array.isRequired,
  showEditButton: PropTypes.bool.isRequired
};