import type { NextPage } from 'next';
import Head from 'next/head';

import { GetStaticProps, GetStaticPaths } from 'next';
import { IJob } from '../../../@types/type';

import DetailsHeader from '../../../components/details/header/DetailsHeader';
import JobInfo from '../../../components/details/job-info/JobInfo';
import DetailsFooter from '../../../components/details/footer/DetailsFooter';

import { AnimatePresence } from 'framer-motion';

const CompanyDetail: NextPage<{ job: IJob }> = ({ job }) => {
  return (
    <>
      <Head>
        <title>Devjobs web app</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>

      <AnimatePresence>
        <DetailsHeader job={job} />
        <JobInfo job={job} />
        <DetailsFooter job={job} />
      </AnimatePresence>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`/api/jobs`);

  if (!res.ok) {
    throw new Error('Can not get job details');
  }
  const resData: IJob[] = await res.json();
  const paths = resData.map((job) => ({
    params: {
      id: job.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await fetch(`/api/job-details/${context.params!.id}`);

    if (!res.ok) {
      throw new Error('Can not get job details');
    }
    const { job } = await res.json();

    return {
      props: {
        job,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default CompanyDetail;
