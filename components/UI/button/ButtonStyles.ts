import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const Button = styled.button`
  border: none;
  height: 4.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  padding: 1.6rem 0;
  transform: all ease 0.3s;
  max-width: 14.8rem;
  width: 100%;

  &:active {
    transform: scale(0.98);
  }

  &.primary {
    color: #ffffff;
    background-color: var(--color-violet);

    &:hover {
      background-color: var(--color-light-violet);
    }
  }

  &.search {
    background-color: var(--color-violet);

    margin-left: 2.6rem;

    ${media.phone} {
      max-width: 4.8rem;
      height: 4.8rem;
      margin-left: 2.3rem;
      padding: 0;

      svg {
        path {
          fill: #ffff;
        }
      }
    }

    &:hover {
      background-color: var(--color-light-violet);
    }
  }

  &.filter {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    height: 2.5rem;
    width: 2.5rem;

    svg {
      path {
        fill: ${({ theme }) => theme.buttonFilter};
      }
    }
  }
`;
