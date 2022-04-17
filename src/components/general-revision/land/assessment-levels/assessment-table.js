import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
import { TableHead } from '@mui/material';
import AddBox from '@mui/icons-material/AddBox';
import { IconButton, Divider } from '@mui/material';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Delete from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const AssessmentTable = (props) => {
    const {open, setOpen, filteredAssessmentLevels, getMarketValues, selected, setSelected,
            setData, deleteData, checked, setAssessmentLevelID} = props;

    const dispatch = useDispatch();
    const revisionYear = useSelector(state => state.revisionYearData.currentRevision)
    const updateAssessment = (rowData) => {
        setOpen(!open)
        setData(rowData)
    }

    return (
        <>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Divider textAlign="left">
                    <p style={{fontSize:20}}>
                        Assessment Levels
                    </p>
                </Divider>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                        marginBottom:-3,
                        marginTop:-5
                    }}
                >
                    <IconButton 
                        color="primary" 
                        variant="contained" 
                        onClick={() => {
                            if(revisionYear === null) {
                                Swal.fire('Select revision year to proceed')
                                return;
                            }
                            setOpen(!open)
                            setData(null)
                        }}>
                        <AddBox />
                    </IconButton>
                    
                </Box>
                <TableContainer>
                    <Table size={'small'}>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Action</TableCell>
                                <TableCell align='left'>Code</TableCell>
                                <TableCell align='left'>Name</TableCell>
                                {/* <TableCell align='left'>Fix?</TableCell> */}
                                <TableCell align='right'>Rate (%)</TableCell>
                                <TableCell align='right'>Class</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAssessmentLevels?.map((row) => {
                                return(
                                    <TableRow
                                        hover
                                        onClick={async () => {
                                            getMarketValues(row.id)
                                            setSelected(row.id)
                                            dispatch(setAssessmentLevelID(row.id));
                                        }}
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                        style={{
                                            backgroundColor: selected === row.id? '#CCE5FF':null
                                        }}
                                    >
                                        <TableCell align='center'>
                                            <IconButton onClick={() => {updateAssessment(row)}}>
                                                <ModeEdit />
                                            </IconButton>  
                                            <IconButton onClick={() => {deleteData(row.id)}}>
                                                <Delete />
                                            </IconButton>  
                                        </TableCell>
                                        <TableCell align='left'>{row.code.toUpperCase()}</TableCell>
                                        <TableCell align='left'>{row.name.length > 20 ? row.name.substring(0, 20).toUpperCase() + "..." : row.name.toUpperCase()}</TableCell>
                                        {/* <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={checked[row.fix]}
                                                disabled={true}
                                            />
                                        </TableCell> */}
                                        <TableCell align='right'>
                                            {/* <TextField
                                                id="standard-size-small"
                                                defaultValue={row.rate ? row.rate : ""}
                                                disabled={row.fix === "1" ? true:false}
                                                size="small"
                                                variant="standard"
                                                type="number"
                                                inputProps={{style: { textAlign: 'center' }}}
                                                style={{width:50}}
                                                align="center"
                                            /> */}
                                            
                                            {/* DISPLAYING 2 ZEROS AFTER THE WHOLE NUMBER */}
                                            {parseInt(row.rate).toFixed(2)}
                                        </TableCell>
                                        <TableCell align='right'>{row.class.toUpperCase()}</TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}

export default AssessmentTable;
