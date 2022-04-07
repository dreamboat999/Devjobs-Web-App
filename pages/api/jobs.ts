//  /api/jobs

import Data from '../../data.json';

import type { NextApiRequest, NextApiResponse } from 'next';

import { IJob } from '../../@types/type';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IJob[]>
) {
  res.status(200).json(Data);
}
