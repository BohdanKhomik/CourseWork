const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
  );
  
app.get('/images', db.getUsers);
app.get('/images/:id', db.getUserById);
app.use(express.static("CourseWork"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});