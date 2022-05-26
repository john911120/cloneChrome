const todoForm = document.getElementById("todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")
const TODOES_KEY = "todoeS"
let todoeS = []


function saveTodos(){
    localStorage.setItem(TODOES_KEY, JSON.stringify(todoeS))
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

function handleTodoSubmit(event){
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    todoeS.push(newTodo)
    paintTodo(newTodo)
    saveTodos()
}

function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()
}

todoForm.addEventListener("submit", handleTodoSubmit)


const SaveTodos = localStorage.getItem(TODOES_KEY)
console.log(SaveTodos)
if(SaveTodos !== null) {
    const parsedTodos = JSON.parse(SaveTodos)
    todoeS = parsedTodos
    parsedTodos.forEach(paintTodo);
}