var dbConnector = require("./db/dbConnector");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var getRouter = require("./routes/get");
var deleteRouter = require("./routes/delete");
const indexRouter = require("./routes/index");
const postRouter = require("./routes/post");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

var mongoDB = `mongodb://${dbConnector.dbUser}:${
  dbConnector.dbPass
}@ds237700.mlab.com:37700/mytodolist`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/get", getRouter);
app.use("/delete", deleteRouter);
app.use("/post", postRouter);
app.use("/", indexRouter);
module.exports = app;
