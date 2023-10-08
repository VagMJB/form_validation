

const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    // alert("Cadastrado com sucesso!")
    checkInputUsername();
})


function checkInputUsername(params) {
    const userNameValue = username.value;

    if(userNameValue === ""){
        errorInput(username, "Preencha o nome do usuário")
    }



}


function errorInput (input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.classeName = "form-cont error"
}
