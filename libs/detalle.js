import { getOneTask, getProductInState } from "../service/tareas.js";


const id = new URLSearchParams(window.location.search).get("id");
//inicializar elementos

const product_image = document.getElementById("product-image");
const product_title = document.getElementById("product-title");
const product_time = document.getElementById("product-price");
const product_person = document.getElementById("product-person");
const product_description = document.getElementById("product-description");

const  productosRelacionadosContainer = document.getElementById("productos-relacionados");

const fillProductosRelacionados = async (estado) => {
    const tasks = await getProductInState(estado);

    tasks.forEach(task => {
        //crear elemento
        productosRelacionadosContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img class="card-img-top" src="${task.imagen}" alt="${task.estado}">
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${task.titulo}</h5>
                <span>Tiempo: ${task.tiempo}</span><br>
                <span>Responsable: ${task.responsable}</span>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center d-flex gap-1 align-items-center justify-content-center">
                    <a href="/detalle.html?id=${task.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
                </div>
                <div class="text-center d-flex gap-1 align-items-center justify-content-center">
                <a href="/detalle.html?id=${task.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
            </div>
            
            </div>
          </div>
        `;
    });
}
const fillProduct = async () => {
    const product = await getOneTask(id);
   if(product){

    product_image.src = product.imagen;
    product_title.textContent =  product.titulo;
    product_time.textContent ="Tiempo: "+  product.tiempo;
    product_person.textContent = "Responable: " +  product.responsable;
    product_description.textContent = product.descripcion;

    fillProductosRelacionados(product.estado);

   }
}

fillProduct();