$(function () {
  $("#navigation").load("../html/nav.html");
  $("#footer").load("../index.html #footer");
});

    // Mostrar número de items en icono de carrito en barra de navegación
   

    const navCartItemNumber = () =>{
      let totalItems = 0;
      let storedCart = JSON.parse(localStorage.getItem("productosCarrito"));
          if (storedCart){
              storedCart.forEach(product => {
              totalItems += parseInt(product.cant);
              })
              document.getElementById('noItems').innerText = totalItems;
          }
  }

  const myTimeout = setTimeout(navCartItemNumber, 70);
  

