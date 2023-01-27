import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { secret } from '../config/environment.js'
import User from '../models/user.js'

// ! Whilst on front end, only place username parameter through the token
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.currentUser.username })
    if (!user) throw new Error("User not found")
    return res.status(200).json(user)
  } catch (err) {
    return res.status(404).json({ message: "Not found" })
  }
}


export const changePassword = async (req, res) => {
  try {
    const userId = req.currentUser._id
    // const salt = await bcrypt.genSaltSync()
    const password = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync())
    const userPassword = await User.findByIdAndUpdate({ _id: userId }, { password: password }, { new: true })
    return res.status(200).json({ message: "Password updated"})
  } catch (err) {
    return res.status(404).json({ message: "Unable to update password" })
  }

}