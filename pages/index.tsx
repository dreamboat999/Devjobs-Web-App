import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { GetServerSideProps } from 'next';
import { PrismaClient } from '@prisma/client';

import { ContentWrapper } from '../components/content-wrapper/ContentWrapperStyles';
import Search from '../components/index/search/Search';
import { Jobs } from '../components/index/jobs/JobsStyles';
import Job from '../components/index/job/Job';
import { IJob } from '../@types/type';
import { Button } from '../components/UI/button/ButtonStyles';

import { AnimatePresence } from 'framer-motion';

const prisma = new PrismaClient();

const Home: NextPage<{ initialData: IJob[]; maxNum: number }> = ({
  initialData,
  maxNum,
}) => {
  const [limit, setLimit] = useState<number>(9);
  const { filters } = useSelector((state: RootState) => state.jobs);
  const { search, location, isFullTiem } = filters;
  const [data, setData] = useState<IJob[]>(initialData);

  const loadMoreHandler = async () => {
    const res = await fetch(`/api/pagination/${limit}`);
    const resData = await res.json();

    setData((prevState) => prevState.concat(resData));
    setLimit((prevState) => prevState + 3);
  };

  const filterJobs = () => {
    let dataToFilter = initialData;

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

    setData(dataToFilter);
  };

  useEffect(() => {
    filterJobs();

    const searchDB = async () => {
      try {
        const res = await fetch(
          `/api/search/${search ? search : 'none'}/${
            location ? location : 'none'
          }/${isFullTiem && isFullTiem}`
        );
        const resData = await res.json();
        if (!res.ok) {
          throw new Error('Could not find data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    searchDB();
  }, [search, location, isFullTiem]);

  const isDisabled = limit === maxNum || limit > maxNum;

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
            {data.map((job) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.jobs.findMany({
    skip: 0,
    take: 9,
  });

  const dataLength = await (await prisma.jobs.findMany({})).length;

  return {
    props: {
      initialData: data,
      maxNum: dataLength,
    },
  };
};
export default Home;
