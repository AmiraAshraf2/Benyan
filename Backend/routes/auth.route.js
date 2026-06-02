// require express
const express = require("express");
// Router
const router = express.Router()
// require Controller
const loginController = require("../controllers/authAdmin.controller");
// Init method Request
router.post("/login", loginController)

//Export
module.exports = router;