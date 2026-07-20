const boton = document.getElementById("btn");

boton.onclick = function(){

document.getElementById("overlay").style.opacity="0";

setTimeout(()=>{

document.getElementById("overlay").style.display="none";

document.getElementById("contenido").style.opacity="1";

},1000);

}