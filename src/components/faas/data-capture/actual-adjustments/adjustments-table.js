import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { TableHead } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { fetchLandAdjustmentRedux } from '../../../../redux/land-adjustments/actions';
import { setSelectedAdjustment } from '../../../../redux/land-adjustments/actions';

// columns data
const columns = [
    { id: "code", label: "Code", minWidth: 100 },
    { id: "name", label: "Name", minWidth: 170 },
    { id: "expression", label: "Expression", minWidth: 200 },
]

const ActualAdjustmentsTable = (props) => {
    const { classification_id, selected, setSelected } = props;
    const dispatch = useDispatch();

    //global state
    const adjustmentsList = useSelector((state) => state.landAdjustmentData.landAdjustment);

    // local state
    const [filteredAdjustments, setFilteredAdjustments] = React.useState([]);

    React.useEffect(() => {
        dispatch(fetchLandAdjustmentRedux());
    }, [dispatch])

    React.useEffect(() => {
        const filtered = adjustmentsList.filter((adjustments) => {
            return adjustments.classification_id.some(classification => classification.id == classification_id)
        })
        setFilteredAdjustments(filtered)
    }, [adjustmentsList, classification_id])

    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    marginBottom: -1,
                    marginTop: -3
                }}
            >
                {/* <IconButton
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        setShowModal(!showModal)
                    }}>
                    <AddBox />
                </IconButton> */}
            </Box>
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
                            {filteredAdjustments
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
                                                        {/* {column.id === 'action' ? <IconButton onClick={() => {

                                                        }}>
                                                            <Delete />
                                                        </IconButton> : null} */}

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
                    position: 'absolute',
                    right: 20,
                    bottom: 20,
                }}
            >
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => {
                        dispatch(setSelectedAdjustment(selected));
                    }}
                >
                    select
                </Button>
            </Box>
        </>
    )
}

export default ActualAdjustmentsTable;
