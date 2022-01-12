import React from 'react';
import { Dashboard, SaveAs, PeopleAlt, DateRange } from '@mui/icons-material';

export const PageData = [

    {
        id: 1,
        pageName: 'Dashboard',
        pageIcon: <Dashboard />,
        link: '/'
    },
    {
        id: 2,
        pageName: 'Transaction',
        pageIcon: <SaveAs />,       
    },
    {
        id: 3,
        pageName: 'Accounts',
        pageIcon: <PeopleAlt />,
        link: 'accounts'
    },
    {
        id: 4,
        pageName: 'Reports',
        pageIcon: <DateRange />,
        link: 'reports'
    },


]