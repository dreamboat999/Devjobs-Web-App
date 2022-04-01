import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16.2rem;
  background-color: #5964e0;
  background-image: url('/images/desktop/bg-pattern-header.svg');
  border-bottom-left-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContentWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3.9rem;
`;
