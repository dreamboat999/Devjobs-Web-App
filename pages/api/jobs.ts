//  /api/jobs

import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';

import { IJob } from '../../@types/type';

const prisma = new PrismaClient();

// const insertJob = async (job: IJob) => {
//   await prisma.jobs.create({
//     data: {
//       company: job.company,
//       logo: job.logo,
//       logoBackground: job.logoBackground,
//       position: job.position,
//       postedAt: job.postedAt,
//       contract: job.contract,
//       location: job.location,
//       website: job.website,
//       apply: job.apply,
//       description: job.description,
//       requirement: {
//         create: {
//           content: job.requirement.content,
//           items: {
//             create: job.requirement.items.map((reqItem) => {
//               return { item: reqItem };
//             }),
//           },
//         },
//       },

//       role: {
//         create: {
//           content: job.role.content,
//           items: {
//             create: job.role.items.map((roleItem) => {
//               return { item: roleItem };
//             }),
//           },
//         },
//       },
//     },
//   });
// };

// const dataLoad = async () => {
//   try {
//     const res = await fetch('/api/jobs');
//     console.log('click');
//     if (!res.ok) {
//       throw new Error('oops');
//     }
//     const resData = await res.json();
//     return resData;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // for (let i = 0; i < Data.length; i++) {
  //   insertJob(Data[i]);
  // }
  // const deleteUsers = async () => await prisma.jobs.deleteMany({});
  // deleteUsers();
  res.json({ message: 'ok' });
}
