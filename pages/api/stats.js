// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken'
import { findVideoByUserId, insertStats, updateStats } from '@/lib/db/hasura'

export default async function stats(req, res) {
  if(req.method === 'POST') {
    try {
      const token = req.cookies.token
      if(!token) {
        res.status(403).send({})
      } else {
        const videoId = req.query.videoId
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.issuer

       const doesStatsExist = await findVideoByUserId(token, userId, videoId)
          if(doesStatsExist){
            const response = await updateStats(
              token,
              {
                videoId: "y8kTYCex8RU",
                userId,
                watched: true,
                faves: 0
              }
            )
            res.send( {msg: 'it works'}, response)
          } else {
            res.send({msg: 'it works'}, token, doesStatsExist)
          }
         
      }
    } catch (error) {
      console.error('Error occurred /stats', error)
      res.status(500).send({ done: false, error: error?.message})
    }
  }
}
