import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBg: string;
    bg: string;
    bodyPrimary: string;
    button: string;
    bodySecondary: string;
    hover: string;
  }
}

export const lightTheme: DefaultTheme = {
  mainBg: '#F4F6F8',
  bg: '#ffffff',
  bodyPrimary: '#6E8098',
  bodySecondary: '#19202D',
  button: '',
  hover: '#222731',
};

export const darkTheme: DefaultTheme = {
  mainBg: '#121721',
  bg: ' #19202D',
  bodyPrimary: '#6E8098',
  button: '',
  bodySecondary: '#ffffff',
  hover: '#90A4D4',
};
