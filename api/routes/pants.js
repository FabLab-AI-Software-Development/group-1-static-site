const express = require("express")
const router = express.Router()
const pantsController = require("../controllers/pants")


router.get("/",pantsController.getPants)


module.exports = router