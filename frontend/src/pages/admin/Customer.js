import React, { useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Config from "../../config/config";

const theme = createTheme({
    palette: {
      primary: {
        main: "#96d2b0",
      },
    },
  });


const Customer = () => {

  const [customersList, setCustomersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${Config.API_URL}/api/users`, { withCredentials: true });
        setCustomersList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchCustomers();
  }, []);
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCustomersList = customersList.filter((customer) =>
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
    return (
      <ThemeProvider theme={theme}>
        <div className="form-container" style={{ height: "70%" }}>
          <div className="form-header">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" className="title">
                Customers
              </Typography>
            </Box>
          </div>
          <Box mt={2} display="flex" alignItems="center"> 
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
          </Box>
          <TableContainer component={Paper} style={{ height: "70%" }}>
            <Table stickyHeader aria-label="customer table">
              <TableHead>
                <TableRow>
                  <TableCell stickyHeader>ID</TableCell>
                  <TableCell stickyHeader>Discipline</TableCell>
                  <TableCell stickyHeader>Email</TableCell>
                  <TableCell stickyHeader>Last Login</TableCell>
                  <TableCell stickyHeader>Date Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomersList.map((customer , index) => (
                  <TableRow key={index}>
                    <TableCell>{index }</TableCell>
                    <TableCell>{customer.discipline}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{new Date(customer.lastLogin).toLocaleDateString('en-ca')}</TableCell>
                    <TableCell>{new Date(customer.createdAt).toLocaleDateString('en-ca')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </ThemeProvider>
    );
  };
  
  export default Customer;