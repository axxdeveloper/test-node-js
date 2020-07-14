"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
console.log("test<<<<<<", inquirer);
var Commands;
(function (Commands) {
    Commands["List"] = "List";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands)
}).then(answers => {
    switch (answers["command"]) {
        case Commands.List:
            console.log("Select List");
            break;
        case Commands.Quit:
            console.log("Select Quit");
            break;
        default:
            console.log("Missing " + answers["command"]);
    }
});
//# sourceMappingURL=TestInquirer.js.map