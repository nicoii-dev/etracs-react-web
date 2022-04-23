import React, { useState, useEffect, useCallback } from 'react';
import {
    CardContent,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import TextInputController from '../../../input/text-input';

// redux

const AssessmentSummary = (props) => {
    const { control, marketValue, baseMarketValue, assessedValue } = props;

    return (
        <>
            <Grid container spacing={1} style={{ marginTop: -50 }}>
                <Grid item md={12} xs={12}>
                    <Grid item md={12} xs={12}>
                        <Divider textAlign="left">
                            <p style={{ fontSize: 20 }}>
                                Assessment Summary
                            </p>
                        </Divider>
                    </Grid>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12} style={{ marginTop: -10 }}>
                                <Grid container spacing={3}>
                                    <Grid item md={4} xs={12} style={{}}>
                                        <TextField
                                            fullWidth
                                            label="Base Market Value"
                                            name="baseMarketValue"
                                            size='small'
                                            value={parseInt(baseMarketValue).toFixed(2)}
                                            inputProps={{ style: { textAlign: "right" } }}
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} style={{}}>
                                        <TextField
                                            fullWidth
                                            label="Market Value"
                                            name="marketValue"
                                            size='small'
                                            value={parseInt(marketValue).toFixed(2)}
                                            inputProps={{ style: { textAlign: "right" } }}
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} style={{}}>
                                        <TextField
                                            fullWidth
                                            label="Assessed Value"
                                            name="assessedValue"
                                            size='small'
                                            value={assessedValue}
                                            inputProps={{ style: { textAlign: "right" } }}
                                            disabled
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Divider />
            </Grid>
        </>
    )
}

export default AssessmentSummary;