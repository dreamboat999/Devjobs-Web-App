import type { NextPage } from 'next';
import Head from 'next/head';

import { ContentWrapper } from '../components/content-wrapper/ContentWrapperStyles';

import Search from '../components/index/search/Search';
import { Jobs } from '../components/jobs/JobsStyles';
import Job from '../components/job/Job';

import { GetStaticProps } from 'next';

import { IJob } from '../@types/type';

const Home: NextPage<{ data: IJob[] }> = ({ data }) => {
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
        <Jobs>
          {data.map((job) => (
            <Job job={job} key={job.id} />
          ))}
        </Jobs>
      </ContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/jobs');

    if (!res.ok) {
      throw new Error('Can not get job details');
    }
    const resData = await res.json();

    return {
      props: {
        data: resData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default Home;
