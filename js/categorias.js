const products=[
    {
        "categoria": "ositos",
        "nombre": "Ositos Cariñositos",
        "productos":[
            {
                "categoria":"ositos",
                "nombre":"Osos",
                "precio":199.00,
                "descuento":100.00,
                "imagen":"Osos.jpg"
            },
            {
                "categoria":"ositos",
                "nombre":"Oso azul",
                "precio":199.00,
                "descuento":100.00,
                "imagen":"OsoAzul.jpg"
            },
            {
                "categoria":"ositos",
                "nombre":"Oso café",
                "precio":199.00,
                "descuento":100.00,
                "imagen":"OsoCafe.jpg"
            },
            {
                "categoria":"ositos",
                "nombre":"Oso morado",
                "precio":199.00,
                "descuento":100.00,
                "imagen":"OsoMorado.jpg"
            },
            {
                "categoria":"ositos",
                "nombre":"Oso rosa",
                "precio":199.00,
                "descuento":100.00,
                "imagen":"OsoRosa.jpg"
            },
            {
                "categoria":"ositos",
                "nombre":"Oso rosita",
                "precio":199.00,
                "descuento":100.00,
                "imagen":"OsoRosita.jpg"
            },


        ] 
    },
    {
        "categoria":"kawaii",
        "nombre":"Kawaii",
        "productos":[
            
        ]
    },
    {
        "categoria":"ceramica",
        "nombre":"Cerámica",
        "productos":[
            
        ]
    },
    {
        "categoria":"otros",
        "nombre":"Otros",
        "productos":[
            
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

function getCategoria(categoriaPath){
    let categoria = null;
    products.forEach(element=>{
        if(element.categoria===categoriaPath){
            categoria= element;
        }
    });
    return categoria;
}
let categoriaPath = getParameterByName('categoria'); 
let categoria=getCategoria(categoriaPath);

function pintarTitulo(){
    document.getElementById('titulo-h1').innerHTML=categoria.nombre;
}

function pintarProductos(){
    let html="";
    categoria.productos.forEach(element=>{
        let fila='<div class="col-md-3"><a target="_blank"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p></div>';
        fila=fila.replace("{imagen}",'../assets/img/'+categoriaPath+'/'+element.imagen);
        fila=fila.replace("{nombre}",element.nombre);
        fila=fila.replace("{precioConDescuento}",element.precio-element.descuento);
        fila=fila.replace("{precioSinDescuento}",element.precio);
        console.log(fila);
        html+=fila;
    })
    document.getElementById('fila-1').innerHTML=html;
}
pintarTitulo();
pintarProductos();
console.log(products)
console.log(categoria);