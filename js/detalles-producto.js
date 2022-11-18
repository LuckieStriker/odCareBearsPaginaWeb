
function cambioImg(smallImg) {
    let fullImg = document.getElementById("CajaImg");
    fullImg.src = smallImg.src;
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let ID1234 = getParameterByName('id');
solicitarDatos(ID1234);


let data
  
function solicitarDatos(id){
    let myHeaders = new Headers();
myHeaders.append('Content-Type','application/json;charset=UTF-8');
    fetch(`https://odcarebears-backend-production.up.railway.app/api/producto/${id}`, myHeaders)
    .then(respuesta=>respuesta.json())
        .then(cuerpo=>{
            console.log(cuerpo)
     data=
    {
        "nombre": cuerpo.nombreProducto,
        "descripcion": cuerpo.descripcion,
        "categoria": cuerpo.idCategoria.nombreCategoria,
        "precio": cuerpo.precio,
        "descuento": cuerpo.precio*0.1 ,
        "imagen": cuerpo.foto,
        "imagenSec": cuerpo.foto2,
        "imagenTer": cuerpo.foto3,
    } 
    nuevoProducto(data)
} )
    .catch(error => console.log(error))
  }
  

function nuevoProducto(element){
let X = document.getElementById("miProducto");
X.innerHTML = `
                <h6>Home / ${element.categoria}</h6>
                <h3 class="py-4">${element.nombre}</h3>
                <h2>$${Math.round(element.precio-element.descuento)} <s>$${element.precio}</s></h2 >
                <input type="number" id="cantidadArticulos" value="1" min="0" pattern="^[0-50]">
                <button class="bcomprar add-cart" name=${element.id}>Agregar al carrito </button>
                <h4 class="mt-5 mb-5">Detalles del Producto</h4>
                <span>${element.descripcion}`
                CajaImg(element);
};
function CajaImg(element){
let ventana=document.getElementById("miVentana");
ventana.innerHTML = `
<img  id="CajaImg" class="img-fluid w-100 rounded mb-2" src=${element.imagen} alt="">
<div class="small-img-group">
   <div class="small-img-col">
       <img src=${element.imagen}  width="100% " class="small-img rounded" onclick="cambioImg(this)" alt="">
   </div>
   <div class="small-img-col">
       <img src=${element.imagenSec}  width="100% " class="small-img rounded" onclick="cambioImg(this)" alt="">
   </div>
   <div class="small-img-col">
       <img src="${element.imagenTer}"  width="100% " class="small-img rounded" onclick="cambioImg(this)" alt="">
   </div>
   </div> `
};


/**function pintarProductos() {
    let html = "";
    categoria.productos.forEach(element => {
        let fila = '<div class="col-md-3"><a target="_blank"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p></div>';
        fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        console.log(fila);
        html += fila;
    })
    document.getElementById('fila-1').innerHTML = html; modificar para que quede en el mismo formato 
    */

    // Funcionalidad de agregar producto al carrito

    document.querySelectorAll(".add-cart").forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart() {
        let newCart = [];
        let flag = false;
        let productId = this.name;
        let cart = {id: productId, cant: document.getElementById("cantidadArticulos").value}
        console.log(cart);
        let storedCart = JSON.parse(localStorage.getItem("productosCarrito"));
        if (storedCart){
        newCart = storedCart.slice();
        newCart.forEach(product => {
            console.log(product.id);
            if(product.id == productId){
                 product.cant = parseInt(product.cant) + parseInt(cart.cant);
                 flag = true;
                }
            });
            if (!flag) newCart.push(cart);
        }
        
        else {
            newCart.push(cart);
        } ;
    localStorage.setItem("productosCarrito", JSON.stringify(newCart));
    navCartItemNumber();
    }

    export{cambioImg};



