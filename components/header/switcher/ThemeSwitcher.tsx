import React from 'react';

import { SwitcherWrapper, Switcher } from './ThemeSwitcherStyles';

import SunIcon from '../../../public/images/desktop/icon-sun.svg';
import MoonIcon from '../../../public/images/desktop/icon-moon.svg';

const ThemeSwitcher: React.FC<{
  currentTheme: string;
  changeTheme: () => void;
}> = ({ currentTheme, changeTheme }) => {
  return (
    <SwitcherWrapper>
      <SunIcon />
      <Switcher currentTheme={currentTheme} onClick={() => changeTheme()} />
      <MoonIcon />
    </SwitcherWrapper>
  );
};

export default ThemeSwitcher;