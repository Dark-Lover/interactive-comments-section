//TODO: Creating the server
const express = require("express");
const PORT = 8000;
const server = express();

server.listen(PORT, "127.0.0.1", () => {
  console.log("Listening to LocalHost on port: ", PORT);
});

server.get("/", (req, res) => {
  res.status(200).send("Hello we are Alive");
});
