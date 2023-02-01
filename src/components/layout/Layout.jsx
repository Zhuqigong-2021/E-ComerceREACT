import React, { Fragment } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { LayoutStyle } from './Layout.style';
import { isColorChange } from '../../hooks/ChangeNavColor';
const Layout = () => {
  const location = useLocation();
  const isNavbarScroll = isColorChange();
  const background =
    location.pathname === '/'
      ? isNavbarScroll
        ? 'black'
        : 'transparent'
      : 'black';

  return (
    <LayoutStyle>
      <Navbar background={background} />
      <Outlet />
    </LayoutStyle>
  );
};

export default Layout;
