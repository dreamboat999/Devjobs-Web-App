/* eslint-disable @next/next/no-img-element */

import React from 'react';

import {
  JobDetailHeader,
  JobLogoWrapper,
  CompanInfo,
} from './DetailsHeaderStyles';

import { IJob } from '../../../@types/type';

import { Button } from '../../UI/button/ButtonStyles';

const DetailsHeader: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <JobDetailHeader>
      <JobLogoWrapper bg={job.logoBackground}>
        <img src={job.logo} alt={`${job.company} logo`} />
      </JobLogoWrapper>
      <CompanInfo>
        <h2>{job.company}</h2>
        <p>{job.company.toLowerCase().replace(' ', '') + '.com'}</p>
      </CompanInfo>

      <Button className="secondary" as="a" href={job.website}>
        Company Site
      </Button>
    </JobDetailHeader>
  );
};

export default DetailsHeader;
