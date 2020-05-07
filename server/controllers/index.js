const express = require("express");
const router = express.Router();
const { getLinks } = require("./getLinks");
const { addLink } = require("./addLink");

router.get("/api/links", getLinks);
router.post("/api/addLink", addLink);

module.exports = router;
