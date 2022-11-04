const data = JSON.parse(localStorage.getItem("productosCarrito"));
if (!data) console.log("Aún no hay artículos en tu carrito :(");
else {
renderCart();
}



const products = [
 
            {
                "id": 1,
                "categoria": "ositos",
                "nombre": "Osos",
                "precio": 300.00,
                "descuento": 100.00,
                "imagen": "/assets/img/Ositos/OsoAzul.jpg"}
];
const cartProducts = [];


console.log("Hola");
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener('click', addToCart);
});



function addToCart(){
    console.log(this.parentElement.id);
    let productCard = products.filter(obj => {
        return obj.id == this.parentElement.id
    });
    console.log(productCard[0]);
    cartProducts.push(productCard[0]);
    renderCart();
};

function renderCart() {
    let html = "";
    cartProducts.forEach(element => {
        console.log(element.nombre);
        let fila = 
        `<div class="card mb-4 max-vh-20">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="{imagen}"
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
            <a href="#" class="btn btn-light borrar" id ={id}> Borrar </a>
          </div>
        </div>
      </div>`;

        //fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        fila = fila.replace("{imagen}",element.imagen)
        fila = fila.replace("{id}",element.id)
        console.log(fila);
        html += fila;
    })
    document.getElementById('fila-1').innerHTML = html;
    document.querySelectorAll(".borrar").forEach(button => {
        button.addEventListener('click', borrarArticulo);
        console.log(button);
    });
};

function borrarArticulo(){
    let idProd = this.id;
    this.parentElement.innerHTML = "";
    console.log( this.id, cartProducts.filter(producto => producto.id != idProd));
}