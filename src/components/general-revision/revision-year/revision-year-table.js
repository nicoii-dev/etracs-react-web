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

const RevisionYearTable = (props) => { 
    const { revisionYearList, selected, setSelected, deleteYear, setSelectedYear, revisionRoute } = props;

    // columns data
    const columns = [
        { id: "action", label: "Action", minWidth: 100 },
        { id: "revision_year", label: "Revision Year", minWidth: 170 },
    ]
    if(revisionRoute) columns.shift(); //remove if the route is revision
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
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 280 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bolder', textAlign: 'center' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {revisionYearList
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                            onClick={async (event) => {
                                                setSelected(row.id)
                                                setSelectedYear(row)
                                            }}
                                            style={{
                                                backgroundColor: selected === row.id ? '#CCE5FF' : null
                                            }}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={'center'} size='small'>
                                                        {column.id === 'action' ? <IconButton onClick={() => {
                                                            deleteYear(row.id)
                                                        }}>
                                                            <Delete />
                                                        </IconButton> : null}

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
            </Paper>
        </>
    )
}

export default RevisionYearTable;
