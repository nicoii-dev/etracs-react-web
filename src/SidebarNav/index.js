import React, { useState } from 'react';
import { Close, Dehaze} from '@material-ui/icons';
import { SidebarData } from './SidebarData';
import './sidebarCSS.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SidebarNav = () => {

    const [selected, setSelected] = useState('');
    const [expanded, setExpanded] = useState('');

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const onSelected = (selected) => {
        setSelected(selected);
        // const to = '/' + selected;
        // if (location.pathname !== to) {
        //     history.push(to);
        // }
    }

    const onToggle = (expanded) => {
        setExpanded(expanded);
    };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <Dehaze onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <Close />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  </>
  );
}

export default SidebarNav;