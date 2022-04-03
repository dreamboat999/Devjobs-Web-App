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
