const express=requiere('express');
const router=express.Routers();
const fs=requiere ('fs');
const path=requiere('path');

const taskFile=path.join(--__dirname,'..','tasks.json');
 
const getTasks=()=>{
    const data=fs.readFileSync(taskFile);
    return JSON.parse(data.toString());
};


const saveTasks = (tasks) => {
    const data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(tasksFile, data);
};

router.get('/tasks',(req,res)=>{
    const tasks=getTasks();
    res.json(tasks);

});

router.get('/:id',(req,res)=>{
    const tasks=getTasks();
    const task =tasks.find(t=>t.id===parseInt(req.params.id));
    if (!task){
        return res.status(404).send('Task not found');

    }
res.json(task);
});
router.post('/', (req, res) => {
    const tasks = getTasks();
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const newTask = {
        id: tasks.length + 1, 
        title,
        description
    };
    tasks.push(newTask);
    saveTasks(tasks);
    res.status(201).json(newTask);
});


router.put('/tasks/:id', (req, res) => {
    const tasks = getTasks();
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Task not found');
    }
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const updatedTask = { id: tasks[index].id, title, description };
    tasks[index] = updatedTask;
    saveTasks(tasks);
    res.json(updatedTask);
});


router.delete('/tasks/:id', (req, res) => {
    const tasks = getTasks();
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Task not found');
    }
    tasks.splice(index, 1);
    saveTasks(tasks);
    res.status(204).send();
});

module.exports = router;
