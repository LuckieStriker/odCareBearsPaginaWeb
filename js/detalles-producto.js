const products = [
    {
        "categoria": "ositos",
        "nombre": "Ositos Cariñositos",
        "productos": [
            {
                "categoria": "ositos",
                "nombre": "Osos",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "../assets/img/osito-morado1.jpg",
                "imagenSec": "../assets/img/osito-morado2.jpg",
                "imangenTer":"../assets/img/osito-morado3.jpg",
                "descripcion":"Mochilita cariñosita con correas ajustables y cierre trasero para guardar lo que desees",
                "id": 1
            },
            {
                "categoria": "ositos",
                "nombre": "Oso azul",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoAzul.jpg",
                "id": 2
            },
            {
                "categoria": "ositos",
                "nombre": "Oso café",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoCafe.jpg",
                "id": 3
            },
            {
                "categoria": "ositos",
                "nombre": "Oso morado",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoMorado.jpg",
                "id": 4
            },
            {
                "categoria": "ositos",
                "nombre": "Oso rosa",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoRosa.jpg",
                "id": 5
            },
            {
                "categoria": "ositos",
                "nombre": "Oso rosita",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoRosita.jpg",
                "id": 6
            },


        ]
    },
    {
        "categoria": "kawaii",
        "nombre": "Kawaii",
        "productos": [

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

products[0].productos.forEach(element => {
    ID1234 == element.id ? nuevoProducto(element) : console.log("nones")
});
function nuevoProducto(element){
X = document.getElementById("miProducto");
X.innerHTML = `
                <h6>Home / ${element.categoria}</h6>
                <h3 class="py-4">Osito Morado</h3>
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
       <img src="${element.imangenTer}"  width="100% " class="small-img rounded" onclick="cambioImg(this)" alt="">
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