const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const errorMessage = 'Insira um valor válido'

function initApp() {
    addEvent(firstName, `${errorMessage} First Name`)
    addEvent(lastName, `${errorMessage} Last Name`)
    addEvent(email, `Favor inserir uma e-mail válido`)
    addEvent(password, `${errorMessage} Password`)
}

initApp();

function validateEmail(input, elements) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!regex.test(input.value)) {
        addErrors(input, elements)
    } else {
        removeErrors(input, elements)
    }
}

function validateFields(input, elements) {
    if(!input.value || input.value.length < 3) {
        addErrors(input, elements)
    } else {
        removeErrors(input, elements)
    }
}

function addEvent(element, message) {
    element.addEventListener('blur', function() {
        createObject(element)

        if(element.type === 'text' || element.type === 'password') {
            validateFields(element, createObject(element, message))  
        } else {
            validateEmail(element, createO(element, message))
        } 
    })
}

function addErrors(input, elements) {
    input.classList.add('error-active')
    elements.erros.style.display = 'flex'
    elements.erros.children[1].innerHTML = elements.message || ''
}

function removeErrors(input, elements) {
    input.classList.remove('error-active')
    elements.erros.style.display = 'none'
}

function createObject(input, message) {
    return{
        erros: input.parentNode.children[1],
        message: message
    }
}