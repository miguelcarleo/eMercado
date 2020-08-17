//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var categoriesArray = [];

function showCategoriesList(array) {
  let htmlContentToAppend = "";
  for (let i = 0; i < array.length; i++) {
    let category = array[i];
    htmlContentToAppend += `<div class="container mb-3">`;
    htmlContentToAppend += `<div class="contenido">`;
    htmlContentToAppend += `<div class="row">`;
    htmlContentToAppend += `<div class="col">`;
    htmlContentToAppend += `<div id="name">` + category.name + `</div>`;
    htmlContentToAppend += `<div class="info">Descripción: ` + category.description + `</div>`;
    htmlContentToAppend += `<div class="info">Precio: ` + category.cost + category.currency + `</div>`;
    htmlContentToAppend += `<div class="info">Stock: ` + category.soldCount + `</div>`;
    htmlContentToAppend += `</div>`;
    htmlContentToAppend += `<div class="col">`;
    htmlContentToAppend += `<div class="info">` + `<img class="car_img" src= ` + category.imgSrc + `></div>`;
    htmlContentToAppend += `</div>`;
    htmlContentToAppend += `</div>`;
    htmlContentToAppend += `</div>`;
    htmlContentToAppend += `</div>`;
    document.getElementById("products").innerHTML = htmlContentToAppend;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData("https://japdevdep.github.io/ecommerce-api/product/all.json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      categoriesArray = resultObj.data;
      showCategoriesList(categoriesArray);
    }
  });
});
