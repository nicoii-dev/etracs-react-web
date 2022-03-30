/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FaasTextInputController from '../../../input/faas-input';

// components
import AssessmentDetailTable from './assessment-detail-table';

const AddEditAssessmentDetail = (props) => {
    const {data, control, errors} = props
    const pin = useSelector((state) => state.pinData.pin);
    const revisionYear = useSelector(
        (state) => state.revisionYearData.currentRevision
    );

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
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
                            <Grid item md={12} xs={12} style={{ position: 'fixed' }}>

                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12}>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AddEditAssessmentDetail;