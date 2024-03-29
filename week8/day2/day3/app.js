const express = require('express');
const app = express();


const indexRouter = require('./routes/index');


app.use('/', indexRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
