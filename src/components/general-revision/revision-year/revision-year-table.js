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
    const {showModal, setShowModal, revisionYearList, selected, setSelected, 
            dispatch, deleteYear, setSelectedYear} = props;

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
                <IconButton 
                    color="primary" 
                    variant="contained" 
                    onClick={() => {
                        setShowModal(!showModal)
                    }}>
                    <AddBox />
                </IconButton>
            </Box>
            <div
                style={{
                    height: 240,
                    overflowY: 'scroll',
                }}
            >

                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>
                                    <p style={{fontWeight: 'bold', margin: -10}}>
                                        Action
                                    </p>
                                </TableCell>
                                <TableCell align='center'>
                                    <p style={{fontWeight: 'bold', margin: -10}}>
                                        Revision Year
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {revisionYearList
                            ?.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    onClick={async (event) => {
                                        setSelected(row.id)
                                        setSelectedYear(row)
                                    }}
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                    style={{
                                        backgroundColor: selected === row.id? '#CCE5FF':null
                                    }}
                                >
                                    <TableCell align='center'>
                                        <IconButton onClick={() => {
                                                deleteYear(row.id)
                                            }}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align='center'>{row.revision_year}</TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default RevisionYearTable;
