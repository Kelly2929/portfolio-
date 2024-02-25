const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(session({
  store: new SQLiteStore(),
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Database setup
const db = require('./db.js');

// Routes setup
const userRoutes = require('./user.Routes.js');
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

