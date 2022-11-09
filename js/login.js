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
					emailError.textContent = "Correo electrónico incorrecto";
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
					passwordError.textContent = "Contraseña incorrecta";
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
		text: '¡Los datos son incorrectos! 😢',
		backdrop: true,
		padding: '2rem',
		background: '#D9EFFA',
		confirmButtonText: 'Cerrar',
		with: '50%'
	});
};



/**
 * Funcion para enviar las alertas de usuario registrado
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



function ingresarLogin(){
    const email= document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let user = localStorage.getItem('users');
    console.log(user);

    let data = JSON.parse(user);
    console.log(data);

    for(let i = 0; i < data.length; i++){
        if(data[i].email == email && data[i].password == password){
			showwelcome();
			location.href = 'perfil.html';
			break;

        }else{
            showAlert();
			break;
    
        }
    }
 }











//Evento de botón
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(statusInfo).every((value) => value === true)) {
	
		ingresarLogin();
		
		formulario.reset();
	//const datos = Object.fromEntries(new FormData(e.target));
	//formulario.reset();
		//Imprimiendo el objeto json
		//console.log(datos);
	//login(datos);
	} else {
		
		console.log('No enviado');
		
		
	}
});

