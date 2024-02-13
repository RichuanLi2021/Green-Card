import React from 'react';
import { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "#96d2b0",
      },
    },
  });

const customers = [
  {
    id: 1,
    name: 'Sebastian Plaza',
    email: 'sb000000@hotmail.com',
    signedUp: '02/10/2024',
  },
  {
    id: 2,
    name: 'Stefano Smith',
    email: 'ss000000@gmail.com',
    signedUp: '02/06/2024',
  },
  {
    id: 3,
    name: 'John Steph',
    email: 'js000000@outlook.com',
    signedUp: '01/17/2024',
  },
];

// Mock database function to fetch customer data, TO BE IMPLEMENTED
/* async function fetchCustomers() {
    // Replace this with your actual database call
    const response = await fetch('https://your-api-url.com/customers');
    const data = await response.json();
    return data;
  } */

const Customer = () => {

    /* const [customers, setCustomers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const customersData = await fetchCustomers();
        setCustomers(customersData);
      };
  
      fetchData();
    }, []); */

    const [customersList, setCustomersList] = useState(customers);

    // Other state variables and functions like handleFilterButtonClick, handleResetButtonClick, handleSearchChange, and handleRowClick should be here
  
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
                    // value={searchTerm}
                    // onChange={handleSearchChange}
                />
          </Box>
          <TableContainer component={Paper} style={{ height: "70%" }}>
            <Table stickyHeader aria-label="customer table">
              <TableHead>
                <TableRow>
                  <TableCell stickyHeader>ID</TableCell>
                  <TableCell stickyHeader>Name</TableCell>
                  <TableCell stickyHeader>Email</TableCell>
                  <TableCell stickyHeader>Signed Up</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customersList.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.signedUp}</TableCell>
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