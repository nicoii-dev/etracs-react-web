import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// components
import GeneralRevisionTabs from '../../components/tabs/general-revision';
import MarketValueTabs from '../../components/tabs/market-value';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const LandRevision = () => {
    return (
        <div>
            <h1>
                Land
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <GeneralRevisionTabs />
                    </Grid>
                    <Grid item xs={6}>
                        <MarketValueTabs />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
};

export default LandRevision;