const express = require("express");
const router = require("./router/router");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  console.log("The body mensage", req.body);
  next();
});
app.use(router);

app.listen(8000);
