import React from 'react';

import Link from 'next/link';

import { JobCard, LogoWrapper, JobSummary } from './JobStyles';

export interface IJob {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Requirements;
}

export interface Requirements {
  content: string;
  items: string[];
}

const Job: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <JobCard>
      <LogoWrapper bg={job.logoBackground}>
        <img src={job.logo} alt={`${job.company} logo`} />
      </LogoWrapper>
      <JobSummary>
        <p>
          <span>{job.postedAt}</span>
          <span>&#x02022;</span>
          <span>{job.contract}</span>
        </p>
        <Link href={'#'} passHref>
          <h2>{job.position}</h2>
        </Link>
        <p>{job.company}</p>
      </JobSummary>
      <h3>{job.location}</h3>
    </JobCard>
  );
};

export default Job;
