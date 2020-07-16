import * as inquirer from "inquirer"

// Object.values(Commands) will become [List, Quit, 1, 2] without specifying string value
enum Commands {
    AddTodo = "AddTodo",
    Quit = "Quit"
}

promptList()

var todo: Array<string> = []

function listTodo() {
    console.log(todo)
}

function promptAdd() {
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Input TODO:",
    }).then(answers => {
        if (answers['add'] != "") {
            todo.push(answers['add'])
        }
        promptList();
    })
}

function promptList() {
    console.clear();
    listTodo();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.AddTodo:
                promptAdd();
                break;
            case Commands.Quit:
                console.log("Select Quit")
                break;
            default:
                console.log("Missing " + answers["command"])
        }
    })
}
