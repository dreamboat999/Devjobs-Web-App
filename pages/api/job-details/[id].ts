//  /api/job-details

import Data from '../../../data.json';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const job = Data.find((job) => job.id.toString() === req.query.id);
  res.status(200).json({ job });
}
