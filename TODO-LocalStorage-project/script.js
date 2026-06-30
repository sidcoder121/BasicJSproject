document.addEventListener('DOMContentLoaded',()=>{
    const todoInput = document.getElementById("todo-input")
   const addTaskBtn = document.getElementById("add-task-btn")
   const todolist = document.getElementById("todo-list")

//create Array
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

tasks.forEach((task) => RenderTask(task));

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
    RenderTask(newTask);
    todoInput.value = "";
    console.log(tasks)
})

//RenderTask
function RenderTask(task){
    const li = document.createElement('li')
    li.setAttribute('data-id',task.id)
    if(task.completed)  li.classList.add('completed');
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.addEventListener('click',(e) => {
        if(e.target.tagName === 'BUTTON') return;
        task.completed = !task.completed;
        li.classList.toggle('completed');
        savetasks();
    })

    li.querySelector('button').addEventListener('click',(e) => {
        e.stopPropagation() //Prevent toggle from firing
        tasks = tasks.filter(t => t.id === task.id);
        li.remove();
        savetasks()
    })
    todolist.appendChild(li);
}

//SaveTask
function savetasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
})