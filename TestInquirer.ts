import * as inquirer from "inquirer"

// Object.values(Commands) will become [List, Quit, 1, 2] without specifying string value
enum Commands {
    List = "List",
    Quit = "Quit"
}

inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands)
}).then(answers => {
    switch (answers["command"]) {
        case Commands.List:
            console.log("Select List")
            break;
        case Commands.Quit:
            console.log("Select Quit")
            break;
        default:
            console.log("Missing " + answers["command"])
    }
})