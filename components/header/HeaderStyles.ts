import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

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

  ${media.tablet} {
    background-image: url('/images/tablet/bg-pattern-header.svg');
  }

  ${media.phone} {
    background-image: url('./images/mobile/bg-pattern-header.svg');
    border-bottom-left-radius: 0;
    height: 13.6rem;
  }
`;

export const HeaderContentWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3.9rem;

  ${media.phone} {
    padding: 0 2.4rem;
  }
`;
