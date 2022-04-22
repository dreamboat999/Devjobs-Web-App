import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query: string[] = req.query.search_query;
  const [search, location, isFulltime]: string[] = [...query];
  console.log(search, location, isFulltime);

  try {
    const data = await prisma.jobs.findMany({
      where: {
        OR: [
          {
            company: { contains: search },
          },
          {
            position: { contains: search },
          },
          {
            location: { contains: location },
          },
        ],
      },
    });
    console.log(data.length);

    res.status(200).json({ mess: 'ok' });
  } catch (error) {
    res.status(500).json({ message: 'Could not found data' });
  }
}
