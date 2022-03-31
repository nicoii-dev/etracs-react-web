/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { TextField, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// components
import AssessmentDetailTable from './assessment-detail-table';
import AddEditAssessmentDetail from './add-edit-assessment-detail';

const AssessmentDetail = (props) => {
    const pin = useSelector((state) => state.pinData.pin);
    const revisionYear = useSelector(
        (state) => state.revisionYearData.currentRevision
    );

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{fontSize:20}}>
                            General Information
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={12} xs={12} style={{marginTop: -20}}>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <TextField
                                fullWidth
                                label={'Revision Year'}
                                name={'revisionYear'}
                                size='small'
                                value={revisionYear}
                                disabled
                            />
                            <TextField
                                fullWidth
                                label={'PIN'}
                                name={'pin'}
                                size='small'
                                value={pin}
                                style={{ marginTop: 10 }}
                                disabled
                            />
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item md={12} xs={12}>
                            
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item md={12} xs={12}>
                                <TextField
                                    fullWidth
                                    label={'Taxable'}
                                    name={'pin'}
                                    size='small'
                                    value={pin}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            {/* <AssessmentDetailTable /> */}
                            <AddEditAssessmentDetail />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AssessmentDetail;