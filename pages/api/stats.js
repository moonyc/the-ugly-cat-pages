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
        const {videoId, faves = 0, watched = true} = req.body
        
        if (videoId) {
          const decoded = jwt.verify(token, process.env.JWT_SECRET)
          const userId = decoded.issuer
          const doesStatsExist = await findVideoByUserId(
            token,
            userId,
            videoId
          )
          if(doesStatsExist) {
            // update
            const response = await updateStats(
              token, {
                watched,
                userId,
                videoId,
                faves
              }
            )
            res.send({msg: 'it works', response})
          } else {
            // create 
            const response = await insertStats(
              token, {
                watched,
                userId,
                videoId,
                faves
              }
            )
            res.send({ msg: 'it works', response})
          }
        } else {
          res.send({msg: "missing videoId"})
        }
      }
    } catch (error) {
      console.error('Error occurred /stats', error)
      res.status(500).send({ done: false, error: error?.message})
    }
  }
}
