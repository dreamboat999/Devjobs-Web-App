import styled from 'styled-components';

import { IJobProps } from '../../../@types/type';

import { media } from '../../../styles/GlobalStyles';

export const JobDetailHeader = styled.section`
  position: relative;
  max-width: 73rem;
  width: 100%;
  margin: 0 auto;
  padding-right: 4.3rem;
  display: flex;
  align-items: center;
  margin-top: 12rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.bg};
  transform: background-color easy 0.3s;
  border-radius: 0.6rem;

  a {
    margin-left: auto;
  }

  ${media.phone} {
    flex-direction: column;
    padding-right: 0;
    gap: 2.4rem;
    padding-bottom: 3.2rem;

    a {
      margin-left: 0;
    }
  }
`;

export const JobLogoWrapper = styled.div<IJobProps>`
  height: 14rem;
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  border-bottom-left-radius: 0.6rem;
  border-top-left-radius: 0.6rem;

  img {
    width: 58%;
  }

  ${media.phone} {
    height: 5rem;
    width: 5rem;
    border-radius: 1.5rem;
    margin-top: -2.5rem;

    img {
      width: initial;
    }
  }
`;

export const CompanInfo = styled.div`
  margin-left: 4rem;

  h2 {
    color: ${({ theme }) => theme.bodySecondary};
    font-size: var(--font-size-heading-l);
    margin-bottom: 1rem;
  }

  p {
    color: #6e8098;
  }

  ${media.phone} {
    margin-left: 0;
    text-align: center;
    h2 {
      font-size: var(--font-size-heading-m);
    }
  }
`;
