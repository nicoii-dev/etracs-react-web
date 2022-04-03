import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead, Button, Box } from '@mui/material';

// columns data
const columns = [
    { id: "lgu_name", label: "LGU Name", minWidth: 150 },
    { id: "municipality_name", label: "Municipality Name", minWidth: 150 },
]
const LguListTable = (props) => {
    const {selected, setSelected, filteredLguList, addLgu} = props;

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 330 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bolder', textAlign: 'left' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredLguList
                                .map((row, index) => {
                                    return (
                                        <TableRow 
                                            hover 
                                            role="checkbox" 
                                            tabIndex={-1} 
                                            key={index}
                                            onClick={async (event) => {
                                                setSelected(row)
                                            }}
                                            style={{
                                                backgroundColor: selected?.id === row.id ? '#CCE5FF' : null
                                            }}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={'left'}>
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
            <Button
                style={{
                    position:'absolute',
                    bottom:15,
                    right:15
                }}
                color="primary" 
                variant="contained" 
                onClick={addLgu}
            >
                add
            </Button>
        </>
    )
}

export default LguListTable;
