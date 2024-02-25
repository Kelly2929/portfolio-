class TodoList {
    constructor() {
        this.tasks = []; 
    }

    addTask(task) {
        this.tasks.push({ task, complete: false }); 
    }

    markComplete(taskName) {
        const task = this.tasks.find(task => task.task === taskName); 
        if (task) {
            task.complete = true; 
        }
    }

    listTasks() {
        console.log('Todo List:'); 
        this.tasks.forEach(task => {
            console.log(`${task.task}: ${task.complete ? 'Complete' : 'Incomplete'}`);
        });
    }
}

export { TodoList }; 
