import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'
import { getUserProfile, changePassword } from '../controllers/users.js'
import { secureRoute } from '../config/secureRoute.js'

const router = express.Router()

router.route("/register")
    .post(registerUser)

router.route("/sign-in")
    .post(loginUser)

router.route("/profile")
    .get(secureRoute, getUserProfile)
    .put(secureRoute, changePassword)

export default router