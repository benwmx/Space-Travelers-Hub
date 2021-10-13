import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import Styles from './header.module.scss';

const Header = () => (
  <header className={Styles.header}>
    <div className={Styles.logo}>
      <img src={logo} alt="Yellow Planet" style={{ width: '50px', height: '50px' }} />
      <h1 className={Styles.title}>Space Travelers&apos; Hub</h1>
    </div>
    <div className={Styles.navLinks}>
      <NavLink to="/" activeClassName={Styles.activeLink} exact>
        Rockets
      </NavLink>
      <NavLink to="/missions" activeClassName={Styles.activeLink} exact>
        Missions
      </NavLink>
      <NavLink to="/myprofile" activeClassName={Styles.activeLink} exact>
        My profile
      </NavLink>
    </div>
  </header>
);

export default Header;
