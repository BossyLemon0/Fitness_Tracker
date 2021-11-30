const express = require("express");
const mongoose = require("mongoose");
const routes = require('./controllers');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Port open on ${PORT}`);
});