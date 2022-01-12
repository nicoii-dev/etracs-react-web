import React from 'react';
// /import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import HeaderData from '../../components/dashboard/HeaderData';
import BarChart from '../../components/dashboard/BarChart';
import PieChart from '../../components/dashboard/PieChart';
import SplineChart from '../../components/dashboard/SplineChart';
import NewlyAddedUserTable from '../../components/dashboard/NewlyAddedUserTable';

const Dashboard = () => {
    return (
        <>
        {/* <Head>
          <title>
            Dashboard | Material Kit
          </title>
        </Head> */}
        <Box
          component="main"
          sx={{
            py: 3,
          }}
        >
          <Container maxWidth={false}>
          <HeaderData />
            <Grid container >
              <Grid item xl={8} lg={6} sm={3} xs={12} sx={{marginTop:5}}>
                <BarChart />
              </Grid>
              <Grid item xl={4} lg={6} sm={3} xs={12} sx={{marginTop:5}}>
                <PieChart sx={{ height: '100%', width: '100%' }} />
              </Grid>
              <Grid item xl={6} lg={6} sm={3} xs={12} sx={{marginTop:5}}>
                <SplineChart sx={{ height: '100%', width: '100%' }} />
              </Grid>
              <Grid item xl={6} lg={6} sm={3} xs={12} sx={{marginTop:5}}>
                <NewlyAddedUserTable sx={{ height: '100%', width: '100%' }} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    )
};

export default Dashboard;