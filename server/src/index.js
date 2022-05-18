const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

const route = require("./routes");
const connectDatabase = require("./config/db");
const router = require("./routes/index");

//method override
app.use(express.json());
//connect to DB
connectDatabase();

// HTTP loger
app.use(morgan("combined"));

app.use("/",router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
