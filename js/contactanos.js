//Obteniendo los datos
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => isValidName(nameInput.value);
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => isValidMesagge(messageInput.value);

const inputFields = [nameInput, emailInput, phoneInput, messageInput];


// Validar  el nombre
const isValidName = (name) => {
        const patter = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        return patter.test(name);
};    
// Validar el email
const isValidEmail = (email) => {
        const pattern = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
        return pattern.test(email);
};
// Validar el telefono
const isValidPhone = (phone) => {
        const patter= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return patter.test(phone);
};
// Validar el mensaje
const isValidMesagge = (message) => {
        const patter = /^.{1,255}$/;
        return patter.test(message);
};



let shouldValidate = false;
let isFormValid = false;

//Validando inputs
const validateInputs = () => {
        if (!shouldValidate) return;
        isFormValid = true;
        inputFields.forEach((input) => {
                //si son validos
        input.classList.remove("border-danger");
        input.nextElementSibling.classList.add("hide");
                //Camposinvalidos
        if (!input.isValid()) {
                input.classList.add("border-danger");
                isFormValid = false;
                input.nextElementSibling.classList.remove("hide");
        }
        });
};

/**
 * Funcion para enviar correo
 * 
*/

function enviarEmail(){
        let params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                message: document.getElementById("message").value,
        };
        const servicioID = "service_0skg31p";
const templateID = "template_i68cps5";

emailjs.send(servicioID,templateID,params)
.then(res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("message").value = "";
                console.log(res);

        })
        .catch((err) =>console.log(err));
}


















//      Evento del boton
form.addEventListener("submit", (e) => {
        e.preventDefault();
        shouldValidate = true;
        validateInputs();

        if (isFormValid) {
                //Llamando la funcion para enviar el Email
                enviarEmail();
             

        }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));


