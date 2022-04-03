import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead, IconButton, Box } from '@mui/material';
import { AddBox, Delete } from '@material-ui/icons';

// columns data
const columns = [
    { id: "action", label: "Action", minWidth: 150 },
    { id: "lgu", label: "LGU Name", minWidth: 250 },
]
const AppliedToLguTable = (props) => {
    const { showModal, setShowModal, appliedToLguList, deleteAppliedLgu } = props
    console.log(appliedToLguList)
    return (
        // <div>
        //     {/* <div
        //         style={{
        //             height: 240,
        //             overflowY: 'scroll',
        //         }}
        //     >
        //             <Box
        //                 sx={{
        //                     display: 'flex',
        //                     justifyContent: 'flex-end',
        //                     p: 2,
        //                     marginBottom: -1,
        //                     marginTop: -3
        //                 }}
        //             >
        //                 <IconButton 
        //                     color="primary" 
        //                     variant="contained" 
        //                     onClick={() => {
        //                         setShowModal(!showModal)
        //                     }}>
        //                     <AddBox />
        //                 </IconButton>
        //             </Box>
        //         <TableContainer>
        //             <Table stickyHeader aria-label="sticky table" size="small">
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell align='center'>
        //                             <p style={{fontWeight: 'bold', margin: -10}}>
        //                                 Action
        //                             </p>
        //                         </TableCell>
        //                         <TableCell align='center'>
        //                             <p style={{fontWeight: 'bold', margin: -10}}>
        //                                 Name
        //                             </p>
        //                         </TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                 {appliedToLguList
        //                     ?.map((row) => {
        //                     return (
        //                         <TableRow
        //                             hover
        //                             onClick={async (event) => {

        //                                // onVariableAdd(row.variable)
        //                             }}
        //                             role="checkbox"
        //                             tabIndex={-1}
        //                             key={row.id}
        //                             style={{
        //                                // backgroundColor: selectedExpression === row.variable? '#CCE5FF':null
        //                             }}
        //                         >
        //                             <TableCell align='center'>
        //                                 <IconButton onClick={() => {

        //                                     }}>
        //                                 </IconButton>  
        //                                 <IconButton onClick={() => {
        //                                         deleteAppliedLgu(row.id)
        //                                     }}>
        //                                     <Delete />
        //                                 </IconButton>
        //                             </TableCell>
        //                             <TableCell align='center'>{row.lgu}</TableCell>
        //                         </TableRow>
        //                         );
        //                     })}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>
        //     </div> */}
        // </div>
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    marginBottom: -1,
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
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 370 }}>
                    <Table stickyHeader aria-label="sticky table" size="small">
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
                            {appliedToLguList
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                        // onClick={async (event) => {
                                        //     setSelected(row)
                                        // }}
                                        // style={{
                                        //     backgroundColor: selected?.id === row.id ? '#CCE5FF' : null
                                        // }}
                                        >
                                            <TableCell align='center'>
                                                <IconButton onClick={() => {
                                                    deleteAppliedLgu(row.id)
                                                }}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align='center'>{row.lgu}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default AppliedToLguTable;