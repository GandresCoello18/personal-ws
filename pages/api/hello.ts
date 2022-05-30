// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProyects } from '../../storage/proyecto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const data = await getProyects();
      res.status(200).json({ data })
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
