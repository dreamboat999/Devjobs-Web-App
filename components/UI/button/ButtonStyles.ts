import styled from 'styled-components';

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
`;
