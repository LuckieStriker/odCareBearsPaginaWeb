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
}