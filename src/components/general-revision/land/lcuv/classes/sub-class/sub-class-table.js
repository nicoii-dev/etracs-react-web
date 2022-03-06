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
import Swal from 'sweetalert2';

const SubClassTable = (props) => {
    const {showModal, updateSubModal, setData, subClassList, dispatch, classificationData,
            page, setPage, rowsPerPage, setRowsPerPage, deleteSubClass} = props;

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
                        Sub Class
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
                            onClick={async () => {
                                if(classificationData.length === 0){
                                    Swal.fire('Please select Classification first')
                                }else{
                                    setData(null);
                                    await dispatch(updateSubModal(!showModal))
                                }        
                            }}>
                            <AddBox />
                        </IconButton>
                        
                    </Box>
                    <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Action</TableCell>
                                <TableCell align='left'>Code</TableCell>
                                <TableCell align='left'>Name</TableCell>
                                <TableCell align='left'>Unit Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {subClassList
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => {console.log(row.id)}}
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                >
                                    <TableCell align='center'>
                                        <IconButton onClick={async () => {
                                                setData(row)
                                                await dispatch(updateSubModal(!showModal))
                                            }}>
                                            <ModeEdit />
                                        </IconButton>  
                                        <IconButton onClick={async () => {
                                                deleteSubClass(row.id)
                                            }}>
                                            <Delete />
                                        </IconButton>  
                                    </TableCell>
                                    <TableCell align='left'>{row.code}</TableCell>
                                    <TableCell align='left'>{row.name}</TableCell>
                                    <TableCell align='left'>{row.unit_value}</TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={subClassList.length}
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

export default SubClassTable;
