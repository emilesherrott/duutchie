// const express = require("express")
import express from 'express'
import cors from 'cors'

import router from './config/router.js'
import logger from './logger.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)


app.use('/', router)

// module.exports = app
export default app