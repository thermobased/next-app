import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import * as fs from "fs";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const newLoginInfo = JSON.parse(req.body);
  /*process.stdout.write("hello: ");*/
  const newUser = await prisma.user.create({
    data: {
      login: newLoginInfo.login,
      password: newLoginInfo.password
    }
  })


/*
  const reqBody = JSON.parse(req.body);
  const filePath = "files-to-browse/" + reqBody.name;
  const userFiles = fs.readFileSync(filePath, 'utf-8');

  const data = JSON.parse(req.body);
  // const id = await createItem(data)*/

  res.json(newUser);
}
