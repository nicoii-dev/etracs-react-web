import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Box,Button} from '@mui/material';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

import TextInputController from '../../../input/text-input';

// columns data
const columns = [
    { id: "code", label: "Code", minWidth: 100 },
    { id: "name", label: "Name", minWidth: 170 },
]
const AddEditClassification2 = (props) => {
    const { data, addClassification, updateClassification, setSelectedClassification, selectedClassification } = props;
    const { handleSubmit, control, formState: { errors } } = useForm();

    // global state
    const assessmentList = useSelector(state => state.assessmentLevelData.assessmentLevel)
    const classificationList = useSelector(state => state.classificationData.classification)
    const revisionYear = useSelector(state => state.revisionYearData.currentRevision)

    // filtering, getting data based on revision year
    const fileteredAssessment = assessmentList.filter((assessment) => {
        return assessment?.year_tag === revisionYear?.toString();
    })
    // filtering, removing the already selected classification
    const filteredClassification= fileteredAssessment.filter(({name: id1}) => !classificationList.some(({classification: id2}) => id1 === id2));
    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 370 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bolder', textAlign: 'center' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredClassification
                                .map((row, index) => {
                                    return (
                                        <TableRow 
                                            hover 
                                            role="checkbox" 
                                            tabIndex={-1} 
                                            key={index}
                                            onClick={async (event) => {
                                                setSelectedClassification(row)
                                            }}
                                            style={{
                                                backgroundColor: selectedClassification?.id === row.id ? '#CCE5FF' : null
                                            }}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={'center'}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    marginBottom: -3,
                    position: 'absolute',
                    right: 10,
                    bottom: 30,
                }}
            >
                <Button color="primary" variant="contained" onClick={handleSubmit(addClassification)}>
                    {'save'}
                </Button>

            </Box>
        </>
    )
}

export default AddEditClassification2;
