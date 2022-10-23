
//Obteniendo los datos
const $form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

//Validando datos 
function validateForm(){
        limpiarMensajes();
        let errorFlag = false;

        if(!nameIsValid(nameInput.value)){
                errorNodes[0].innerText = "El nombre es invalido";
                nameInput.classList.add("error-border");
                errorFlag = true;
        }

        if(!emailIsValid(email.value)){
                errorNodes[1].innerText  =  "El Email es invalido";
                email.classList.add("error-border");
                errorFlag = true;
        }

        if(!phoneIsValid(phone.value)){
                errorNodes[2].innerText  =  "El Telefono es invalido";
                phone.classList.add("error-border");
                errorFlag = true;
        }

        if(!messageIsValid(message.value)){
                errorNodes[3].innerText  =  "El mensaje es requerido y no debe de exceder los 255 caracteres";
                message.classList.add("error-border");
                errorFlag = true;
        }

        
        if (!errorFlag) {
        //Enviar emails
  
                
                
        }
}

//Limpiar errores
function limpiarMensajes(){
        for(let i =0; i<errorNodes.length; i++){
                errorNodes[i].innerText = "";
        }
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        phone.classList.remove("error-border");
        message.classList.remove("error-border");
}

//Verificar el nombre
const nameIsValid = (name) => {
        const patter = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        return patter.test(name);
};  

//Verificar el email
const emailIsValid = (email) => {
        const pattern = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
        return pattern.test(email);
}

// Verificar el telefono
const phoneIsValid = (phone) => {
        const patter= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return patter.test(phone);
}

// Validar el mensaje
const messageIsValid = (message) => {
        const patter = /^.{1,255}$/;
        return patter.test(message);
};

