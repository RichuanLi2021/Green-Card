import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function StickyHeadTable({ subcategoryHeaders }) {
  const [rows, setRows] = useState([]);


  // Initialize rows of the table using subcategoryHeaders passed to the component
  useEffect(() => {
    if (subcategoryHeaders?.length > 0) {
      const numberOfRows = subcategoryHeaders[0]?.Subcategory_Data.length;
      const newRows = [];

      for (let i = 0; i < numberOfRows; i++) {
        let row = { originalIndex: i };
        subcategoryHeaders?.forEach(header => {
          row[header.title] = {
            value: header.Subcategory_Data[i]?.value || '-',
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

  // Generate headers from the subcategory titles
  const headers = subcategoryHeaders.map(header => ({
    id: header.title,
    label: header.title,
    minWidth: 170
  }));

  return (
    <Paper sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
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
          <TableBody>
            {rows.slice().sort((a, b) => {
              const nameA = a["Name"]?.value?.toUpperCase();
              const nameB = b["Name"]?.value?.toUpperCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            }).map((row) => (
              <TableRow hover key={row.originalIndex}>
                {headers.map((header, index) => (
                  <TableCell
                    key={header.id}
                    align={header.align}
                    style={{ backgroundColor: 'white', fontSize: '16px', position: index === 0 ? 'sticky' : 'static', left: index === 0 ? 0 : 'auto', zIndex: index === 0 ? 1 : 'auto' }}
                  >
                    {row[header.id]?.value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
}
