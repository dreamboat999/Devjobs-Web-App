import type { NextPage } from 'next';
import Head from 'next/head';

import { GetStaticProps, GetStaticPaths } from 'next';
import { IJob } from '../../../@types/type';

const CompanyDetail: NextPage<{ job: IJob }> = ({ job }) => {
  console.log(job);
  return (
    <>
      <Head>
        <title>Devjobs web app</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/jobs`);

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
    const res = await fetch(
      `http://localhost:3000/api/job-details/${context.params!.id}`
    );

    if (!res.ok) {
      throw new Error('Can not get job details');
    }
    const resData = await res.json();

    return {
      props: {
        job: resData,
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
