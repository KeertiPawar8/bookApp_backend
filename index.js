const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { connection } = require("./db");

const {bookRouter} = require("./bookRoute")

app.use("/",bookRouter)
app.listen(process.env.port, async () => {
  await connection;
  console.log(`server is running at port 8080`);
});
