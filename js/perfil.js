const mostrarDatos=()=>{
    let thead = '';
        let tbody = '';
    
        //Encabezado de la tabla
        thead = `
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                    
                </tr>
            </thead>`
        document.getElementById("atributos"). innerHTML = thead;

        let table = document.getElementById("tablita");
        for (let i =0; i < products[0].productos.length; i++) {
        table.innerHTML += `<tr><td><img class="img-hist rounded" src="/assets/img/Ositos/${products[0].productos[i].imagen}"></td> <td>${products[0].productos[i].nombre}</td> <td>$${products[0].productos[i].precio} MXN </td></tr>`;
        }
    
        }

const datosPerson=()=>{
    const usuarios = JSON.parse(localStorage.getItem("users"));
   
    document.getElementById("name").innerText = usuarios.nombre
    document.getElementById("email").innerText = usuarios.email
    document.getElementById("numTel").innerText = usuarios.telefono
}