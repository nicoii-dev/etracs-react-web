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

const LandAdjustmentTable = (props) => {
    const {showModal, updateModal, setData, landAdjustmentList, selected, addClassificationRedux,
            dispatch, page, setPage, rowsPerPage, setRowsPerPage, deleteLandAdjustment, saveExpressionRedux } = props;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleDispatchClassificationList = (row) => {
        row.classification_id.map(async (classification) => {
           await dispatch(addClassificationRedux(classification));
        })
    }

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Divider textAlign="left">
                    <p style={{fontSize:20}}>
                        Land Adjustment
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
                                <TableCell align='left'>Name</TableCell>
                                <TableCell align='left'>Applied to</TableCell>
                                <TableCell align='left'>Expression</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {landAdjustmentList
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                            return (
                                <TableRow
                                    hover
                                    onClick={async (event) => {
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
                                                handleDispatchClassificationList(row)
                                                dispatch(saveExpressionRedux(row.expression))
                                            }}>
                                            <ModeEdit />
                                        </IconButton>  
                                        <IconButton onClick={() => {
                                                deleteLandAdjustment(row.id)
                                            }}>
                                            <Delete />
                                        </IconButton>  
                                    </TableCell>
                                    <TableCell align='left'>{row.code}</TableCell>
                                    <TableCell align='left'>{row.name}</TableCell>
                                    <TableCell align='left'>
                                        {row.classification_id.map((classification) => {
                                            return(
                                                classification.code + ","
                                            )
                                            
                                        })}
                                    </TableCell>
                                    <TableCell align='left'>{row.expression}</TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={landAdjustmentList?.length}
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

export default LandAdjustmentTable;
