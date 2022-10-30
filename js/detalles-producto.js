var ImagenPrincipal = document.getElementById('ImagenPrincipal');
var ImagenSmall = document.getElementsByClassName('small-img');
ImagenSmall[0].onclick=function(){
    ImagenPrincipal.src = ImagenSmall[0].src;
}
ImagenSmall[1].onclick=function(){
    ImagenPrincipal.src = ImagenSmall[1].src;
}
ImagenSmall[2].onclick=function(){
    ImagenPrincipal.src = ImagenSmall[2].src;
}
ImagenSmall[3].onclick=function(){
    ImagenPrincipal.src = ImagenSmall[3].src;
}