const express = require("express");
const router = require("./router/router");
const {
  nextRequest,
  passwordValidation,
} = require("./middlewares/intermediary");

const app = express();
app.use(express.json());
app.use(nextRequest);
app.use(passwordValidation);
app.use(router);

app.listen(8000);
