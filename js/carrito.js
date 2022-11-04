const products = [
 
            {
                "id": 1,
                "categoria": "ositos",
                "nombre": "Osos",
                "precio": 300.00,
                "descuento": 100.00,
                "imagen": "Osos.jpg"}
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
        let fila = `<article class="row g-0">
        <div class="col-md-4">
          <img
            src="/assets/img/Ositos/OsoAzul.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">Pareja de ositos</h5>
            <p class="card-text">$3200.00 MXN</p>
          </div>
        </div>
        <div class="col-md-2 text-center my-auto">
          <button href="#" class="btn btn-light borrar"> Borrar </button>
        </div>
      </article>`;
        //fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        console.log(fila);
        html += fila;
    })
    document.getElementById('fila-1').innerHTML = html;
    document.querySelectorAll(".borrar").forEach(button => {
      button.addEventListener('click', borrarArticulo);
      console.log(button);
  });
    document.getElementById('noItems').innerText = cartProducts.length;
};

function borrarArticulo(){
  let idProd = this.id;
  this.parentElement.parentElement.innerHTML = "";
  console.log( this.id, cartProducts.filter(producto => producto.id != idProd));
}