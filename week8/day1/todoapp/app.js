
import { TodoList } from './todo.js';

const myTodoList = new TodoList();


myTodoList.addTask('Learn JavaScript');
myTodoList.addTask('Read a book');

myTodoList.markComplete('Learn JavaScript');


myTodoList.listTasks();
