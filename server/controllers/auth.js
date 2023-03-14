import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import User from '../models/user.js'

export const registerUser = async (req, res) => {
    try {
        const usernameExists = await User.findOne({ username: req.body.username })
        const emailExists = await User.findOne({ email: req.body.email})
        if(usernameExists || emailExists){
            throw new Error("Account with username or email already exists")
        }
        const newRegistration = await User.create(req.body)
        const token = jwt.sign({ sub: newRegistration._id}, process.env.SECRET, { expiresIn: '1 day' })
        return res.status(202).json({"user": newRegistration["username"], token})
    } catch (err) {
        return res.status(422).json({ "message": err["message"] })
    }
}

export const loginUser = async (req, res) => {
    console.log('req', req.body)
    try {
        const userToLogin = await User.findOne({ username: req.body.username})
        console.log('user', userToLogin)
        if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
            throw new Error()
        }
        const token = jwt.sign({ sub: userToLogin._id}, process.env.SECRET, { expiresIn: '1 day'})
        return res.status(200).json({ "user": userToLogin["username"], token })
    } catch (err) {
        return res.status(422).json({ "message": "Unrecognised username or password"})
    }
}

