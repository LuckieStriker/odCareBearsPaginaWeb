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
        let fila = '<div class="row"><a target="_blank"><img src="{imagen}" class="img-fluid rounded-4" alt=""></a><p align="center">{nombre}<br> {precioConDescuento}MXN   <s>{precioSinDescuento}MXN</s></p></div>';
        //fila = fila.replace("{imagen}", '../assets/img/' + categoriaPath + '/' + element.imagen);
        fila = fila.replace("{nombre}", element.nombre);
        fila = fila.replace("{precioConDescuento}", element.precio - element.descuento);
        fila = fila.replace("{precioSinDescuento}", element.precio);
        console.log(fila);
        html += fila;
    })
    document.getElementById('fila-1').innerHTML = html;
};