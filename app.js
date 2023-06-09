/* eslint-disable import/no-import-module-exports */
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users.js");
const registerRouter = require("./routes/register.js");
const loginRouter = require("./routes/login.js");

const app = express();

corsOptions = {
  origin: "asaltech.com",
  optionsSuccessStatus: 200,
};

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
// app.set('port', port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.options("*", cors(corsOptions));

app.use("/users", usersRouter);
app.use("/register", registerRouter);
app.use("/", indexRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
