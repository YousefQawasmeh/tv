const express = require("express");
const router = express.Router();
const { getLinks } = require("./getLinks");
const { addLink } = require("./addLink");

router.get("/api/links", getLinks);
router.post("/api/add-link", addLink);
router.use((req, res) => res.send("SERVER ERRORE"));
module.exports = router;
