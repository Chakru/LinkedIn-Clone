import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
const Header = () => {
  return (
    <div className="header">
      {/* Header Left  */}
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      {/* Header Right */}
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationIcon} title="Networking" />
        <HeaderOptions
          avatar="https://media-exp3.licdn.com/dms/image/C5603AQE00xDtb37bAg/profile-displayphoto-shrink_100_100/0/1517531165371?e=1629936000&v=beta&t=FHgq8_EXdVJ451JYL3Rd8Fvy41Foly74JFpMTpfq1ls"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
