import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';

const ClassificationListTable = (props) => {
    const {classificationList, addedClassificationList, selected, setSelected} = props;

     // filtering, removing the already selected classification
    const filteredClassification= classificationList.filter(({id: id1}) => !addedClassificationList.some(({id: id2}) => id2 === id1));

    return (
        <>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>Code</TableCell>
                            <TableCell align='left'>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredClassification
                        ?.map((row) => {
                        return (
                            <TableRow
                                hover
                                onClick={async (event) => {
                                    setSelected(row);
                                }}
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                                style={{
                                    backgroundColor: selected.id === row.id? '#CCE5FF':null
                                }}
                            >
                                <TableCell align='left'>{row.code}</TableCell>
                                <TableCell align='left'>{row.classification}</TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ClassificationListTable;
