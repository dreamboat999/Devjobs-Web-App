import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

interface ISearchProps {
  isCheked: boolean;
}

export const SearchBar = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.bg};
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  button {
    &.primary {
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
    }
  }
`;

export const InputControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  height: 100%;
  padding: 0 2.3rem;
  border-right: 1px solid rgba(110, 128, 152, 0.2);

  svg {
    min-width: 2.4rem;
  }

  &.search {
    width: 100%;
    min-width: 33rem;
    padding-left: 1.6rem;

    ${media.tablet} {
      min-width: 22rem;
    }

    ${media.phone} {
      min-width: 14rem;
      padding: 0;
    }
  }

  &.location {
    max-width: 30rem;
    width: 100%;
    min-width: 23rem;
  }

  ${media.phone} {
    border-right: none;
  }
`;

export const SearchInput = styled.input`
  border: none;
  font-family: inherit;
  font-size: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.bodySecondary};
  cursor: pointer;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.bodySecondary};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;

export const CheckBoxWrapper = styled.div`
  max-width: 14.8rem;
  width: 100%;
  min-width: 11rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-left: 3.2rem;

  p {
    color: ${({ theme }) => theme.bodySecondary};
    font-weight: 700;
    cursor: pointer;
  }

  ${media.tablet} {
    margin-left: 2rem;
  }
`;

export const CheckBox = styled.div<ISearchProps>`
  height: 2.4rem;
  max-width: 2.4rem;
  width: 100%;
  background-color: ${({ theme, isCheked }) =>
    isCheked ? 'var(--color-violet)' : theme.bodySecondary};
  opacity: ${({ isCheked }) => (isCheked ? '1' : '0.1')};
  background-image: ${({ isCheked }) =>
    isCheked ? 'url("/assets/desktop/icon-check.svg")' : ''};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.3rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-violet);
      opacity: 0.25;
    }
  }
`;
