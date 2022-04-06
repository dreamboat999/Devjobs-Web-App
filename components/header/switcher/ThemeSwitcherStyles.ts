import styled from 'styled-components';

interface ISwitcherProps {
  currentTheme: string;
}

export const SwitcherWrapper = styled.div`
  width: 11.2rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Switcher = styled.button<ISwitcherProps>`
  position: relative;
  border: none;
  width: 4.8rem;
  background-color: #ffffff;
  border-radius: 1.2rem;
  height: 100%;
  cursor: pointer;
  z-index: 1;

  &::before {
    position: absolute;
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    background-color: var(--color-violet);
    border-radius: 50%;
    top: 0.5rem;
    left: ${({ currentTheme }) =>
      currentTheme === 'light' ? '0.5rem' : '2.9rem'};

    transition: left 0.3s ease;
  }

  &:hover {
    &::before {
      background-color: var(--color-light-violet);
    }
  }
`;
