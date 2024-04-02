import React, { useEffect } from 'react';
import { useState, useRef  } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Checkbox } from '@mui/material';
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


const Accounts = () => {

  const [customersList, setCustomersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const selectedListRef = useRef(customersList);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(`${Config.API_URL}/api/users`, { withCredentials: true });
        setCustomersList(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchCustomers();
  }, []);
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //The function dynamically updates the selection of customers based on user interaction.
  const handleSelectReview = (customer) => {
    const selectedIndex = selectedCustomers.indexOf(customer);
    let newSelected = [];

    if (selectedIndex === -1) {
        // Customer not in the list, add them
        newSelected = [...selectedCustomers, customer];
    } else {
        // Customer in the list, remove them by filtering
        newSelected = selectedCustomers.filter((c) => c !== customer);
    }

    setSelectedCustomers(newSelected);

    // Reset the selectedCustomers state when the Set Admin Privileges button is clicked
    if (newSelected.length === selectedListRef.length) {
        setSelectedCustomers([]);
    }
  };

    //Admin priveleges NOT implemented yet as of 03/2024 
    //functionality only configured to display on console that an user has received admin privileges.
  const setAdminPrivileges = () => {
    if (selectedCustomers.length === 0) {
        //Suggestion: Display notification for the following:
        console.log('Please select an user before setting admin status')
    } else {
      setSelectedCustomers([]);
  
      const selectedCustomersWithAdminPrivileges = selectedCustomers.map((customer) => {
        return {
          firstName: customer.firstName,
          adminPrivilege: true,
        };
      });
      //Suggestion: Display notification for the following: "User has been granted admin privileges"
      console.log(selectedCustomersWithAdminPrivileges);
  
    }
  };

    //User priveleges NOT implemented yet as of 03/2024 
    //functionality only configured to display on console that an user has restore its status back to USER.
  const setUserPrivileges = () => {
    if (selectedCustomers.length === 0) {
        //Suggestion: Display notification for the following:
        console.log('Please select an user before restoring user status')
    } else {
    setSelectedCustomers([]);
    
    const selectedCustomersWithUserPrivileges = selectedCustomers.map((customer) => {
        return {
        firstName: customer.firstName,
        adminPrivilege: false,
        };
    });
    //Suggestion: Display notification for the following: "User has been granted admin privileges"
    console.log(selectedCustomersWithUserPrivileges);
    }

  };

  const filteredCustomersList = customersList.filter((customer) =>
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
    customer.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.lastName.toLowerCase().includes(searchQuery.toLowerCase())
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
                Account Privileges
              </Typography>
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
            <Button
                variant="contained"
                onClick={setAdminPrivileges}
                sx={{ backgroundColor: '#96d2b0', color: 'black', mr: 1}}
                >
                Set Admin Privileges
            </Button>
            <Button
                variant="contained"
                onClick={setUserPrivileges}
                sx={{ backgroundColor: '#96d2b0', color: 'black', mr: 1}}
                >
                Reset to User status
            </Button>
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
                  <TableCell padding="checkbox">Select</TableCell>
                  <TableCell stickyHeader>First Name</TableCell>
                  <TableCell stickyHeader>Last Name</TableCell>
                  <TableCell stickyHeader>Discipline</TableCell>
                  <TableCell stickyHeader>Email</TableCell>
                  <TableCell stickyHeader>Last Login</TableCell>
                  <TableCell stickyHeader>Date Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomersList.map((customer , index) => (
                  <TableRow key={index}>
                    <TableCell padding="checkbox" onClick={(event) => event.stopPropagation()}>
                    <Checkbox
                        checked={selectedCustomers.indexOf(customer) !== -1}
                        onChange={(event) => handleSelectReview(customer)}
                    />
                    </TableCell>
                    <TableCell>{customer.firstName }</TableCell>
                    <TableCell>{customer.lastName }</TableCell>
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
  
  export default Accounts;