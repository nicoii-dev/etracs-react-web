import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead, IconButton, Box } from '@mui/material';
import { AddBox } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';

const VariableTable = (props) => {
    const {variableList, showModal, setShowModal, deleteVariable, 
        selectedExpression, setSelectedExpression, onVariableAdd} = props;

    return (
        <>
            <div
                style={{
                    height: 240,
                    overflowY: 'scroll',
                }}
            >
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
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>
                                    <p style={{fontWeight: 'bold', margin: -10}}>
                                        Action
                                    </p>
                                </TableCell>
                                <TableCell align='center'>
                                    <p style={{fontWeight: 'bold', margin: -10}}>
                                        Variables
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {variableList
                            ?.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    onClick={async (event) => {
                                        setSelectedExpression(row)
                                        onVariableAdd(row.variable)
                                    }}
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                    style={{
                                        backgroundColor: selectedExpression?.id === row.id? '#CCE5FF':null
                                    }}
                                >
                                    <TableCell align='center'>
                                        <IconButton onClick={() => {
                                                deleteVariable(row.id)
                                            }}>
                                            <Delete />
                                        </IconButton>  
                                    </TableCell>
                                    <TableCell align='center'>{row.variable}</TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default VariableTable;
