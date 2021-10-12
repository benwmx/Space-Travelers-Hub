import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Yellow Planet" style={{ width: '50px', height: '50px' }} />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <div className="links">
      <NavLink to="/" activeClassName="" exact>
        Rockets
      </NavLink>
      <NavLink to="/missions" activeClassName="" exact>
        Missions
      </NavLink>
      <NavLink to="/myprofile" activeClassName="" exact>
        My profile
      </NavLink>
    </div>
  </header>
);

export default Header;
