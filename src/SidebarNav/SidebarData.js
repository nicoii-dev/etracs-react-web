import React from 'react';
import { Home, ListAlt, LibraryBooks, Settings} from '@material-ui/icons';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <Home />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/about',
    icon: <ListAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <LibraryBooks />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Settings />,
    cName: 'nav-text'
  }
];