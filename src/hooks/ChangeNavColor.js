import { useState, useEffect } from 'react';

export const isColorChange = () => {
  const [isColorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => removeEventListener('scroll', changeNavbarColor);
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setColorChanged(true);
    }
    if (window.scrollY === 0) {
      setColorChanged(false);
    }
  };

  return isColorChanged;
};
