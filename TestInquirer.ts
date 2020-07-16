import * as inquirer from "inquirer"

// Object.values(Commands) will become [List, Quit, 1, 2] without specifying string value
enum Commands {
    Add = "Add",
    Done = "Done",
    Quit = "Quit"
}

let todo: Array<Task> = []

promptList()

class Task {
    done: boolean = false;
    constructor(public name:string) {
    }
    markDone() {
        this.done = true
    }
    toString = ():string => {
        return this.name + "=>" + (this.done ? "done" : "not done")
    }
}


function listTodo() {
    todo.forEach(item => {
        console.log(`${item}`)
    })
}

function promptDone() {
    inquirer.prompt({
        type: "checkbox",
        name: "check",
        message: "Mark done:",
        choices: todo.map(item => ({
            name: item.name,
            value: item.name,
            checked: item.done
        }))
    }).then(answers => {
        console.log(answers)
        let checkedItems = answers['check'] as string[]
        if (answers['check'] != "") {
            todo.forEach(item => item.done = false)
            todo.forEach(item => {
                checkedItems.forEach(checkedItem => {
                    if (item.name == checkedItem) {
                        item.done = true
                    }
                })
            })
        }
        promptList();
    })
}


function promptAdd() {
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Input TODO:",
    }).then(answers => {
        if (answers['add'] != "") {
            todo.push(new Task(answers['add']))
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
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Done:
                promptDone();
                break;
            case Commands.Quit:
                console.log("Select Quit")
                break;
            default:
                console.log("Missing " + answers["command"])
        }
    })
}
