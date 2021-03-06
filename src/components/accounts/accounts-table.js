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
import { Block, CheckCircle } from '@mui/icons-material';

// columns data
const columns = [
    { id: "action", label: "Action", minWidth: 100 },
    { id: "personnel", label: "Personnel", minWidth: 150 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "allow", label: "Allow login", minWidth: 100 },
    { id: "role", label: "Role", minWidth: 100 },
]

const AccountsTable = (props) => {
    const { showModal, setShowModal, accountsList, page, setPage,
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
                <TableContainer sx={{ maxHeight: 700 }}>
                    <Table aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bolder', 
                                            textAlign: column.id === 'action' || column.id === 'allow' || column.id === 'role' ? 'center' : 'left' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {accountsList
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
                                                    <TableCell 
                                                        key={column.id} 
                                                        align={column.id === 'action' || column.id === 'allow' || column.id === 'role' ? 'center' : 'left'} 
                                                        size='small'>
                                                        {column.id === 'action' ?
                                                            <>
                                                                <IconButton onClick={() => {
                                                                    setData(row)
                                                                    setShowModal(!showModal)
                                                                }}>
                                                                    <ModeEdit />
                                                                </IconButton>
                                                                {/* <IconButton onClick={() => {
                                                                    deleteData(row.id);
                                                                }}>
                                                                    <Delete />
                                                                </IconButton> */}
                                                            </> : null}

                                                        {column.id === 'personnel' ?
                                                            <>
                                                            {row.lastname + " " + row.firstname + ", " + row.middlename}
                                                            </> : null}

                                                        {column.id === 'allow' ?
                                                            row.allow_login === 'yes' ?
                                                                < IconButton >
                                                                    <CheckCircle style={{ color: 'green' }} />
                                                                </IconButton>
                                                                :
                                                                <IconButton>
                                                                    <Block style={{ color: 'red' }} />
                                                                </IconButton>

                                                            : null}
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
                    count={accountsList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}

export default AccountsTable;
