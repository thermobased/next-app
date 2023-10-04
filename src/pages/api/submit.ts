import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  // const id = await createItem(data)
  res.status(200).json({ 'hello' : 'world', 'req': data})
}
