const express = require("express")
const router = express.Router()
const topsController = require("../controllers/tops")


router.get("/",topsController.getTops)


module.exports = router