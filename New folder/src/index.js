const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

// console.log(__dirname);
// console.log();

const staticPath = path.join(__dirname,'../public');

// build in middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})