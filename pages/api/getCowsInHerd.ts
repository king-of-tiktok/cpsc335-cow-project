import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "../../components/createClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const client = createClient();
    client.connect();
    try {
      let query = await client.query(
        "select id, date_acquired, date_removed, source, location from cows where herd_id = $1 order by id ;",
        [req.body["herd_id"]]
      );
      res.status(200).json([query.fields, query.rows]);
    } catch (error) {
      console.log(error.detail);
    } finally {
      client.end();
    }
  } else {
    res.status(400).end();
  }
};
