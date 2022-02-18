const express			= require("express")
const router			= express.Router()
const Newsletter          = require('./../models/Newsletter')
const newsletterController = require("./../controllers/newsletterController")

router.post("/", newsletterController.receive)

module.exports = router
