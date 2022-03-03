import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Delete from '@mui/icons-material/Delete';
import AddBox from '@mui/icons-material/AddBox';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import { useForm, Controller } from "react-hook-form";

import TextInputController from '../../input/text-input';

const BarangayTable = (props) => {
    const {
        barangayList,
        showModal, 
        setData, 
        page, 
        setPage, 
        rowsPerPage, 
        setRowsPerPage, 
        dispatch,
        updateBarangayModal,
        deleteBarangay,
        municipalityData
    } = props;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Paper sx={{ width: '100%' }}>
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
                            if(municipalityData.length === 0){
                                Swal.fire('Please select Municipality/City first')
                            }else{
                                dispatch(updateBarangayModal(!showModal))
                                setData(null)
                            }                            
                        }}>
                        <AddBox />
                    </IconButton>
                    
                </Box>
                <TableContainer sx={{ maxHeight: 440,}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Action</TableCell>
                            <TableCell align='left'>LGU Name</TableCell>
                            <TableCell align='left'>Formal Name</TableCell>
                            <TableCell align='right'>Index No.</TableCell>
                            <TableCell align='right'>PIN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {barangayList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow
                                hover
                                onClick={(event) => {
                                    //dispatch(setMunicipalityId(row.id));
                                }}
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                            >
                                <TableCell align='center'>
                                    <IconButton onClick={() => {
                                            setData(row)
                                            dispatch(updateBarangayModal(!showModal))
                                        }}>
                                        <ModeEdit />
                                    </IconButton>  
                                    <IconButton onClick={() => {
                                            deleteBarangay(row.id)
                                        }}>
                                        <Delete />
                                    </IconButton>  
                                </TableCell>
                                <TableCell align='left'>{row.lgu_name}</TableCell>
                                <TableCell align='left'>{row.formal_name}</TableCell>
                                <TableCell align='right'>{row.index_number}</TableCell>
                                <TableCell align='right'>{row.pin}</TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={10}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Paper>
    )
}

export default BarangayTable;
