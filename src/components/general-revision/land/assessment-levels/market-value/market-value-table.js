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
import Swal from 'sweetalert2';

const MarketValueTable = (props) => {
    const {marketValue, open, setOpen, setData, deleteMarketValue, assessmentLevelID} = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
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
                    Market Value
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
                            if(assessmentLevelID){
                                setOpen(!open)
                                setData(null)
                            } else {
                                Swal.fire('Please select an Assessment Level first')
                            }
                        }}>
                        <AddBox />
                    </IconButton>
                    
                </Box>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" size={'small'}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Action</TableCell>
                            <TableCell align='left'>Market value from</TableCell>
                            <TableCell align='left'>Market value to</TableCell>
                            <TableCell align='left'>Rate (%)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {marketValue
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                    <IconButton onClick={() => {
                                            setData(row)
                                            setOpen(!open)
                                        }}>
                                        <ModeEdit />
                                    </IconButton>  
                                    <IconButton onClick={() => {
                                            deleteMarketValue(row.id)
                                        }}>
                                        <Delete />
                                    </IconButton>  
                                </TableCell>
                                <TableCell align='right'>{row.market_value_from}</TableCell>
                                <TableCell align='right'>{row.market_value_to}</TableCell>
                                <TableCell align='right'>{row.market_value_rate}</TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={marketValue.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Paper>
    )
}

export default MarketValueTable
