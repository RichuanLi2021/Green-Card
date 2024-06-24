import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, ButtonGroup, Menu, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Config from "../../config/config";
import './Customer.css'; // Import the CSS file

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
  const [anchorEl, setAnchorEl] = useState(null); //For handling dropdown menu

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${Config.API_URL}/api/users`, { withCredentials: true });
      setCustomersList(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //Handlers
  const handleSortByDiscipline = () => {
    const sortedList = [...customersList].sort((a, b) => a.discipline.localeCompare(b.discipline));
    setCustomersList(sortedList);
    handleCloseMenu();
  };

  const handleSortByTitle = () => {
    const sortedList = [...customersList].sort((a, b) => a.title.localeCompare(b.title));
    setCustomersList(sortedList);
    handleCloseMenu();
  };

  const handleReset = () => {
    // Logic to reset any filters or sorting
    setSearchQuery('');
    fetchCustomers();
    setAnchorEl();
    handleCloseMenu();
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const filteredCustomersList = customersList.filter((customer) =>
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Box className="customer-form-container">
        <Typography variant="h5" align="center" style={{ marginBottom: "1rem" }}>Customers</Typography>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{width:"20%", marginBottom: "1rem" }}
        />
        <ButtonGroup variant="contained" aria-label="sort and reset button">
          <Button onClick={handleMenuClick}>Sort</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
            transformOrigin={{vertical: 'top', horizontal: 'center',}}
            >
              <MenuItem onClick={handleSortByDiscipline}>By Discipline</MenuItem>
              <MenuItem onClick={handleSortByTitle}>By Title</MenuItem>
              </Menu>
              <Button onClick={handleReset}>Reset</Button>
        </ButtonGroup>
        <div style={{ overflowX: "auto" }}>
          <TableContainer component={Paper}>
            <Table aria-label="customer table">
              <TableHead>
                <TableRow>

                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Discipline</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Last Login</TableCell>
                  <TableCell>Date Created</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomersList.map((customer, index) => (
                  <TableRow key={index}>
                    <TableCell>{customer.firstName}</TableCell>
                    <TableCell>{customer.lastName}</TableCell>
                    <TableCell>{customer.discipline}</TableCell>
                    <TableCell>{customer.title}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{new Date(customer.lastLogin).toLocaleDateString('en-ca')}</TableCell>
                    <TableCell>{new Date(customer.createdAt).toLocaleDateString('en-ca')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Customer;
