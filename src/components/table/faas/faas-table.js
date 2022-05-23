import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { IconButton } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { Visibility, PictureAsPdf, Print } from '@mui/icons-material';

// components
import EnhancedTableHead from '../enhanced-table-head';
import EnhancedTableToolbar from '../enhanced-table-toolbar';

// redux
import { setAssessmentDetail } from '../../../redux/assessment-detail/actions';
import { setSelectedAdjustment } from '../../../redux/land-adjustments/actions';
import { setRevisionFaas } from '../../../redux/revision-year/action';
import { setPin } from '../../../redux/pin/action';
import { setTransaction } from '../../../redux/transaction/action';
import { setLandValueAdjustment } from '../../../redux/land-value-adjustment/action';

const FaasTable = ({
  faasList,
  setData,
  open,
  setOpen,
  selected,
  setSelected,
  setSelectedToDelete,
  deleteData,
  setShowDataCaptureModal
}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array?.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
    setSelectedToDelete(newSelected)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const updateFaas = async (rowData) => {
    setData(rowData)
    await dispatch(setTransaction("Data Capture"))
    setShowDataCaptureModal(true);
    const payload = {
      classification: rowData.classification_id,
      classification_name: rowData.classification_name,
      rate: rowData.assessment_level,
      specific_class: rowData.specific_class,
      area_type: rowData.area_type,
      sub_class: rowData.sub_class,
      unit_value: rowData.unit_value,
      land_area: rowData.area,
      market_value: rowData.market_value,
      total_land_area_sqm: rowData.area_type === "SQM" ? parseFloat(rowData.area) * 1 : parseFloat(rowData.area) * 10000,
      total_land_area_ha: rowData.area_type === "SQM" ? parseFloat(rowData.area) / 10000 : parseFloat(rowData.area) * 1,
      land_base_market_value: rowData.area * rowData.unit_value,
      land_market_value: rowData.market_value,
      land_assessed_value: rowData.assessed_value,
      taxable: rowData.taxable,
    }
    await dispatch(setAssessmentDetail(payload));
    await dispatch(setRevisionFaas(rowData.revision_year));
    await dispatch(setPin({
      pin: rowData.pin,
      municipality: rowData.city_municipality,
      municipality_lgu: rowData.city_municipality,
      lgu: rowData.barangay_lgu
    }))
    const adjustmentPayload = {
      id: rowData.actual_use,
      expression: rowData.actual_use_value
    }
    await dispatch(setSelectedAdjustment(adjustmentPayload))
    const landAdjustmentPayload = {
      adjustmentType: rowData.land_adjustment_type,
      adjustment: rowData.adjustment_value,
    }
    await dispatch(setLandValueAdjustment(landAdjustmentPayload))
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - faasList?.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      {faasList ?
        <div>
          <Paper sx={{ width: '100%', mb: 2 }}>
            {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}
            <EnhancedTableToolbar
              numSelected={selected.length}
              selected={selected}
              setSelected={setSelected}
              title={'FAAS Data'}
              deleteData={deleteData}
            />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={faasList?.length}
                  tableHead={faasList}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                        rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(faasList, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    ?.map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          //onClick={(event) => {handleClick(event, row.id)}}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row?.id}
                          selected={isItemSelected}
                        >
                          <TableCell style={{ padding: 0 }}>
                            <Checkbox
                              color="primary"
                              onClick={(event) => { handleClick(event, row?.id) }}
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell style={{ padding: 0 }}>
                            {row?.status === "INTERIM" ?
                              <IconButton onClick={() => { updateFaas(row) }}>
                                <Edit />
                              </IconButton>
                              :
                              <>
                                <IconButton onClick={() => { updateFaas(row) }}>
                                  <Visibility />
                                </IconButton>
                                {/* <IconButton onClick={() => { updateFaas(row) }}>
                                  <Print />
                                </IconButton>
                                <IconButton onClick={() => { updateFaas(row) }}>
                                  <PictureAsPdf />
                                </IconButton> */}
                              </>

                            }
                          </TableCell>
                          <TableCell align="right">{row?.status}</TableCell>
                          <TableCell align="right">{row?.transaction}</TableCell>
                          <TableCell align="right">{row?.revision_year}</TableCell>
                          <TableCell align="right">{row?.td_number}</TableCell>
                          <TableCell align="right">{row?.title_type}</TableCell>
                          <TableCell align="right">{row?.title_number}</TableCell>
                          <TableCell align="right">{row?.title_date}</TableCell>
                          <TableCell align="right">{row?.issue_date}</TableCell>
                          <TableCell align="right">{row?.effectivity}</TableCell>
                          <TableCell align="right">{row?.quarter}</TableCell>
                          <TableCell align="right">{row?.restriction}</TableCell>
                          <TableCell align="right">{row?.previous_td_number}</TableCell>
                          <TableCell align="right">{row?.previous_pin}</TableCell>
                          <TableCell align="right">{row?.previous_owner}</TableCell>
                          <TableCell align="right">{row?.owner_name}</TableCell>
                          <TableCell align="right">{row?.owner_address}</TableCell>
                          <TableCell align="right">{row?.owner_tin}</TableCell>
                          <TableCell align="right">{row?.owner_telephone}</TableCell>
                          <TableCell align="right">{row?.declared_owner}</TableCell>
                          <TableCell align="right">{row?.declared_address}</TableCell>
                          <TableCell align="right">{row?.pin}</TableCell>
                          <TableCell align="right">{row?.beneficial_user}</TableCell>
                          <TableCell align="right">{row?.beneficial_tin}</TableCell>
                          <TableCell align="right">{row?.beneficial_address}</TableCell>
                          <TableCell align="right">{row?.barangay_lgu}</TableCell>
                          <TableCell align="right">{row?.city_municipality}</TableCell>
                          <TableCell align="right">{row?.location_house_number}</TableCell>
                          <TableCell align="right">{row?.location_street}</TableCell>
                          <TableCell align="right">{row?.cadastral}</TableCell>
                          <TableCell align="right">{row?.block_number}</TableCell>
                          <TableCell align="right">{row?.survey_number}</TableCell>
                          <TableCell align="right">{row?.purok_zone}</TableCell>
                          <TableCell align="right">{row?.north}</TableCell>
                          <TableCell align="right">{row?.east}</TableCell>
                          <TableCell align="right">{row?.south}</TableCell>
                          <TableCell align="right">{row?.west}</TableCell>
                          <TableCell align="right">{row?.classification_name}</TableCell>
                          <TableCell align="right">{row?.unit_value}</TableCell>
                          <TableCell align="right">{row?.area}</TableCell>
                          <TableCell align="right">{row?.area_type}</TableCell>
                          <TableCell align="right">{row?.market_value}</TableCell>
                          <TableCell align="right">{row?.actual_use}</TableCell>
                          <TableCell align="right">{row?.actual_use_value * 100 + "%"}</TableCell>
                          <TableCell align="right">{row?.land_adjustment_type}</TableCell>
                          <TableCell align="right">{row?.adjustment_value}</TableCell>
                          <TableCell align="right">{row?.assessment_level}</TableCell>
                          <TableCell align="right">{row?.assessed_value}</TableCell>
                          <TableCell align="right">{row?.taxable === "0" ? "No" : "Yes"}</TableCell>
                          <TableCell align="right">{row?.previous_mv}</TableCell>
                          <TableCell align="right">{row?.previous_av}</TableCell>
                          <TableCell align="right">{row?.appraised_by}</TableCell>
                          <TableCell align="right">{row?.appraised_position}</TableCell>
                          <TableCell align="right">{row?.appraised_date}</TableCell>
                          <TableCell align="right">{row?.recommended_by}</TableCell>
                          <TableCell align="right">{row?.recommended_position}</TableCell>
                          <TableCell align="right">{row?.recommended_date}</TableCell>
                          <TableCell align="right">{row?.approve_by}</TableCell>
                          <TableCell align="right">{row?.approved_position}</TableCell>
                          <TableCell align="right">{row?.approve_date}</TableCell>
                          <TableCell align="right">{row?.remarks}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={faasList?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </div>
        : null}
    </Box>
  );
}

export default FaasTable;
