import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //...
  if (req.method === "POST") {
    fs.writeFileSync("./example.json", JSON.stringify(req.body));
    return res.status(200).json({ message: "success" });
  }
  //...
}
