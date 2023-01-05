import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
