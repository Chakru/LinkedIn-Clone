import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItems = topic => {
    return (
      <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufdB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.profile} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">1,254</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed your posts</p>
          <p className="sidebar__statNumber">4,254</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('ui/ux')}
        {recentItems('design')}
        {recentItems('programming')}
      </div>
    </div>
  );
};

export default Sidebar;
