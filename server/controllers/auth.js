import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'
import user from '../models/user.js'
import User from '../models/user.js'

export const registerUser = async (req, res) => {
    try {
        const newRegistration = await User.create(req.body)
        return res.status(202).json({"message": `Welcome ${newRegistration.username}`})
    } catch (err) {
        console.log(err)
        return res.status(422).json({"message": "Unable to register"})
    }
}

export const loginUser = async (req, res) => {
    try {
        const userToLogin = await User.findOne({ username: req.body.username})
        if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
            throw new Error()
        }
        const token = jwt.sign({ sub: userToLogin._id}, secret, { expiresIn: '1 day'})
        return res.status(200).json({ "user": userToLogin["username"], token })
    } catch (err) {
        console.log(err)
        return res.status(422).json({ "message": "Unauthorised"})
    }
}

