//Obteniendo los datos
const formularioContact = document.querySelector('form');

const inputs = document.querySelectorAll('input', 'textarea');
const textareaContacto = document.querySelector('textarea');

const nombreError = document.querySelector('#errorNombre');
const emailError = document.querySelector('#errorEmail');
const telefonoError = document.querySelector('#errorTelefono');
const mensajeError = document.querySelector('#errorMensaje');

//Declaramos las expresiones regulares
const expresiones = {
	nombre: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,50}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,10}$/,
	mensaje: /^[a-z0-9_-]{20,500}$/,
};

const statusInfo = {
	nombre: false,
	email: false,
	telefono: false,
	mensaje: false,
};

inputs.forEach((inp) => {
	inp.addEventListener('keyup', (e) => {
		switch (e.target.name) {
                        case 'nombre':
				if (expresiones.nombre.test(e.target.value)) {
					statusInfo.nombre = true;
					nombreError.textContent = '';
                                        inp.classList.remove("border-danger");
					inp.nextElementSibling.classList.add("hide");
				} else {
                                        (statusInfo.nombre = false),
                                        (nombreError.textContent = 'Nombre incorrecto');
                                        inp.classList.add("border-danger");
                                        inp.nextElementSibling.classList.remove("hide");
                                }
                                break;

                        case 'email':
				if (expresiones.email.test(e.target.value)) {
					statusInfo.email = true;
					emailError.textContent = '';
					inp.classList.remove("border-danger");
					inp.nextElementSibling.classList.add("hide");
				} else {
					statusInfo.email = false;
					emailError.textContent = 'Correo electrónico incorrecto';
					inp.classList.add("border-danger");
					inp.nextElementSibling.classList.remove("hide");
				}
				break;


			

                        case "telefono":
                                if(expresiones.telefono.test(e.target.value)){
                                        statusInfo.telefono = true;
                                        telefonoError.textContent = "";
                                        inp.classList.remove("border-danger");
                                        inp.nextElementSibling.classList.add("hide");
                                }else{
                                        statusInfo.telefono = false;
                                        telefonoError.textContent = "Teléfono Incorrecto";
                                        inp.classList.add("border-danger");
                                        inp.nextElementSibling.classList.remove("hide");
                                }
                                break;

			case 'mensaje':
				if (expresiones.mensaje.test(e.target.value)) {
					statusInfo.mensaje = true;
					mensajeError.textContent = '';
                                        inp.classList.remove("border-danger");
                                        inp.nextElementSibling.classList.add("hide");
				} else {
					(statusInfo.mensaje = false),
                                        (mensajeError.textContent = 'Por favor escribe tu mensaje');
                                        inp.classList.add("border-danger");
                                        inp.nextElementSibling.classList.remove("hide");

				}
				break;
		}
	});
});


/**
 * Funcion para errores de validacion
 */

const errorAlert = () =>{
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
 * Funcion para enviar las alertas
 */

 const showEnviar = () =>{
        Swal.fire({
                icon: 'success',
                title: 'Gracias por tus comentarios C:',
                backdrop: true,
                padding: '2rem',
                background: '#D9EFFA',
                confirmButtonText: 'Cerrar',
                with: '50%'
        });
};


/**
 * Funcion para enviar el  correo
 * 
*/
function enviarEmail(){
        let params = {
                name: document.getElementById("nombre").value,
                email: document.getElementById("email").value,
                telefono: document.getElementById("telefono").value,
                mensaje: document.getElementById("mensaje").value,
        };
                const servicioID = "service_0skg31p";
                const templateID = "template_i68cps5";
                emailjs.send(servicioID,templateID,params)
                .then(res =>{
                document.getElementById("nombre").value = "";
                document.getElementById("email").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("mensaje").value = "";
                console.log(res);
        })
        .catch((err) =>console.log(err));
};



//mensaje
textareaContacto.addEventListener('input', (e) => {
	if (e.target.value != '') {
		statusInfo.mensaje = true;
		mensajeError.textContent = '';
	} else {
		(statusInfo.mensaje = false),
                (mensajeError.textContent = 'Por favor escribe tu mensaje');
	}
});

//Eventos del boton
formularioContact.addEventListener('submit', (e) => {
	e.preventDefault();
        //validaciones correctas
	if (!Object.values(statusInfo).includes(false)) {
        enviarEmail();
        showEnviar(); 
        const formDatos = Object.fromEntries(new FormData(e.target));
                console.log(formDatos);
                formularioContact.reset();
	} else {
                errorAlert();
                console.log('Datos no enviados');
		
	}
});






