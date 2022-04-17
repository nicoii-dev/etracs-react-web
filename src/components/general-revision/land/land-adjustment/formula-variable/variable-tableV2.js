import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import { TableHead, IconButton, Box } from '@mui/material';
import { AddBox, Delete, CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';

// columns data
const columns = [
    { id: "action", label: "", minWidth: 20 },
    { id: "variable", label: "Variable", minWidth: 100 },
]

const VariableTableV2 = (props) => {
    const { variableList, showModal, setShowModal, deleteVariable,
        selectedExpression, setSelectedExpression, onVariableAdd, setFormula, setFormulaFunction } = props;

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                        marginBottom: -3,
                        marginTop: -3
                    }}
                >
                    <IconButton
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            setShowModal(!showModal)
                        }}>
                        <AddBox />
                    </IconButton>
                </Box>
                <TableContainer sx={{ maxHeight: 240, height: 240, }}>
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
                            {variableList
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                            onClick={async (event) => {
                                                //  setSelectedClassification(row)
                                            }}
                                            style={{
                                                backgroundColor: selectedExpression === row.variable ? '#CCE5FF' : null
                                            }}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={'left'}>
                                                        {column.id === 'action' ? <IconButton onClick={() => {
                                                            onVariableAdd(row.variable)
                                                            setSelectedExpression(row.variable)
                                                            if (selectedExpression === row.variable) {
                                                                setSelectedExpression(null)
                                                                setFormula("")
                                                                setFormulaFunction("")
                                                            }
                                                        }}>
                                                            {selectedExpression === row.variable ? <CheckBox /> : <CheckBoxOutlineBlank />}
                                                        </IconButton> : null}
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

export default VariableTableV2;
