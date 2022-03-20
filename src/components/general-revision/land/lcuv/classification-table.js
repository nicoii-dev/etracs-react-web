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

const ClassificationTable = (props) => {
    const {showModal, updateModal, setData, filteredClassification, selected, setSelected,
            dispatch, page, setPage, rowsPerPage, setRowsPerPage, deleteClassification,
            setClassificationData, fetchClasses} = props;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Divider textAlign="left">
                    <p style={{fontSize:20}}>
                        Classification
                    </p>
                </Divider>
                <Paper sx={{ width: '100%', marginTop:-5}}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2,
                            marginBottom:-3
                        }}
                    >
                        <IconButton 
                            color="primary" 
                            variant="contained" 
                            onClick={() => {
                                dispatch(updateModal(!showModal))
                                setData(null);
                            }}>
                            <AddBox />
                        </IconButton>
                        
                    </Box>
                    <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table" size={'small'}>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Action</TableCell>
                                <TableCell align='left'>Code</TableCell>
                                <TableCell align='left'>Classification</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredClassification
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                            return (
                                <TableRow
                                    hover
                                    onClick={async (event) => {
                                       await dispatch(setClassificationData(row));
                                       fetchClasses(row.id);
                                       setSelected(row.id);
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
                                                setData(row)
                                                dispatch(updateModal(!showModal))
                                            }}>
                                            <ModeEdit />
                                        </IconButton>  
                                        <IconButton onClick={() => {
                                                deleteClassification(row.id)
                                            }}>
                                            <Delete />
                                        </IconButton>  
                                    </TableCell>
                                    <TableCell align='left'>{row.code}</TableCell>
                                    <TableCell align='left'>{row.classification}</TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filteredClassification.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Paper>
        </>
    )
}

export default ClassificationTable;
