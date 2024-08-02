const express = require("express")
const router = express.Router()
const hatController = require("../controllers/hat")


router.get("/",hatController.getHat)


module.exports = router