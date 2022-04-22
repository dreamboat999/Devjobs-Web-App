import type { NextPage } from 'next';
import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

import { GetServerSideProps, GetStaticPaths } from 'next';
import { IJob } from '../../../@types/type';

import DetailsHeader from '../../../components/details/header/DetailsHeader';
import JobInfo from '../../../components/details/job-info/JobInfo';
import DetailsFooter from '../../../components/details/footer/DetailsFooter';

import { AnimatePresence } from 'framer-motion';

import Data from '../../../data.json';

const CompanyDetail: NextPage<{ job: IJob }> = ({ job }) => {
  return (
    <>
      <Head>
        <title>Devjobs web app</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>

      <AnimatePresence>
        <DetailsHeader job={job} key={'header'} />
        <JobInfo job={job} key={'info'} />
        <DetailsFooter job={job} key={'footer'} />
      </AnimatePresence>
    </>
  );
};

const prisma = new PrismaClient();

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await prisma.jobs.findMany();

//   const paths = data.map((job) => ({
//     params: {
//       id: job.id.toString(),
//     },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const job = await prisma.jobs.findUnique({
    where: {
      id: context.params!.id?.toString(),
    },
    include: {
      requirement: {
        select: {
          content: true,
          items: {
            select: {
              item: true,
            },
          },
        },
      },
      role: {
        select: {
          content: true,
          items: {
            select: {
              item: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      job,
    },
  };
};

export default CompanyDetail;
