import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function StickyHeadTable({ drugName, subcategoryHeaders }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  if (!subcategoryHeaders || subcategoryHeaders.length === 0) {
    return <div class="Liam"></div>;
  }

  // Generate headers from the subcategory titles
  const headers = subcategoryHeaders.map(header => ({
    id: header.title,
    label: header.title,
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header.id}
                  align={header.align}
                  style={{ minWidth: header.minWidth, fontSize: '16px'  }}
                  
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
              <TableRow hover tabIndex={-1} key={rowIndex}>
                {headers.map((header) => (
                  <TableCell key={header.id} align={header.align} style={{ fontSize: '16px'  }}>
                    {row[header.id]}
                    
                  
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
