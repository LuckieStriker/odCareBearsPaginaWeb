import {navCartItemNumber} from "/js/nav.js";
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
                "imagen": "osos.jpg",
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
        "categoria": "accesorios",
        "nombre": "Accesorios Kawaii",
        "productos": [
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 7
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 8
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 9
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 10
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 11
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 12
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 13
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 14
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 15
            },
            {
                "categoria": "accesorios",
                "nombre": "Aretes",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "null",
                "id": 16
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
                "id": 17
            },
            {
                "categoria": "ceramica",
                "nombre": "Cajita pastel",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "CajitaPastel.jpg",
                "id": 18
            },
            {
                "categoria": "ceramica",
                "nombre": "Plato largo",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "PlatoLargo.jpg",
                "id": 19
            },
            {
                "categoria": "ceramica",
                "nombre": "Taza",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Taza.jpg",
                "id": 20
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
                "id": 21
            },
            {
                "categoria": "otros",
                "nombre": "Pintura",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "Pintura1.jpg",
                "id": 22
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
        let fila = '<div class="col-md-3"><br><a target="_target" href="/html/detalles-producto.html?id={id}"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p><p align="center"><button type="button" class="btn-historial add-cart" name="{id}" value ="1">Agregar al carrito</button></p></a></div>';
        fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        fila = fila.replaceAll("{id}", element.id);

        console.log(fila);
        html += fila;
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