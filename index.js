require("dotenv").config();
const monstersRouter = require("./routes/monsters");
const bodyParser = require('body-parser')


const express = require("express");
const app = express();
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json


app.set("port", process.env.port || 3000);

app.get("/", (req, res, next) => {
  res.send("<h1>Hello world<h1>");
});
app.use("/monsters", monstersRouter);

app.listen(app.get("port"), (server) => {
  console.info(`Server listen on port ${app.get("port")}`);
});
