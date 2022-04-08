import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const Jobs = styled.section`
  max-width: 1110rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 6.5rem;
  margin-top: 10.5rem;
  margin-bottom: 5.6rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }

  ${media.phone} {
    grid-template-columns: 1fr;
    row-gap: 5rem;
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
    margin-top: 5.7rem;
    margin-bottom: 3.2rem;
  }
`;
