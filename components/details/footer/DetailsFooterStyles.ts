import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

import { motion } from 'framer-motion';

export const FooterWrapper = styled(motion.section)`
  width: calc(100% + 7.8rem);
  margin-left: -3.9rem;
  background-color: ${({ theme }) => theme.bg};
  height: 9.6rem;
  display: flex;
  align-items: center;
  transition: background-color ease 0.3s;

  ${media.phone} {
    width: calc(100% + 4.8rem);
    margin-left: -2.4rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 73rem;
  width: 100%;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${media.tablet} {
    padding: 0 3.9rem;
  }

  ${media.phone} {
    padding: 0 2.4rem;
    a {
      min-width: 100%;
    }
  }
`;

export const FooterText = styled.div`
  h3 {
    font-size: var(--font-size-heading-m);
    color: ${({ theme }) => theme.bodySecondary};
    margin-bottom: 0.8rem;
  }

  p {
    color: ${({ theme }) => theme.bodyPrimary};
  }

  ${media.phone} {
    display: none;
  }
`;
