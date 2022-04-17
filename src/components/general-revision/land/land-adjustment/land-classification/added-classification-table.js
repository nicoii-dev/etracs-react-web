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
import { IconButton, Divider, Button } from '@mui/material';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Delete from '@mui/icons-material/Delete';
import Modal  from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import AddLandClassification from './add-land-classification';
import { addClassificationRedux, removeClassification } from '../../../../../redux/land-adjustments/actions';

const AddedClassificationTable = (props) => {
    const {showClassificationModal, setShowClassificationModal} = props;
    const addedClassificationList = useSelector(state => state.landAdjustmentData.addedClassification);

    const dispatch = useDispatch();

    return (
        <>
            <Divider textAlign="left">
                <p>Applied to the following Classification</p>
            </Divider>
            <div style={{float:'right', marginTop:-20}}>
                <IconButton
                    style={{top:0, right:15, alignSelf:'right'}}
                    color="primary" 
                    variant="contained" 
                    onClick={() => {
                        setShowClassificationModal(true);
                    }}>
                    <AddBox />
                </IconButton>
            </div>
                <br />
            <div 
                style={{ 
                    height: 200,
                    maxHeight: '70%',
                    overflowY: 'scroll',
                }}
            >

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
                                                dispatch(removeClassification(row))
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
            </div>

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
                    width: '30%',
                    height: window.innerHeight > 900 ? '45%' : '50%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddLandClassification
                    addClassificationRedux={addClassificationRedux}
                />
            </Modal>
        </>
    )
}

export default AddedClassificationTable;
