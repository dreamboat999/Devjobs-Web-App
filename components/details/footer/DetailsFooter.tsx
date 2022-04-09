import React from 'react';

import { FooterWrapper, Footer, FooterText } from './DetailsFooterStyles';

import { IJob } from '../../../@types/type';
import { Button } from '../../UI/button/ButtonStyles';

const DetailsFooter: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <FooterWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Footer>
        <FooterText>
          <h3>{job.position}</h3>
          <p>{job.company}</p>
        </FooterText>

        <Button as="a" href={job.apply} className="primary">
          Apply Now
        </Button>
      </Footer>
    </FooterWrapper>
  );
};

export default DetailsFooter;
