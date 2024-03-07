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


const DataTables = () => {

///////////below//////

const fetchDrugCategories = async () => {
  try {
    const response = await axios.get(`${Config.API_URL}/api/all/categories`, { withCredentials: true });
    const formattedData = response.data.message.map(category => ({
      
      
      category: category.title,
      data: category.Subcategories.map(sub => ({
        name: sub.description,
        route: sub.uuid
      }))
    }));



    setDrugList(formattedData);
  } catch (error) {
    console.error("Error fetching drug categories:", error);
  }
};



//////////above/////////
}

  export default DataTables;