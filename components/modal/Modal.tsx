import React, { Fragment } from 'react';

import { useDispatch } from 'react-redux';
import { jobActions } from '../../store';

import ClientOnlyPortal from './ClientOnlyPortal';

import {
  BackDropWrapper,
  ModalOverlayWrapper,
  ContentWrapper,
} from './ModalStyles';

const ModalOverlay: React.FC<{}> = ({ children }) => {
  const modalVariants = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <ModalOverlayWrapper
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ContentWrapper>{children}</ContentWrapper>
    </ModalOverlayWrapper>
  );
};

const Modal: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <ClientOnlyPortal selector="#overlays">
        <BackDropWrapper
          onClick={() => {
            dispatch(jobActions.toggleModal());
          }}
        />
      </ClientOnlyPortal>
      <ClientOnlyPortal selector="#overlays">
        <ModalOverlay>{children}</ModalOverlay>
      </ClientOnlyPortal>
    </Fragment>
  );
};

export default Modal;
