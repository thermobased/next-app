import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import * as fs from "fs";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const reqBody = JSON.parse(req.body);
  const action = reqBody.action;
  const login =  reqBody.login;
  const password = reqBody.password;

  if (!db) {
    db = await open({
      filename: "collection.db",
      driver: sqlite3.Database,
    });
  }

  if (action == 'register'){

    const insertSql = `INSERT INTO items(login, password) VALUES(?, ?)`;
    db.run(insertSql, [login, password], function (err) {
      if (err) {
        return console.error(err.message);
      }
    });
    res.status(200).json({'register': login})



  } else if (action == 'login') {

    const item = await db.get("SELECT * FROM items WHERE login = ? AND password = ?", login, password);
    const temp = item.login;
    res.status(200).json({'login' : temp})






  } else {
    res.status(500);
  }
}
