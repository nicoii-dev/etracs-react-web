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
import Modal  from 'react-modal';

import AddLandClassification from './add-land-classification';
import { addClassification } from '../../../../redux/land-adjustments/actions';

const LandClassificationTable = (props) => {
    const {addedClassificationList, showClassificationModal, setShowClassificationModal} = props;

    return (
        <>
            <Paper sx={{ width: '100%'}}>
                <Divider textAlign="left">
                    <p>Applied to the following Classification</p>
                </Divider>
                <div style={{ width: '100%', marginTop:-35}}>
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
                                setShowClassificationModal(true);
                            }}>
                            <AddBox />
                        </IconButton>
                        
                    </Box>
                    
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table" size={'small'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Action</TableCell>
                                    <TableCell align='left'>Code</TableCell>
                                    <TableCell align='left'>Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {addedClassificationList
                                ?.map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        onClick={async (event) => {

                                        }}
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        <TableCell align='center'>
                                            <IconButton onClick={() => {
                                                    // deleteClassification(row.id)
                                                }}>
                                                <Delete />
                                            </IconButton>  
                                        </TableCell>
                                        <TableCell align='left'>{row.classification}</TableCell>
                                        <TableCell align='left'>{row.classification}</TableCell>
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>

            <Modal
                isOpen={showClassificationModal}
                onRequestClose={() => {
                    setShowClassificationModal(!showClassificationModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowClassificationModal(!showClassificationModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25%',
                    height: window.innerHeight > 900 ? '25%' : '35%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddLandClassification
                    addClassification={addClassification}
                />
            </Modal>
        </>
    )
}

export default LandClassificationTable;
