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
                "imagen": "/assets/img/Ositos/OsoMorado.jpg",
                "imagenSec": "/assets/img/Ositos/OsoMorado1.jpg",
                "imagenTer":"/assets/img/Ositos/OsoMorado2.jpg",
                "descripcion":"Mochilita cariñosita con correas ajustables y cierre trasero para guardar lo que desees",
                "id": 1
            },
            {
                "categoria": "ositos",
                "nombre": "Oso Dormiloncito",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "/assets/img/Ositos/OsoAzul.jpg",
                "imagenSec": "/assets/img/Ositos/OsoAzul1.jpg",
                "imagenTer":"/assets/img/Ositos/OsitoAzul3.jpg",
                "descripcion":"Osito Dormiloncito, con su corazón intacto para que le des mucho amor, ojitos cansaditos y bonitos",
                "id": 2
            },
            {
                "categoria": "ositos",
                "nombre": "Tiernosito café",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "/assets/img/Ositos/OsoCafe.jpg",
                "imagenSec": "/assets/img/Ositos/OsoCafe1.jpg",
                "imagenTer": "/assets/img/Ositos/OsoCafe2.jpg",
                "descripcion":"Tiernosito café esta listo para que acaricies, y cuides de él",
                "id": 3
            },
            {
                "categoria": "ositos",
                "nombre": "Love A Lot Bear",
                "precio": 340.00,
                "descuento": 100.00,
                "imagen": "/assets/img/Ositos/OsoRosa.jpg",
                "imagenSec": "/assets/img/Ositos/OsoRosa1.jpg",
                "imagenTer": "/assets/img/Ositos/OsoRosa2.jpg",
                "descripcion":"Osito con mucho amor para dar y que cuides de él, en perfecto estado. ",
                "id": 4
            },
            {
                "categoria": "ositos",
                "nombre": "Bebesito cariñosito rosita",
                "precio": 349.00,
                "descuento": 100.00,
                "imagen": "/assets/img/Ositos/OsoRosita.jpg",
                "imagenSec": "/assets/img/Ositos/OsoRosita1.jpg",
                "imagenTer": "/assets/img/Ositos/OsoRosita2.jpg",
                "descripcion":"Bebé de los cariñositos, adaptable a mochila, sin daños",
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
                "imagen": "/assets/img/Accesorios/AretesCiculares1.jpg",
                "imagenSec": "/assets/img/Accesorios/AretesCirculares2.jpg",
                "imagenTer": "/assets/img/Accesorios/AretesCirculares3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con moños azul y blanco, pequeños y discretos ",
                "id": 6
            },

        ]
    },
    {
        "categoria": "ceramica",
        "nombre": "Cerámica",
        "productos": [

            {
                "categoria": "ceramica",
                "nombre": "Alajero",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Alajero.jpg",
                "id": 7
            },
            {
                "categoria": "ceramica",
                "nombre": "Cajita pastel",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "CajitaPastel.jpg",
                "id": 8
            },
            {
                "categoria": "ceramica",
                "nombre": "Plato largo",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "PlatoLargo.jpg",
                "id": 9
            },
            {
                "categoria": "ceramica",
                "nombre": "Taza",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Taza.jpg",
                "id": 10
            },

        ]
    },
    {
        "categoria": "otros",
        "nombre": "Otros",
        "productos": [
            {
                "categoria": "otros",
                "nombre": "Pintura",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "id": 11
            },
            {
                "categoria": "otros",
                "nombre": "Pintura",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "id": 12
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


for (i=0; i<products.length; i++){
products[i].productos.forEach(element => {
   if(ID1234 == element.id) nuevoProducto(element) 
    });
}
function nuevoProducto(element){
X = document.getElementById("miProducto");
X.innerHTML = `
                <h6>Home / ${element.categoria}</h6>
                <h3 class="py-4">${element.nombre}</h3>
                <h2>$${element.precio-element.descuento} <s>$${element.precio}</s></h2 >
                <input type="number" value="1">
                <button class="bcomprar add-cart">Agregar al carrito </button>
                <h4 class="mt-5 mb-5">Detalles del Producto</h4>
                <span>${element.descripcion}`
                CajaImg(element);
};
function CajaImg(element){
ventana=document.getElementById("miVentana");
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
