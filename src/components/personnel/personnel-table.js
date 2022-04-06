import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { TableHead } from '@mui/material';
import AddBox from '@mui/icons-material/AddBox';
import { IconButton, Divider } from '@mui/material';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Delete from '@mui/icons-material/Delete';

// columns data
const columns = [
    { id: "action", label: "Action", minWidth: 100 },
    { id: "staff_number", label: "Staff no.", minWidth: 100 },
    { id: "lastname", label: "Last name", minWidth: 100 },
    { id: "firstname", label: "First name", minWidth: 100 },
    { id: "middlename", label: "Middle name", minWidth: 100 },
    // { id: "phone_number", label: "Contact no.", minWidth: 100 },
    // { id: "email", label: "Email", minWidth: 100 },
    { id: "txn_code", label: "TXN code", minWidth: 100 },
]

const PersonnelTable = (props) => {
    const { showModal, setShowModal, personnelList, page, setPage,
        rowsPerPage, setRowsPerPage, deleteData, setData } = props;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    marginBottom: -1,
                    marginTop: -3
                }}
            >
                {/* <IconButton
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        setShowModal(!showModal)
                    }}>
                    <AddBox />
                </IconButton> */}
            </Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 330 }}>
                    <Table aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bolder', textAlign: column.id === 'action' ? 'center' : 'left' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {personnelList
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={ column.id === 'action' ? 'center' : 'left'} size='small'>
                                                        {column.id === 'action' ? 
                                                        <>
                                                            <IconButton onClick={() => {
                                                                setData(row)
                                                                setShowModal(!showModal)
                                                            }}>
                                                                <ModeEdit />
                                                            </IconButton> 
                                                            <IconButton onClick={() => {
                                                                deleteData(row.id);
                                                            }}>
                                                                <Delete />
                                                            </IconButton>
                                                        </> : null}

                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={personnelList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}

export default PersonnelTable;
