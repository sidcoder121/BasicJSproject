const todoInput = document.getElementById("todo-input")
const addTaskBtn = document.getElementById("add-task-btn")
const todolist = document.getElementById("todo-list")

//create Array
let tasks = []

addTaskBtn.addEventListener("click",()=>{
    const TaskText = todoInput.value.trim()
    if(TaskText ==="") return;

    const newTask = {
        id:Date.now(),
        text:TaskText,
        completed:false,
    }

    tasks.push(newTask)
    todoInput.value = "";
    console.log(tasks)
})