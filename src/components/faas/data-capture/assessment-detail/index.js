/* eslint-disable no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// components
import AssessmentDetailTable from './assessment-detail-table';

const AssessmentDetail = (props) => {

    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                            <TextField
                                fullWidth
                                label={'Revision Year'}
                                name={'revisionYear'}
                                size='small'
                            />
                            <TextField
                                fullWidth
                                label={'PIN'}
                                name={'revisionYear'}
                                size='small'
                                style={{marginTop:5}}
                            />
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item md={12} xs={12} style={{position:'fixed'}}>
                       
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <AssessmentDetailTable />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AssessmentDetail;