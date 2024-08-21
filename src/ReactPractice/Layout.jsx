import React from 'react';
import '../styling/Layout.module.css';

const Layout = () => {
  return (
    <>
      <div className="timeLine">
        <div className="logo"></div>
        <div className="user_clock">
          <div></div>
          <div></div>
          <div className="clock"></div>
        </div>
      </div>
      <div className="dashboard">
        <div className="narrowOptions"></div>
        <div className="mainboard"></div>
      </div>
    </>
  );
};

export default Layout;
