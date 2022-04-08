import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBg: string;
    bg: string;
    bodyPrimary: string;
    buttonFilter: string;
    buttonSecondary: string;
    bodySecondary: string;
    bodySecondaryText: string;
    bodySecondaryHover: string;
    hover: string;
    bodySummary: string;
  }
}

export const lightTheme: DefaultTheme = {
  mainBg: '#F4F6F8',
  bg: '#ffffff',
  bodyPrimary: '#6E8098',
  bodySecondary: '#19202D',
  buttonFilter: '#6E8098',
  buttonSecondary: 'rgba(89,100,224, 0.1)',
  bodySecondaryText: '#5964E0',
  bodySecondaryHover: 'rgba(89,100,224, 0.35)',
  hover: '#222731',
  bodySummary: '#6E8098',
};

export const darkTheme: DefaultTheme = {
  mainBg: '#121721',
  bg: ' #19202D',
  bodyPrimary: '#6E8098',
  buttonFilter: '#ffffff',
  buttonSecondary: 'rgba(255,255,255, 0.1)',
  bodySecondaryText: '#ffffff',
  bodySecondaryHover: 'rgba(255,255,255, 0.35)',
  bodySecondary: '#ffffff',
  hover: '#90A4D4',
  bodySummary: '#6E8098',
};
