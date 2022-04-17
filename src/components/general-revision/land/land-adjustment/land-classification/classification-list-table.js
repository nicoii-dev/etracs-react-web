import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';
import { Box, Paper } from '@mui/material';

// columns data
const columns = [
    { id: "code", label: "Code", minWidth: 100 },
    { id: "classification", label: "Name", minWidth: 170 },
]

const ClassificationListTable = (props) => {
    const { filteredClassification, addedClassificationList, selected, setSelected } = props;

    // filtering, removing the already selected classification
    const filtered = filteredClassification.filter(({ id: id1 }) => !addedClassificationList.some(({ id: id2 }) => id2 === id1));
    
    return (
        <>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 320, height: 320 }}>
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
                            {filtered
                                ?.map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                            onClick={async (event) => {
                                                setSelected(row);
                                            }}
                                            style={{
                                                backgroundColor: selected.id === row.id ? '#CCE5FF' : null
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
        </>
    )
}

export default ClassificationListTable;
