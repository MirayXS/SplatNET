(async () => {

    console.log("–– Package installation ...");

    require("child_process").execSync("npm install", {
        stdio: [0, 1, 2]
    });

    console.clear();

    // Beautiful color gradients in terminal output
    const { green } = require('chalk')
    const gradient = require("gradient-string"),
    // Terminal string styling done right
          chalk    = require("chalk"),
    // Lightweight, beautiful and user-friendly prompts
          prompts  = require("prompts"),
    // File System
          fs       = require("fs"),
    // Imports information from the .json package
          pjson    = require("./package.json");

    var settings;

    if (fs.existsSync("./config/config.json")) {
        fs.readFile("./config/config.json", "utf-8", function read(err, data) {
            if (err) { throw err; }
            settings = JSON.parse(data);
        });
    } else {
        fs.writeFile("./config/config.json", "{}", { flag: "wx" }, function (err) {
            if (err) { throw err; }
        });
    }

    var ASCIIHeader = [
        "   _____       _       _   _   _ ______ _______ ",
        "  / ____|     | |     | | | \\ | |  ____|__   __|",
        " | (___  _ __ | | __ _| |_|  \\| | |__     | |   ",
        "  \\___ \\| '_ \\| |/ _` | __| . ` |  __|    | |   ",
        "  ____) | |_) | | (_| | |_| |\\  | |____   | |   ",
        " |_____/| .__/|_|\\__,_|\\__|_| \\_|______|  |_|   ",
        "        | |                                     ",
        "        |_|                                     "

    ].join("\n");

    console.log([
        // Print the header
        chalk.bold(gradient("#8EA6DB", "#6A54C9")(ASCIIHeader)),
        chalk.hex("#6A54C9").bold.italic("An open source Splatoon Discord.js Bot\n\n"),
        `– ${chalk.hex("#6A54C9").bold(Object.keys(pjson.dependencies).length)} packages have been installed\n`
    ].join("\n"));

    // Collecting information with prompt package
    const questions = [
{
        type: "text",
        name: "token",
        message: "Please enter the bot token from the application page\n",
        initial: settings ? settings.Token : null,
        validate: (value) => (value.length <= 58 ? "The bot token is needed" : true)
    }, {
        type: "text",
        name: "prefix",
        message: "Prefix",
        initial: settings ? settings.Prefix : "splat!",
        validate: (value) => (((/\s/).test(value)) ? "The prefix can't contain space" : true)
    } 
    /*, {
        type: "text",
        name: "richpresence",
        message: "And what I'm doing ? (RichPresence)",
        initial: settings ? settings.RPres : "${prefix}help || GC: ${client.guilds.size} || UC: ${client.users.size}",
    },
    {
        type: "text",
        name: "richurl",
        message: "Streaming URL",
        initial: settings ? settings.RUrl : "https://twitch.tv/.",
    }*/
];

    const onCancel = () => {
        console.log("\n Oh, no, you changed your mind... I'll see you soon?!  ");
        process.exit;
    };

    const response = await prompts(questions, {
        onCancel
    });

    const set = {
        prefix: response.prefix,
        token: response.token
    };

    // If it doesn't exist, create an '.env' file, and include collected information.
    fs.writeFile("./config/config.json", JSON.stringify(set, null, "\t"), (err) => {

        if (err) { throw err; }

        console.log([
            `\n\n   ${chalk(green('[SUCCESS]'))} ALL IS DONE ^^ !\n`,
            `       ${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))} The setup is complete, you can now, if not already done,`,
            `       ${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))} invite the bot on your server. Commands are already present!`,
            chalk`       ${chalk.bold(gradient("#8EA6DB", "#6A54C9")(`[INFO]`))} Type {italic.grey node index.js} to start the bot`
        ].join("\n"));
});

})();