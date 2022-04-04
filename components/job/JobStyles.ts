import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

interface IJobProps {
  bg: string;
}

export const JobCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 0.6rem;
  padding: 3.2rem;

  h3 {
    color: var(--color-violet);
    font-size: var(--font-size-heading-s);
    margin-top: 4.6rem;
  }
`;

export const LogoWrapper = styled.div<IJobProps>`
  width: 5rem;
  height: 5rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  margin-top: -5.7rem;
`;

export const JobSummary = styled.div`
  margin-top: 2.2rem;
  p {
    color: ${({ theme }) => theme.bodySummary};
  }

  h2 {
    color: ${({ theme }) => theme.bodySecondary};
    font-size: var(--font-size-heading-m);
    margin-bottom: 1.2rem;
  }

  p:nth-of-type(1) {
    margin-bottom: 1.8rem;
  }
`;
