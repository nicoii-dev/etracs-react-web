import React, {useCallback, useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { IconButton } from '@mui/material';
import Edit from '@mui/icons-material/Edit';

// components
import EnhancedTableHead from '../enhanced-table-head';
import EnhancedTableToolbar from '../enhanced-table-toolbar';

const JuridicalTable = ({
  juridical,
  setData,
  open,
  setOpen,
  setSelectedToDelete,
  deleteData
}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
    setSelectedToDelete(newSelected)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const updateJuridical = (rowData) => {
    setOpen(!open);
    setData(rowData)
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - juridical.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
        {juridical ?
          <div>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar 
                  numSelected={selected.length} 
                  selected={selected}
                  setSelected={setSelected}
                  title={'Juridical'} 
                  deleteData={deleteData}
                />
                <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                >
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={juridical.length}
                        tableHead={juridical}
                    />
                    <TableBody>
                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                        rows.slice().sort(getComparator(order, orderBy)) */}
                    {stableSort(juridical, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;
                          return (
                            <TableRow
                                  hover
                                  //onClick={(event) => {handleClick(event, row.id)}}
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={row.id}
                                  selected={isItemSelected}
                              >
                              <TableCell padding="checkbox">
                                  <Checkbox
                                      color="primary"
                                      onClick={(event) => {handleClick(event, row.id)}}
                                      checked={isItemSelected}
                                      inputProps={{
                                          'aria-labelledby': labelId,
                                      }}
                                  />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                align="center"
                              >
                                <IconButton onClick={() => {updateJuridical(row)}}>
                                  <Edit />
                                </IconButton>
                              </TableCell>
                              <TableCell align="right">{row.account_number}</TableCell>
                              <TableCell align="right">{row.juridical_name}</TableCell>
                              <TableCell align="right">{row.contact_number}</TableCell>
                              <TableCell align="right">{row.date_registered}</TableCell>
                              <TableCell align="right">{row.kind_of_organization}</TableCell>
                              <TableCell align="right">{row.tin}</TableCell>
                              <TableCell align="right">{row.nature_of_business}</TableCell>
                              <TableCell align="right">{row.house_number}</TableCell>
                              <TableCell align="right">{row.street}</TableCell>
                              <TableCell align="right">{row.barangay}</TableCell>
                              <TableCell align="right">{row.city_municipality}</TableCell>
                              <TableCell align="right">{row.zipcode}</TableCell>
                              <TableCell align="right">{row?.remarks?.length > 10 ? row?.remarks?.substring(0, 10) + "..." : row.remarks}</TableCell>
                            </TableRow>
                          );
                    })}
                    {emptyRows > 0 && (
                        <TableRow
                            style={{
                                height: (dense ? 33 : 53) * emptyRows,
                            }}
                            >
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={juridical.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div>
      : null}
    </Box>
  );
}

export default JuridicalTable;
