const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

// 중요한 정보를 담은것이 아니라서 대문자로 작성하는것이 관례이다.
// 문자열이 포함된 변수는 대문자로 표기하고 문자열을 저장하고 싶을 때 사용한다.
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings(username){
    greeting.innerText = `Hello  ${username} Keep Going`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greeting
    paintGreetings(savedUsername)
}