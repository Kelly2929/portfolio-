import { TodoList } from './todo.mjs'; 

const myTodoList = new TodoList(); 


myTodoList.addTask('Learn JavaScript');
myTodoList.addTask('Read a book');


myTodoList.markComplete('Learn JavaScript');


myTodoList.listTasks();
