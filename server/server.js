const express = require("express");
require("dotenv").config();
const mongoose = require("./src/config/db");

const app = express();

app.get("/", (req, res) => {
  res.send("Vintage Tech MarketPlace (Server)");
});

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`Server Running On Port ${Port}..!`);
});
