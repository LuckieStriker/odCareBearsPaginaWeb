
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

const statusInfo = {
	nombre: false,
	email: false,
	telefono: false,
	password: false,
};

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		switch (e.target.name) {
			case 'email':
				if (expresiones.email.test(e.target.value)) {
					statusInfo.email = true;
					emailError.textContent = '';
					input.classList.remove("border-danger");
					input.nextElementSibling.classList.add("hide");

				} else {
					statusInfo.email = false;
					emailError.textContent = 'Correo electrónico incorrecto';
					input.classList.add("border-danger");
					input.nextElementSibling.classList.remove("hide");
				}
				break;

			case 'nombre':
					if (expresiones.nombre.test(e.target.value)) {
						statusInfo.nombre = true;
						nombreError.textContent = '';
						input.classList.remove("border-danger");
						input.nextElementSibling.classList.add("hide");
					} else {
						statusInfo.nombre = false;
						nombreError.textContent = 'Nombre incorrecto';
						input.classList.add("border-danger");
						input.nextElementSibling.classList.remove("hide");
					}
					break;

			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					statusInfo.telefono = true;
					telefonoError.textContent = "";
					input.classList.remove("border-danger");
					input.nextElementSibling.classList.add("hide");
				}
				else{
					statusInfo.telefono = false 
					telefonoError.textContent = "Teléfono Incorrecto";
					input.classList.add("border-danger");
					input.nextElementSibling.classList.remove("hide");
				}
				break;
				
			case 'password':
				if (expresiones.password.test(e.target.value)) {
					statusInfo.password = true;
					passwordError.textContent = '';
					input.classList.remove("border-danger");
					input.nextElementSibling.classList.add("hide");
				} else {
					statusInfo.password = false;
					passwordError.textContent = 'Contraseña incorrecta';
					input.classList.add("border-danger");
					input.nextElementSibling.classList.remove("hide");
				}
				break;
		}
	});
});	



  /**
 * Funcion para enviar las alertas
 */

const showAlert = () =>{
	Swal.fire({
		icon: 'error',
		title: 'Vuelve a intentar',
		text: '¡Los datos son incorrectos!',
		backdrop: true,
		padding: '2rem',
		background: '#D9EFFA',
		confirmButtonText: 'Cerrar',
		with: '50%'
	});
};



//Evento de botón
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(statusInfo).every((value) => value === true)) {
		//Convirtiendo a Json la informacion del usuario
		const formDatos = Object.fromEntries(new FormData(e.target));
		formulario.reset();
		//Imprimiendo el objeto json
		/* console.log(formDatos); */


	console.log('Informacion Guardada');
	} else {
		console.log('No enviado');
		showAlert();
		
	}
});

