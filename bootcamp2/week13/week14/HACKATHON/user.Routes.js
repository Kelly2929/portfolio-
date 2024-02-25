const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const router = express.Router();

// User registration
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

  db.run(query, [username, hashedPassword], function(err) {
    if (err) {
      res.status(500).send("There was a problem registering the user.");
      return;
    }
    res.status(201).send({ message: "User registered successfully!" });
  });
});

// User login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
    if (err) {
      res.status(500).send("Error on the server.");
      return;
    }
    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(404).send("User not found or password is incorrect.");
      return;
    }
    // If user is found and password is valid, create a session
    req.session.userId = user.id;
    res.send({ message: "Login successful!" });
  });
});

module.exports = router;
