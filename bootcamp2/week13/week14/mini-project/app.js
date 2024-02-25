const express= require ('express')
const taskRoutes= require(('./routes/tasks'))

const app= express();
const port=3000;

app.listen(port,()=>{
    console.log('running on port ${port3000}')
});

app.use('/tasks',taskRouters);

