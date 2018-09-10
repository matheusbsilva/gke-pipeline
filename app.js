const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({"message": "hello world"});
});

if(!module.parent){
  app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
  });
}

module.exports = app;
