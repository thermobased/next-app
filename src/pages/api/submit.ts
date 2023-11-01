import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import * as fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const reqBody = JSON.parse(req.body);

  const action = reqBody.action;
  const login =  reqBody.login;
  const password = reqBody.password;

  if (action == 'register'){
    res.status(200).json({'register': login})
  } else if (action == 'login') {
    res.status(200).json({'login': login})
  } else {
    res.status(500);
  }
}
