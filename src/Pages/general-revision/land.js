import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// components
import GeneralRevisionTabs from '../../components/tabs/general-revision-tabs';
import AssessmentLevels from '../../components/general-revision/land/assessment-levels';
import LCUV from '../../components/general-revision/land/lcuv';
import MarketValue from '../../components/general-revision/land/assessment-levels/market-value';

const LandRevision = () => {

    const tabData = [
        {
            'id' : '1',
            'title' : 'Assessment Levels',
            'tab' : <AssessmentLevels />
        },
        {
            'id' : '2',
            'title' : 'LCUV',
            'tab' : <LCUV />
        },
        {
            'id' : '3',
            'title' : 'Land Adjustment',
            'tab' : <AssessmentLevels />
        },
        {
            'id' : '4',
            'title' : 'Applied to the following LGUs',
            'tab' : <LCUV />
        },
    ]
    return (
        <div>
            <h1>
                Land
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <GeneralRevisionTabs
                            tabData={tabData}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item xs={12} style={{position:'fixed', marginTop:75, marginLeft:-20}}>
                            <MarketValue />
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
};

export default LandRevision;