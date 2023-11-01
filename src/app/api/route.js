import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export async function GET(req, res) {
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./collection.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve all items from the "items" table
  const items = await db.all("SELECT * FROM items");

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}





/*
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
  /!*process.stdout.write("hello: ");*!/
  const newUser = prisma.user.create({
    data: {
      login: newLoginInfo.login,
      password: newLoginInfo.password
    }
  })


/!*
  const reqBody = JSON.parse(req.body);
  const filePath = "files-to-browse/" + reqBody.name;
  const userFiles = fs.readFileSync(filePath, 'utf-8');

  const data = JSON.parse(req.body);
  // const id = await createItem(data)*!/

  res.json(newUser);
}
*/
