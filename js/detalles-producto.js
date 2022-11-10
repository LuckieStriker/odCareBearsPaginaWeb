import {navCartItemNumber} from "/js/nav.js";
const products = [
    {
        "categoria": "ositos",
        "nombre": "Ositos Cariñositos",
        "productos": [
            {
                "categoria": "ositos",
                "nombre": "Oso Morado",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/744rDWn/Oso-Morado.jpg",
                "imagenSec": "https://i.ibb.co/VqzdZGy/Oso-Morado1.jpg",
                "imagenTer":"https://i.ibb.co/pnnkHKs/Oso-Morado2.jpg",
                "descripcion":"Mochilita cariñosita con correas ajustables y cierre trasero para guardar lo que desees.",
                "id": 1
            },
            {
                "categoria": "ositos",
                "nombre": "Oso Dormiloncito",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/WgNGg7d/OsoAzul.jpg",
                "imagenSec": "https://i.ibb.co/G90FCSb/OsoAzul1.jpg",
                "imagenTer":"https://i.ibb.co/4sjTnCJ/Osito-Azul3.jpg",
                "descripcion":"Osito Dormiloncito, con su corazón intacto para que le des mucho amor, ojitos cansaditos y bonitos.",
                "id": 2
            },
            {
                "categoria": "ositos",
                "nombre": "Tiernosito café",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/xHPXJw9/OsoCafe.jpg",
                "imagenSec": "https://i.ibb.co/vXBpXm0/OsoCafe1.jpg",
                "imagenTer": "https://i.ibb.co/wSd7D5w/OsoCafe2.jpg",
                "descripcion":"Tiernosito café esta listo para que acaricies y cuides de él.",
                "id": 3
            },
            {
                "categoria": "ositos",
                "nombre": "Love A Lot Bear",
                "precio": 340.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/dfbZP07/OsoRosa.jpg",
                "imagenSec": "https://i.ibb.co/Nsdskyv/OsoRosa1.jpg",
                "imagenTer": "https://i.ibb.co/7VWWcxX/OsoRosa2.jpg",
                "descripcion":"Osito con mucho amor para dar y que cuides de él, en perfecto estado.",
                "id": 4
            },
            {
                "categoria": "ositos",
                "nombre": "Bebesito cariñosito rosita",
                "precio": 349.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/mS5fHF0/Oso-Rosita.jpg",
                "imagenSec": "https://i.ibb.co/nkmGVTb/Oso-Rosita1.jpg",
                "imagenTer": "https://i.ibb.co/DQsQpCh/Oso-Rosita2.jpg",
                "descripcion":"Bebé de los cariñositos, adaptable a mochila, sin daños.",
                "id": 5
            },


        ]
    },
    {
        "categoria": "Accesorios",
        "nombre": "Accesorios",
        "productos": [
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Estrella ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/StmXdPB/Estrellitas.jpg",
                "imagenSec": "https://i.ibb.co/kJBSBkr/Planeta-Peque-o.jpg",
                "imagenTer": "https://i.ibb.co/3SKdMCf/Luna-Azul2.jpg",
                "descripcion":"Hermosos aretes en dorado y azul, figuras de planeta y luna con estrellas, con moños azules, pequeños y discretos.",
                "id": 6
            },
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Aros Luna-Planeta ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/7y9fvZr/Aretes-Luna-Planeta.jpg",
                "imagenSec": "https://i.ibb.co/929ZSh8/Aretes-Luna-Planeta2.jpg",
                "imagenTer": "https://i.ibb.co/gJYMXY8/Aretes-Luna-Planeta3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con imagen de la luna, estrellas y un planeta.",
                "id": 7
            },
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Luna-Estrella ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/MfVR9R9/Luna-Estrellita.jpg",
                "imagenSec": "https://i.ibb.co/HBQVdtw/Luna-Estrellita2.jpg",
                "imagenTer": "https://i.ibb.co/MP2Kyp0/Aretes-Circulares4.jpg",
                "descripcion":"Hermosos aretes en dorado y azul, una luna y una estrella con una perla.",
                "id": 8
            },
            
            {
                "categoria": "Accesorios",
                "nombre": "Noche Estrellada ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/p0qHPbv/Noche-Estrellada1.jpg",
                "imagenSec": "https://i.ibb.co/1TbKn7s/Noche-Estrellada2.jpg",
                "imagenTer": "https://i.ibb.co/p0qHPbv/Noche-Estrellada1.jpg",
                "descripcion":"Hermosos aretes en dorado y azul, una luna llena en aros, con estrellas y planetas pequeños colgantes.",
                "id": 9
            },

        ]
    },
    {
        "categoria": "ceramica",
        "nombre": "Cerámica",
        "productos": [

            {
                "categoria": "ceramica",
                "nombre": "Alhajero",
                "precio": 390.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/8KxkNZ6/Alajero.jpg",
                "imagenSec": "https://i.ibb.co/L8nh9mT/Alajero1.jpg",
                "imagenTer": "https://i.ibb.co/S3Ytyjf/Alajero2.jpg",
                "descripcion":"Alhajero de ceramica con flores, bordes dorados en la base.",
                "id": 10
            },
            {
                "categoria": "ceramica",
                "nombre": "Cajita pastel",
                "precio": 590.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/3Njn98y/Cajita-Pastel.jpg",
                "imagenSec": "https://i.ibb.co/SdX9X2S/Cajita-Pastel1.jpg",
                "imagenTer": "https://i.ibb.co/smv2Nj7/Cajita-Pastel2.jpg",
                "descripcion":"Pastelito con fresas en la parte de arriba, puedes guardar aretes y collares en los compartimientos internos. <br> Fue pintado y moldeado a mano.<br> **Incluye 2 macarons de Ositos.",
                "id": 11
            },
            {
                "categoria": "ceramica",
                "nombre": "Plato largo",
                "precio": 475.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/37pQK3V/Plato-Largo.jpg",
                "imagenSec": "https://i.ibb.co/k9nphkv/Plato-Largo2.jpg",
                "imagenTer": "https://i.ibb.co/37pQK3V/Plato-Largo.jpg",
                "descripcion":"Platón de ceramica, con la imagen de Cinnamoroll pintado a mano, con técnica de hoja de oro.",
                "id": 12
            },
            {
                "categoria": "ceramica",
                "nombre": "Alhajero My Melody",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/wwk0Bmy/Taza.jpg",
                "imagenSec": "https://i.ibb.co/3BZVnY4/Taza2.jpg",
                "imagenTer": "https://i.ibb.co/R0RZq44/Taza1.jpg",
                "descripcion":"Pequeño alhajero de My Melody, se asoma su figura.",
                "id": 13
            },

        ]
    },
    {
        "categoria": "otros",
        "nombre": "Otros",
        "productos": [
            {
                "categoria": "otros",
                "nombre": "Pintura De Oso",
                "precio": 299.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/wYPK6Tn/Pintura1.jpg",
                "imagenSec": "https://i.ibb.co/5WDfW7j/Pintura2.jpg",
                "imagenTer": "https://i.ibb.co/wYPK6Tn/Pintura1.jpg",
                "descripcion":"Pintura con técnica sobre óleo.",
                "id": 14
            },
            {
                "categoria": "otros",
                "nombre": "Pintura De Oso",
                "precio": 299.00,
                "descuento": 100.00,
                "imagen": "https://i.ibb.co/wYPK6Tn/Pintura1.jpg",
                "imagenSec": "https://i.ibb.co/5WDfW7j/Pintura2.jpg",
                "imagenTer": "https://i.ibb.co/wYPK6Tn/Pintura1.jpg",
                "descripcion":"Pintura con técnica sobre óleo.",
                "id": 15
            }

        ]
    }
]


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


for (let i=0; i<products.length; i++){
products[i].productos.forEach(element => {
   if(ID1234 == element.id) nuevoProducto(element) 
    });
}
function nuevoProducto(element){
let X = document.getElementById("miProducto");
X.innerHTML = `
                <h6>Home / ${element.categoria}</h6>
                <h3 class="py-4">${element.nombre}</h3>
                <h2>$${element.precio-element.descuento} <s>$${element.precio}</s></h2 >
                <input type="number" id="cantidadArticulos" value="1">
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




