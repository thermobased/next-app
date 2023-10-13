import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import * as fs from "fs";



 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const userFiles = fs.readFileSync('./src/pages/page1.txt', 'utf-8');

  const data = JSON.parse(req.body);
  // const id = await createItem(data)
  res.status(200).json({ 'hello' : 'world', 'req': data})
}
