import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton, TextField} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import Config from '../../config/config';

export default function StickyHeadTable({ subcategoryUUID }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [rowEditNum, setRowEditNum] = useState(null);
  const [editedValues, setEditedValues] = useState({});
  const [showEditButton, setShowEditButton] = useState(true);
  const [rows, setRows] = useState([]);
  const [editRowDefaultValues, setEditRowDefaultValues] = useState({});
  const [subcategoryHeaders, setSubcategoryHeaders] = useState([]);

  // Fetch data using this subcategory's uuid and store to `subcategoryHeaders`
  const fetchSubcategoryData = async () => {
    const response = await axios.get(`${Config.API_URL}/api/subcategories/${subcategoryUUID}`, { withCredentials: true });
    const formattedHeaders = response.data.Subcategory_Headers.map(header => ({
      title: header.title,
      uuid: header.uuid,
      Subcategory_Data: header.Subcategory_Data.map(dataItem => ({
        value: dataItem.value,
        uuid: dataItem.uuid
      }))
    }));
    setSubcategoryHeaders(formattedHeaders);
  };

  useEffect(() => {
    if (subcategoryUUID) {
      fetchSubcategoryData();
    }
  }, [subcategoryUUID]);

  // Update rows of the table for re-rendering if subcategoryHeaders have changed
  useEffect(() => {
    if (subcategoryHeaders?.length > 0) {
      const numberOfRows = subcategoryHeaders[0]?.Subcategory_Data.length;
      const newRows = [];

      for (let i = 0; i < numberOfRows; i++) {
        let row = { originalIndex: i };
        subcategoryHeaders?.forEach(header => {
          row[header.title] = {
            value: header.Subcategory_Data[i]?.value || '-',
            uuid: header.Subcategory_Data[i]?.uuid || null
          };
        });
        newRows.push(row);
      }
      setRows(newRows);
    }
  }, [subcategoryHeaders]);

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

  const handleClickEvent = () => {
    setShowEditForm(!showEditForm);
    setShowEditButton(!showEditButton);
  };

  const handleInputChange = (e, headerId) => {
    const { value } = e.target;
    setEditedValues(prev => ({
      ...prev,
      [headerId]: value
    }));
  };

  const handleUpdateRow = async () => {
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
      handleClickEvent();
      return;
    }
  
    try {
      await Promise.all(updatedData.map(async (data) => {
        await axios.put(`${Config.API_URL}/api/subcategory_data/${data.valueUUID}`, data, { withCredentials: true });
      }));

      alert("Successfully saved!")

    } catch (error) {
      alert("Encountered an error saving data");
      console.error('Error saving data:', error);
      console.error('Response:', error.response?.data);
    }

    setEditedValues({});
    handleClickEvent();
  };

  const handleCreateRow = async () => {
    if (Object.keys(editedValues).length < headers.length) {
      alert("Please fill out all fields.");
      return;
    }
    const newRowData = subcategoryHeaders.map(header => {
      return {
        title: header.title,
        headerUUID: header.uuid,
        value: editedValues[header.title],
      }
    })

    try {
      await Promise.all(newRowData.map(async (data) => {
        await axios.post(`${Config.API_URL}/api/subcategory_data`, data, { withCredentials: true });
      }));

      alert("Successfully saved!")
    } catch (error) {
      alert("Encountered an error saving data");
      console.error('Error saving data:', error);
    }

    setEditedValues({});
    setShowAddForm(false);
    handleClickEvent();
  };

  const handleSave = async () => {
    showAddForm ? await handleCreateRow() : await handleUpdateRow();
    await fetchSubcategoryData();
  };

  const handleDelete = async (rowIndex) => {
    const confirmation = window.confirm('Are you sure you want to delete this row?');
    if (!confirmation) return;
    try {
      const deleteDataUUID = subcategoryHeaders
        .map(header => rows[rowIndex]?.[header.title]?.uuid).filter(uuid => uuid)
      await Promise.all(deleteDataUUID
        .map(uuid => axios.delete(`${Config.API_URL}/api/subcategory_data/${uuid}`, { withCredentials: true })));
      alert("Successfully deleted!");
    } catch (error) {
      console.error('Error deleting data:', error);
      alert("Encountered an error deleting data");
    }
    await fetchSubcategoryData();
  }


  return (
    <Paper sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {showEditButton && <TableCell/>}
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
              {showEditButton && <TableCell/>} 
              {/* This would be where the header for the delete column goes. No header needed because of icons. This is necesarry for the table to be formatted correctly */}
            </TableRow>
          </TableHead>
          <TableBody>
            {!showEditForm &&
              rows.slice().sort((a, b) => {
                const nameA = a["Name"]?.value?.toUpperCase();
                const nameB = b["Name"]?.value?.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
              }).map((row) => (
              <TableRow hover tabIndex={row.originalIndex} key={row.originalIndex}>
                  {showEditButton && (
                    <TableCell>
                      <Button
                        onClick={() => {
                          setRowEditNum(row.originalIndex);
                          setEditRowDefaultValues(rows[row.originalIndex]);
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
                    </TableCell>
                  ))}
                  <TableCell>
                    <IconButton 
                      aria-label="delete" 
                      size="large" 
                      onClick={async () => {
                        await handleDelete(row.originalIndex);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {!showEditForm && 
              <TableRow>
                <TableCell colSpan={headers.length + 2} sx={{ textAlign: 'center' }}>
                  <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: '#89cea7',
                        color: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        '&:hover': { backgroundColor: '#89cea7'}
                      }}
                      startIcon={<AddIcon />}
                      onClick={() => {
                        handleClickEvent();
                        setShowAddForm(true);
                      }}
                  >
                    Add new entry
                  </Button>
                </TableCell>
              </TableRow>
            }
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
                      defaultValue={showAddForm ? null : editRowDefaultValues[header.id]?.value}
                      onChange={e => handleInputChange(e, header.id)}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <Button onClick={handleSave}>Save</Button>
                  <Button onClick={()=> {
                    if (showAddForm) setShowAddForm(false);
                    handleClickEvent();
                  }}>Cancel</Button>
                </TableCell>
              </TableRow>
            )}

          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}