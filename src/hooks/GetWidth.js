import React, { useState, useEffect } from 'react';

export const getWith = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    /**this return call back is to unmount the listerner,to do cleanup,otherwise it will add
     eventListener again again which will slowdown the app */
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); //since we only want to pass it once ,we use [],coz it never changed the value ,so we audit only once like onmount
  return windowWidth;
};
