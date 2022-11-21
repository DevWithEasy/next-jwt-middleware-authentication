// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from "../../utils/middleware/authenticated"

export default async function handler(req, res) {
  res.status(200).json(req.body)
}
