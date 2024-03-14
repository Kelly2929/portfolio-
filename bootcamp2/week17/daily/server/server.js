const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Utilisez CORS
app.use(express.json());


app.post('/api/world', (req, res) => {
    console.log('Received message from client:', req.body.message);
    res.send(`I received your POST request. This is what you sent me: ${req.body.message}`);
});


app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.message}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
