console.log("Welcome!");

const chalk = import("chalk");
const args = process.argv;

// used to log errors to the console in red color
function errorLog(error) {
  const Loge = console.log(chalk.red(error));
  console.log(Loge);
  //very much not refined
}

// usage represents the help guide
const usage = function () {
  const usageText = `
  Listbot is an automated tool to help post messages at certain times.

  commands:
    listbot <command>

    commands can be:

    setup:              reruns though the setup process.
    change_time:         used to change the time messages are sent.
    change_content:     used to change the content being served.
    help:               used to print the usage guide.
  `;

  console.log(usageText);
};

const commands = ["setup", "change_time", "change_content", "help"];

//check inputs
if (args.length > 3) {
  errorLog(`only one argument can be accepted`);
  usage();
}

if (commands.indexOf(args[2]) == -1) {
  errorLog("invalid command entered");
  console.log("run 'listbot help' for a list of commands");
  usage();
}

usage();
