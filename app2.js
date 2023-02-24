const http = require("http");
const fs = require("fs");

const shopRoutes = require("./routes/shop");
const adminRoustes = require("./routes/admin");
const path = require("./util/path");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoustes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views2", "404.html"));
});

const server = http.createServer(app);
server.listen(4000);
