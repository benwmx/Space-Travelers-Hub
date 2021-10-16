import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../img/logo.svg';
import Styles from './header.module.scss';

const Header = () => {
  const selectedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const selectedMissions = useSelector(
    (state) => state.missions.filter((mission) => mission.joined),
  );
  return (
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
          <span className={Styles.numberOfSelected}>
            R(
            {selectedRockets.length}
            ) M (
            {selectedMissions.length}
            )
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
