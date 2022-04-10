import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { GetStaticProps } from 'next';

import { ContentWrapper } from '../components/content-wrapper/ContentWrapperStyles';
import Search from '../components/index/search/Search';
import { Jobs } from '../components/index/jobs/JobsStyles';
import Job from '../components/index/job/Job';
import { IJob } from '../@types/type';
import { Button } from '../components/UI/button/ButtonStyles';

import { AnimatePresence } from 'framer-motion';

import Data from '../data.json';

const Home: NextPage<{ data: IJob[] }> = ({ data }) => {
  const [limit, setLimit] = useState<number>(9);
  const { filters } = useSelector((state: RootState) => state.jobs);
  const { search, location, isFullTiem } = filters;

  const loadMoreHandler = () => {
    setLimit((prevState) => prevState + 3);
  };

  const filterJobs = () => {
    let dataToFilter = data;

    if (search !== '') {
      dataToFilter = dataToFilter.filter(
        (job) =>
          job.company.toLowerCase().includes(search) ||
          job.position.toLowerCase().includes(search)
      );
    }

    if (location !== '') {
      dataToFilter = dataToFilter.filter((job) =>
        job.location.toLowerCase().includes(location)
      );
    }

    if (isFullTiem) {
      dataToFilter = dataToFilter.filter((job) => job.contract === 'Full Time');
    }

    return dataToFilter;
  };

  data = filterJobs();

  const isDisabled = limit === data.length || limit > data.length;

  return (
    <>
      <Head>
        <title>Devjobs web app</title>
        <meta
          name="description"
          content="Devjobs web app with NextJS and TypeScript"
        />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>

      <ContentWrapper>
        <Search />

        <Jobs layout>
          <AnimatePresence>
            {data.slice(0, limit).map((job) => (
              <Job job={job} key={job.id} />
            ))}
          </AnimatePresence>
        </Jobs>

        <Button
          className="primary load"
          onClick={loadMoreHandler}
          disabled={isDisabled}
        >
          Load More
        </Button>
      </ContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = Data;

  return {
    props: {
      data,
    },
  };
};
export default Home;
