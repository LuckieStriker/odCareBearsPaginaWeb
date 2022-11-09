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
            {
                "categoria": "Accesorios",
                "nombre": "Aretes Luna-Planeta ",
                "precio": 199.00,
                "descuento": 100.00,
                "imagen": "/assets/img/Accesorios/AretesLunaPlaneta.jpg",
                "imagenSec": "/assets/img/Accesorios/AretesLunaPlaneta2.jpg",
                "imagenTer": "/assets/img/Accesorios/AreteLunaPlaneta3.jpg",
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

let html="";
let total = 0;
renderCart();

function renderCart() {

    let storedCart = JSON.parse(localStorage.getItem("productosCarrito"));
    const ids = [];
    storedCart.forEach(prod => ids.push(prod.id));
    console.log(storedCart); 


    for (let i=0; i<products.length; i++){
        products[i].productos.forEach(element => {
           //if(ids.includes(String(element.id))) console.log(element, storedCart[ids.indexOf(String(element.id))].cant)
           
           if(ids.includes(String(element.id))) {
            let cantidad = storedCart[ids.indexOf(String(element.id))].cant;
            renderProduct(element, cantidad)
            }
            });
            document.getElementById('fila-1').innerHTML = html;
            
}
document.getElementById("totalCarrito").innerHTML = `<h5> Total: $${total} MXN </h5>`;
console.log(total);
}

function renderProduct(prod, cant){
    let fila = `<div class="card mb-4">
    <div class="container">
      <div class="row">
        <div class="col p-2 my-auto">
          <img
            src="${prod.imagen}"
            class="img-fluid rounded-2" alt="Shopping item">
        </div>
        <div class="col my-auto text-center">
          <b>${prod.nombre}</b>
        </div>
      
        <div class="col my-auto text-center">
          <input type="number" value = "${cant}"></input>
        </div>
        <div class="col my-auto text-center">
          <b class="">$${prod.precio-prod.descuento} MXN</b>
        </div>
        <div class="col my-auto text-center">
        <a href="#!"><img src="/assets/img/trash.svg" class="borrar"></a>
      </div>
      </div>
    </div>
  </div>`;
  html += fila;
  total += parseInt(prod.precio-prod.descuento)*cant;
}
