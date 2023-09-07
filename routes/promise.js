const express = require("express")
const request = require("request")
const router = express.Router()

const {getPromise} = require("../controllers/promise")


router.get("/",getPromise)

module.exports = router