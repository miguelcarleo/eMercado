//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
  sessionStorage.setItem("logeado", 1);
});

function redirijir() {
  console.log("entro");
  window.location.replace("index.html");
  return false;
}
