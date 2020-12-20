const express = require('express');
const router = express.Router();

router.get("/", (req, res) => { //define route ("/") and its route handler (req, res)
    res.send("Hello World!");
});

module.exports = router;