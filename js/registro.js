
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

//Validaciones
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
					passwordError.textContent = 'Contraseña debil';
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


/**
 * Funcion para mandar mensaje de vienvenida
 */

 const showwelcome = () =>{
	Swal.fire({
			icon: 'success',
			title: 'Bienvenido',
			backdrop: true,
			padding: '2rem',
			background: '#D9EFFA',
			confirmButtonText: 'Cerrar',
			with: '50%'
	});
};


/**
 * Email repetido
 */
const emailRepetido = () =>{
	Swal.fire({
		icon: 'error',
		title: 'Vuelve a intentar',
		text: '¡El email ya existe!',
		backdrop: true,
		padding: '2rem',
		background: '#D9EFFA',
		confirmButtonText: 'Cerrar',
		with: '50%'
	});
};




/**Registro de usuarios */

const users = [];

let user = {
	correo: "",
	nombre: "",
	telefono: "",
	password: ""
};

/**
 * Funcion para guardar los usuarios
 */
function guardarUsuario(){
	const email = document.getElementById("email").value;
	const nombre = document.getElementById("nombre").value;
	const phone = document.getElementById("phone").value;
	const password = document.getElementById("password").value;
	
	let validacion = false;

	user = {
		email : email,
		nombre: nombre,
		phone: phone,
		password: password
	}

	for(let i = 0; i < users.length; i++){
		if(users[i].correo == user.correo)
		validacion =true;
	}

	if(validacion)
		emailRepetido();
	else{
		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));
		showwelcome();
		
	}  
	//console.log(users);  
	mandarDatos(nombre,email,password,phone)                                             
}

//Union de api con front

function mandarDatos(nombre, email,password, telefono){
	const data=
	{
		"fullName": nombre,
		"email": email,
		"password": password,
		"telephone": telefono
	}
	
 fetch('https://odcarebears-backend-production.up.railway.app/api/usuario',{
		
 		method: "POST",
		body: JSON.stringify(data),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
	  

	})
	
	.then(respuesta=>respuesta.json())
	.then(cuerpo=>{
	  console.log("conexion exitosa siiuuuuuu")
	})
	.catch(error => console.log(error))
  }


//Evento de botón
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(statusInfo).every((value) => value === true)) {
		guardarUsuario(),
		//mandarDatos(inputs.values, email,telefono,password);
		//Convirtiendo a Json la informacion del usuario
		//const formDatos = Object.fromEntries(new FormData(e.target));


		formulario.reset();
		//Imprimiendo el objeto json
		/* console.log(formDatos); */


	console.log('Informacion Guardada');
	} else {
		console.log('No enviado');
		showAlert();
		
	}
});



