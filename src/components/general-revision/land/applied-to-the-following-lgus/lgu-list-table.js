import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead, Button, Box } from '@mui/material';

const LguListTable = (props) => {
    const {selected, setSelected, filteredLguList, addLgu} = props;

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
                        }}
                    >

                    </Box>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>
                                    <p style={{fontWeight: 'bold', margin: -10}}>
                                        Name
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredLguList
                            ?.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    onClick={async (event) => {
                                        setSelected(row)
                                    }}
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                    style={{
                                     backgroundColor: selected?.id === row.id? '#CCE5FF':null
                                    }}
                                >
                                    <TableCell align='left'>{row.lgu_name}</TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
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
