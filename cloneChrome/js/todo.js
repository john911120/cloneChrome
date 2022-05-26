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
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
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
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    todoeS.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()
    todoeS = todoeS.filter((toDo) => toDo.id !== parseInt(li.id))
    saveTodos()
}

todoForm.addEventListener("submit", handleTodoSubmit)


const SaveTodos = localStorage.getItem(TODOES_KEY)
if(SaveTodos !== null) {
    const parsedTodos = JSON.parse(SaveTodos)
    todoeS = parsedTodos
    parsedTodos.forEach(paintTodo);
} 