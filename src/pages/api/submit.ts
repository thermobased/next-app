import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import * as fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const reqBody = JSON.parse(req.body);

  const filePath = "files-to-browse/" + reqBody.name;

  const userFiles = fs.readFileSync(filePath, 'utf-8');

  const data = JSON.parse(req.body);
  // const id = await createItem(data)
  res.status(200).json({'req': userFiles})
}
