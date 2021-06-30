import React from 'react';
import { Info } from '@material-ui/icons';
import { FiberManualRecord } from '@material-ui/icons';
import './Widgets.css';

function Widgets() {
  const newsArticles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h4>LinkedIn News</h4>
        <Info />
      </div>
      {newsArticles('React Js Conf', 'Top news -900 readers')}
      {newsArticles('Covid virus update', 'Top news -900 readers')}
    </div>
  );
}

export default Widgets;
