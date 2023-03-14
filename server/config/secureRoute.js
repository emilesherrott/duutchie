import jwt from 'jsonwebtoken' 
import dotenv from 'dotenv'
dotenv.config()
import User from '../models/user.js'

export const secureRoute = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('Missing headers')
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, process.env.SECRET)
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User not found')
    req.currentUser = userToVerify
    next()
  } catch (err) {
    res.status(401).json({ "message": err })
  }
}