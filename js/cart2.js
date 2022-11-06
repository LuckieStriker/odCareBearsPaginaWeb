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

let cartProducts = [];

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener('click', addToCart);
});


function addToCart() {
  const data = JSON.parse(localStorage.getItem("productosCarrito"));
  if (!data){ 
  let dataNew = [];
  dataNew.push(this.parentElement.id);
  localStorage.setItem("productosCarrito", JSON.stringify(dataNew));}
  else {
    data.push(this.parentElement.id);
    localStorage.setItem("productosCarrito", JSON.stringify(data));}
renderCart();
}

function borrarArticulo() {
  let idProd = this.id;
  const data = JSON.parse(localStorage.getItem("productosCarrito"));
  data.pop(data.indexOf(idProd));
  localStorage.setItem("productosCarrito", JSON.stringify(data));
  renderCart();
}


function renderCart() {
  let html = "";
  const data = JSON.parse(localStorage.getItem("productosCarrito"));
  
  for (i = 0; i < data.length; i++) {
    for (j = 0; j < products.length; j++) {
      products[j].productos.forEach((element) => {
        if (data[i] == element.id) cartProducts.push(element);
      });
    }
  }
  cartProducts.forEach((element) => {
    console.log(element.nombre);
    let fila = `<div class="card mb-4 max-vh-20">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/assets/img/Ositos/{imagen}"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">\${precioSinDescuento}</p>
            </div>
          </div>
          <div class="col-md-2 text-center my-auto borrar">
            <button href="#" class="btn btn-light borrar" id ={id}> Borrar </button>
          </div>
        </div>
      </div>`;

    //fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
    fila = fila.replace("{nombre}", element.nombre);
    fila = fila.replace(
      "{precioConDescuento}",
      element.precio - element.descuento
    );
    fila = fila.replace("{precioSinDescuento}", element.precio);
    fila = fila.replace("{imagen}", element.imagen);
    fila = fila.replace("{id}", element.id);
    console.log(fila);
    html += fila;
  });
  document.getElementById("fila-1").innerHTML = html;

  document.querySelectorAll(".borrar").forEach((button) => {
    button.addEventListener("click", borrarArticulo);
    console.log(button);
  });
}
