const express = require('express');
const app = express();
const todosRouter = require('./todosRouter'); // Adjust the path as necessary


app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
