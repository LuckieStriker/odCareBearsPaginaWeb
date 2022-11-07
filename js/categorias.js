
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
                "imagen": "OsoMorado.jpg",
                "imagenSec": "OsoMorado1.jpg",
                "imagenTer":"OsoMorado2.jpg",
                "descripcion":"Mochilita cariñosita con correas ajustables y cierre trasero para guardar lo que desees",
                "id": 1
            },
            {
                "categoria": "ositos",
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
                "categoria": "ositos",
                "nombre": "Tiernosito café",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "OsoCafe.jpg",
                "imagenSec": "OsoCafe1.jpg",
                "imagenTer": "OsoCafe2.jpg",
                "descripcion":"Tiernosito café esta listo para que acaricies, y cuides de él",
                "id": 3
            },
            {
                "categoria": "ositos",
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
                "categoria": "ositos",
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
                "categoria": "accesorios",
                "nombre": "Aretes Estrella ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "AretesCiculares1.jpg",
                "imagenSec": "AretesCirculares2.jpg",
                "imagenTer": "AretesCirculares3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con moños azul y blanco, pequeños y discretos ",
                "id": 6
            },
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Luna y Planeta",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "LunaPlaneta1.jpg",
                "imagenSec": "LunaPlaneta2.jpg",
                "imagenTer": "LunaPlaneta3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con moños azul y blanco, pequeños y discretos ",
                "id": 7
            },
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Luna y estrella",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "LunaEstrellita.jpg",
                "imagenSec": "LunaPlaneta2.jpg",
                "imagenTer": "LunaPlaneta3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con moños azul y blanco, pequeños y discretos ",
                "id": 8
            },
            {
                "categoria": "Accesorios",
                "nombre": "Noche Estrellada",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "NocheEstrellada1.jpg",
                "imagenSec": "LunaPlaneta2.jpg",
                "imagenTer": "LunaPlaneta3.jpg",
                "descripcion":"Hermosos aretes en dorado y azul en forma circular, con moños azul y blanco, pequeños y discretos ",
                "id": 7
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
                "id": 8
            },
            {
                "categoria": "ceramica",
                "nombre": "Cajita pastel",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "CajitaPastel.jpg",
                "id": 9
            },
            {
                "categoria": "ceramica",
                "nombre": "Plato largo",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "PlatoLargo.jpg",
                "id": 10
            },
            {
                "categoria": "ceramica",
                "nombre": "Taza",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Taza.jpg",
                "id": 11
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
                "id": 12
            },
            {
                "categoria": "otros",
                "nombre": "Pintura",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "id": 13
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
for (i=0; i<products.length; i++){
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
        let fila = '<div class="col-md-3"><br><a target="_target" href="/html/detalles-producto.html?id={id}"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p><a target="_target" href="/html/detalles-producto.html?id={id}"><p align="center"><button type="button" href="_target" class="btn-historial">Agregar al carrito</button></p></a></div>';
        fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        fila = fila.replace("{id}", element.id);

        console.log(fila);
        html += fila;
    })
    document.getElementById('fila-1').innerHTML = html;
}

pintarTitulo();
pintarProductos();
console.log(products)
console.log(categoria);