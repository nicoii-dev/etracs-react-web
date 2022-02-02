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
        subPage: 
        [{
            subPageName: 'Online',
            link: 'transaction/online'
        },
        {
            subPageName: 'Offline',
            link: 'transaction/offline'
        }] 
    },
    {
        id: 3,
        pageName: 'Accounts',
        pageIcon: <PeopleAlt />,
        link: 'accounts'
    },
    {
        id: 4,
        pageName: 'General Revision',
        pageIcon: <SaveAs />,
        subPage: 
        [{
            subPageName: 'Land',
            link: 'generalrevision/online'
        },
        {
            subPageName: 'Building',
            link: 'generalrevision/offline'
        }] 
    },
    {
        id: 10,
        pageName: 'Reports',
        pageIcon: <DateRange />,
        link: 'reports'
    },


]