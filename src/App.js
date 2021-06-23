import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* SideBar */}
      <div className="app__body">
        <Sidebar />
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
