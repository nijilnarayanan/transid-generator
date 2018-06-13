const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const axios = require("axios");
const port = process.env.PORT || 9002;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser());

app.post("/login", (req, res) => {
  console.log(req.body);
  axios
    .post("http://localhost:8080/pwa/api/is/auth/login", req.body)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
