import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Divider } from '@mui/material';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Delete from '@mui/icons-material/Delete';
import AddBox from '@mui/icons-material/AddBox';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { updateModal } from '../../../redux/municipality-city/actions';
import {setMunicipalityData} from '../../../redux/barangay/action';

const MunicipalityCityTable = (props) => {
    const {
        showModal, 
        setData, 
        page, 
        setPage, 
        rowsPerPage, 
        setRowsPerPage, 
        deleteMunicipalityCity,
        getBarangayList
    } = props;
    const dispatch = useDispatch();
    const municipalityCityList = useSelector(state => state.municipalityCityData.municipalityCity)
    const [selected, setSelected] = useState(null);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Divider textAlign="left">
                    <p style={{fontSize:20}}>
                        Municipality/City
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
                            setData(null)
                        }}>
                        <AddBox />
                    </IconButton>
                    
                </Box>
                <TableContainer sx={{ maxHeight: 440, width: '100%' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Action</TableCell>
                            <TableCell align='left'>Municipality</TableCell>
                            <TableCell align='left'>LGU</TableCell>
                            <TableCell align='right'>Parent ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {municipalityCityList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow
                                hover
                                onClick={(event) => {
                                    dispatch(setMunicipalityData(row));
                                    setSelected(row.id);
                                    getBarangayList(row.id);
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
                                            deleteMunicipalityCity(row.id);
                                        }}>
                                        <Delete />
                                    </IconButton>  
                                </TableCell>
                                <TableCell align='left'>{row.municipality_name}</TableCell>
                                <TableCell align='left'>{row.lgu_name}</TableCell>
                                <TableCell align='right'>{row.parent_id}</TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={municipalityCityList?.length > 0 ? municipalityCityList?.length : 10}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Paper>
    )
}

export default MunicipalityCityTable
