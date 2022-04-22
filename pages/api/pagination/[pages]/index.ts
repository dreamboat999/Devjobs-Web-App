import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query.pages;

  try {
    const data = await prisma.jobs.findMany({
      skip: +query,
      take: 3,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Could not found data' });
  }
}
