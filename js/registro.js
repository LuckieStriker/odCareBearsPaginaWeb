
const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const emailError = document.querySelector("#errorEmail");
const nombreError = document.querySelector("#errorNombre");
const telefonoError = document.querySelector("#errorTelefono");
const passwordError = document.querySelector("#errorPassword");


//Declaramos las expresiones regulares
const expresiones = {
	nombre: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,50}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,10}$/,
	password: /^.{4,12}$/
};

const statusInf = {
	nombre: false,
	email: false,
	telefono: false,
	password: false,
};

inputs.forEach((inp) => {
	inp.addEventListener('keyup', (e) => {
		switch (e.target.name) {
			case 'email':
				if (expresiones.email.test(e.target.value)) {
					statusInf.email = true;
					emailError.textContent = '';
					inp.classList.remove("border-danger");
					inp.nextElementSibling.classList.add("hide");

				} else {
					statusInf.email = false;
					emailError.textContent = 'Correo electronico incorrecto';
					inp.classList.add("border-danger");
					inp.nextElementSibling.classList.remove("hide");
				}
				break;

			case 'nombre':
					if (expresiones.nombre.test(e.target.value)) {
						statusInf.nombre = true;
						nombreError.textContent = '';
						inp.classList.remove("border-danger");
						inp.nextElementSibling.classList.add("hide");
					} else {
						statusInf.nombre = false;
						nombreError.textContent = 'Nombre incorrecto';
						inp.classList.add("border-danger");
						inp.nextElementSibling.classList.remove("hide");
					}
					break;

			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					statusInf.telefono = true;
					telefonoError.textContent = "";
					inp.classList.remove("border-danger");
					inp.nextElementSibling.classList.add("hide");
				}
				else{
					statusInf.telefono = false 
					telefonoError.textContent = "Telefono Incorrecto";
					inp.classList.add("border-danger");
					inp.nextElementSibling.classList.remove("hide");
				}
				break;
				
			case 'password':
				if (expresiones.password.test(e.target.value)) {
					statusInf.password = true;
					passwordError.textContent = '';
					inp.classList.remove("border-danger");
					inp.nextElementSibling.classList.add("hide");
				} else {
					statusInf.password = false;
					passwordError.textContent = 'Contraseña incorrecta';
					inp.classList.add("border-danger");
					inp.nextElementSibling.classList.remove("hide");
				}
				break;
		}
	});
});	





//Verificando las validacciones
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(statusInf).every((value) => value === true)) {
		const formData = Object.fromEntries(new FormData(e.target));
		formulario.reset();
		console.log(formData);


	console.log('Informacion correcta');
	} else {
		console.log('No enviado');
		formulario.reset();
	}
});

