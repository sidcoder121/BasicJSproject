document.addEventListener('DOMContentLoaded',()=>{
    const todoInput = document.getElementById("todo-input")
   const addTaskBtn = document.getElementById("add-task-btn")
   const todolist = document.getElementById("todo-list")

//create Array
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

tasks.forEach((tasks) => RenderTask(task));

addTaskBtn.addEventListener("click",()=>{
    const TaskText = todoInput.value.trim()
    if(TaskText ==="") return;

    const newTask = {
        id:Date.now(),
        text:TaskText,
        completed:false,
    }

    tasks.push(newTask);
    savetasks();
    todoInput.value = "";
    console.log(tasks)
})

//RenderTask
function RenderTask(task){
    console.log(tasks)
}

//SaveTask
function savetasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
})