const express = require("express");
const { data } = require("./controller/dataController");
const { userAuth } = require("./controller/loginController");

const router = express.Router();

//login api
router.post("/login", userAuth);

//data api
router.get("/analytics", data);


module.exports = router;