const { exec } = require("child_process");

function runUserCommand(req, res) {
  const command = req.query.command;

  exec(command, (error, stdout) => {
    res.send(stdout);
  });
}

module.exports = { runUserCommand };
