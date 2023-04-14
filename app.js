const express = require('express');

const app = express();

const FOLDER = `${process.cwd()}/public`;
app.use(express.static(FOLDER));

const port = 3000;
const hostname = 'localhost';
app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});