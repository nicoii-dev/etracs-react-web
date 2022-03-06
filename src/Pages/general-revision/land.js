import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// components
import TabComponent from '../../components/tabs';
import AssessmentLevels from '../../components/general-revision/land/assessment-levels';
import LCUV from '../../components/general-revision/land/lcuv';

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
                    <Grid item xs={12}>
                        <TabComponent
                            tabData={tabData}
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
};

export default LandRevision;