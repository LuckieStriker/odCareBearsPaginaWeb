const formulario = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const emailError = document.querySelector("#errorEmail")
const passwordError = document.querySelector("#errorPassword")


//Declaramos las expresiones regulares
const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
}



const statusInfo = {
	email: false,
	password: false,	
}

inputs.forEach((input)=>{
	input.addEventListener("keyup",(e) =>{
		switch(e.target.name){
            case "email":
				if(expresiones.email.test(e.target.value)){
					statusInfo.email = true;
					emailError.textContent = "";
					input.classList.remove("border-danger");
					input.nextElementSibling.classList.add("hide");
                   }
				else{
					statusInfo.email = false;
					emailError.textContent = "Correo lectrónico Incorrecto";
					input.classList.add("border-danger");
					input.nextElementSibling.classList.remove("hide");
				}
				break;
			case "password":
				if(expresiones.password.test(e.target.value)){
					statusInfo.password = true;
					passwordError.textContent = "";
					input.classList.remove("border-danger");
					input.nextElementSibling.classList.add("hide");
                }
				else{
					statusInfo.password = false;
					passwordError.textContent = "Contraseña Incorrecta";
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
	
	const datos = Object.fromEntries(new FormData(e.target));

	formulario.reset();
		//Imprimiendo el objeto json
		console.log(datos);
	//login(datos);
	} else {
		
		console.log('No enviado');
		showAlert();
		
	}
});


