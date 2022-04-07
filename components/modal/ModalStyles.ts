import styled from 'styled-components';

import { motion } from 'framer-motion';

export const BackDropWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalOverlayWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 30;
`;

export const ContentWrapper = styled(motion.div)`
  max-width: 65rem;
  width: calc(100% - 4.8rem);
  border-radius: 0.6rem;
  z-index: 30;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background-color: ${({ theme }) => theme.bg};

  span {
    height: 1px;
    width: calc(100% + 4.8rem);
    background-color: rgba(110, 128, 152, 0.2);
    margin-left: -2.4rem;
  }

  button {
    max-width: 100%;
  }
`;
