const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', function(req, res) {
  res.send('Hello World!');
});

module.exports = router;
