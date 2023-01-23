import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'

const router = express.Router()

router.route("/register")
    .post(registerUser)

router.route("/sign-in")
    .post(loginUser)

    export default router