
const express = require('express');
const router = express.Router();

router.get('/public', (req, res) => {
  res.send('Public Content');
});

router.get('/user-profile', (req, res) => {
  res.send('User Profile Page');
});

router.get('/admin-panel', (req, res) => {
  res.send('Admin Panel');
});

module.exports = router;
