import {navCartItemNumber} from "/js/nav.js";
const products = [
    {
        "categoria": "ositos",
        "nombre": "Ositos Cariñositos",
        "productos": [
            {
                "categoria": "Ositos",
                "nombre": "Oso Morado",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoMorado.jpg",
                "imagenSec": "OsoMorado1.jpg",
                "imagenTer":"OsoMorado2.jpg",
                "descripcion":"Mochilita cariñosita con correas ajustables y cierre trasero para guardar lo que desees",
                "id": 1
            },
            {
                "categoria": "Ositos",
                "nombre": "Oso Dormiloncito",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoAzul.jpg",
                "imagenSec": "OsoAzul1.jpg",
                "imagenTer":"OsitoAzul3.jpg",
                "descripcion":"Osito Dormiloncito, con su corazón intacto para que le des mucho amor, ojitos cansaditos y bonitos",
                "id": 2
            },
            {
                "categoria": "Ositos",
                "nombre": "Tiernosito café",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoCafe.jpg",
                "imagenSec": "OsoCafe1.jpg",
                "imagenTer": "OsoCafe2.jpg",
                "descripcion":"Tiernosito café esta listo para que acaricies y cuides de él",
                "id": 3
            },
            {
                "categoria": "Ositos",
                "nombre": "Love A Lot Bear",
                "precio": 340.00,
                "descuento": 100.00,
                "imagen": "OsoRosa.jpg",
                "imagenSec": "OsoRosa1.jpg",
                "imagenTer": "OsoRosa2.jpg",
                "descripcion":"Osito con mucho amor para dar y que cuides de él, en perfecto estado. ",
                "id": 4
            },
            {
                "categoria": "Ositos",
                "nombre": "Bebesito cariñosito rosita",
                "precio": 349.00,
                "descuento": 100.00,
                "imagen": "OsoRosita.jpg",
                "imagenSec": "OsoRosita1.jpg",
                "imagenTer": "OsoRosita2.jpg",
                "descripcion":"Bebé de los cariñositos, adaptable a mochila, sin daños",
                "id": 5
            },


        ]
    },
    {
        "categoria": "accesorios",
        "nombre": "Accesorios",
        "productos": [
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Estrella ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Estrellitas.jpg",
                "imagenSec": "Estrellitas4.jpg",
                "imagenTer": "Estrellitas3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul, figuras de planeta y luna con estrellas, con moños azul, pequeños y discretos.",
                "id": 6
            },
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Aros Luna-Planeta ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "AretesLunaPlaneta.jpg",
                "imagenSec": "AretesLunaPlaneta2.jpg",
                "imagenTer": "AretesLunaPlaneta3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con imagen de la luna, estrellas y un planeta.",
                "id": 7
            },
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Luna-Estrella ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "LunaEstrellita.jpg",
                "imagenSec": "LunaEstrellita2.jpg",
                "imagenTer": "EstrellitasPerla.jpg",
                "descripcion":"Hermosos aretes en dorado y azul, una luna y una estrella con una perla.",
                "id": 8
            },
            
            {
                "categoria": "Accesorios",
                "nombre": "Noche Estrellada ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "NocheEstrellada1.jpg",
                "imagenSec": "NocheEstrellada2.jpg",
                "imagenTer": "NocheEstrellada1.jpg",
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
                "categoria": "Ceramica",
                "nombre": "Alajero",
                "precio": 390.00,
                "descuento": 100.00,
                "imagen": "Alajero.jpg",
                "imagenSec": "Alajero1.jpg",
                "imagenTer": "Alajero2.jpg",
                "descripcion":"Alajero de cerámica con flores, bordes dorados en la base.",
                "id": 10
            },
            {
                "categoria": "Ceramica",
                "nombre": "Cajita pastel",
                "precio": 590.00,
                "descuento": 100.00,
                "imagen": "CajitaPastel.jpg",
                "imagenSec": "CajitaPastel1.jpg",
                "imagenTer": "CajitaPastel2.jpg",
                "descripcion":"Pastelito, con fresas en la parte de arriba, puedes guardar aretes y collares en los compartimientos internos. <br> Fue pintado y moldeado a mano.<br> **Incluye 2 macarons de Ositos.",
                "id": 11
            },
            {
                "categoria": "Ceramica",
                "nombre": "Plato largo",
                "precio": 475.00,
                "descuento": 100.00,
                "imagen": "PlatoLargo.jpg",
                "imagenSec": "PlatoLargo2.jpg",
                "imagenTer": "PlatoLargo.jpg",
                "descripcion":"Platón de cerámica, con la imagen de Cinnamonroll pintado a mano, con técnica de hoja de oro.",
                "id": 12
            },
            {
                "categoria": "Ceramica",
                "nombre": "Alajero 'My Melody'",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Taza.jpg",
                "imagenSec": "Taza2.jpg",
                "imagenTer": "Taza1.jpg",
                "descripcion":"Pequeño alajero de 'My Melody', se asoma su figura.",
                "id": 13
            },

        ]
    },
    {
        "categoria": "otros",
        "nombre": "Otros",
        "productos": [
            {
                "categoria": "Otros",
                "nombre": "Pintura de oso",
                "precio": 299.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "imagenSec": "Pintura2.jpg",
                "imagenTer": "Pintura1.jpg",
                "descripcion":"Pintura con técnica sobre oleo.",
                "id": 14
            },
            {
                "categoria": "Otros",
                "nombre": "Pintura de oso",
                "precio": 299.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "imagenSec": "Pintura2.jpg",
                "imagenTer": "Pintura1.jpg",
                "descripcion":"Pintura con técnica sobre oleo.",
                "id": 15
            }

        ]
    }
]

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


function getCategoria(categoriaPath) {
    let categoria = null;
    products.forEach(element => {
        if (element.categoria === categoriaPath) {
            categoria = element;
        }
    });
    return categoria;
}
let categoriaPath = getParameterByName('categoria');
let categoria = getCategoria(categoriaPath);

function pintarTitulo() {
    document.getElementById('titulo-h1').innerHTML = categoria.nombre;
}


function pintarProductos() {
    let html = "";
    categoria.productos.forEach(element => {
        let fila = '<div class="col-md-3"><br><a target="_target" href="/html/detalles-producto.html?id={id}"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p id="productos" align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p><p align="center"><button type="button" class="btn-historial add-cart" name="{id}" value ="1">Agregar al carrito</button></p></a></div>';
        fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        fila = fila.replaceAll("{id}", element.id);

        console.log(fila);
        html += fila;

        document.getElementById('titulo').innerHTML = element.categoria;
       
    })
    document.getElementById('fila-1').innerHTML = html;
    
}

pintarTitulo();
pintarProductos();
console.log(products)
console.log(categoria);

// Funcionalidad de agregar producto al carrito

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart() {
    let newCart = [];
    let flag = false;
    let productId = this.name;
    let cart = {id: productId, cant: this.value}
    console.log(cart);
    let storedCart = JSON.parse(localStorage.getItem("productosCarrito"));
    if (storedCart.length > 0){
    //storedCart.push(cart)}
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