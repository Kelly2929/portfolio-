// todo.js

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, complete: false });
    }

    markComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.complete = true;
        }
    }

    listTasks() {
        console.log("Todo List:");
        this.tasks.forEach(t => {
            console.log(`- ${t.task} [${t.complete ? 'Complete' : 'Incomplete'}]`);
        });
    }
}
