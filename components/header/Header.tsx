import React from 'react';

import Link from 'next/link';

import { HeaderWrapper, HeaderContentWrapper } from './HeaderStyles';
import ThemeSwitcher from './switcher/ThemeSwitcher';

import LogoIcon from '../../public/assets/desktop/logo.svg';

const Header: React.FC<{ currentTheme: string; changeTheme: () => void }> = ({
  currentTheme,
  changeTheme,
}) => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Link href={'/'}>
          <a>
            <LogoIcon />
          </a>
        </Link>
        <ThemeSwitcher currentTheme={currentTheme} changeTheme={changeTheme} />
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
