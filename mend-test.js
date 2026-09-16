const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/run", (req, res) => {
  exec(req.query.command, (error, stdout) => {
    res.send(stdout);
  });
});

app.listen(3000);
