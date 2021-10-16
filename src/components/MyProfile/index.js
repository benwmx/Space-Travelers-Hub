import React from 'react';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import Styles from './myProfile.module.scss';

const MyProfile = () => (
  <div className={Styles.container}>
    <MyRockets />
    <MyMissions />
  </div>
);

export default MyProfile;
