import React from 'react';
import { IJob } from '../../../@types/type';

import {
  JobInfoWrapper,
  JobMeta,
  JobMetaText,
  JobDescription,
} from './JobInfoStyles';

import { Button } from '../../UI/button/ButtonStyles';

const JobInfo: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <JobInfoWrapper>
      <JobMeta>
        <JobMetaText>
          <p>
            <span>{job.postedAt}</span>
            <span>&#x02022;</span>
            <span>{job.contract}</span>
          </p>
          <h1>{job.position}</h1>
          <h3>{job.location}</h3>
        </JobMetaText>

        <Button as="a" href={job.apply} className="primary">
          Apply Now
        </Button>
      </JobMeta>
      <JobDescription>
        <p>{job.description}</p>
        <h3>Requirements</h3>
        <p>{job.requirements.content}</p>
        <ul>
          {job.requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>What You Will Do</h3>
        <p>{job.role.content}</p>
        <ol>
          {job.role.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </JobDescription>
    </JobInfoWrapper>
  );
};

export default JobInfo;
