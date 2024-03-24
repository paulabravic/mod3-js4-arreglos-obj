import propiedades_alquiler from "./objAlquiler.js";


const cardContainerAlquiler = document.querySelector("#alquiler .row");
let allCardsAlquiler = "";

for (let index = 0; index < propiedades_alquiler.length; index++) {
  allCardsAlquiler += `
  <div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedades_alquiler[index].src}"
      class="card-img-top"
      alt="${propiedades_alquiler[index].nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
          ${propiedades_alquiler[index].nombre}
      </h5>
      <p class="card-text">
          ${propiedades_alquiler[index].descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[index].ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedades_alquiler[index].habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedades_alquiler[index].banos} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[index].costo}</p>
      <p class="text-danger">
          ${propiedades_alquiler[index].smoke ? '<i style="color: green" class="fas fa-smoking"></i> <span style="color: green">Permitido fumar</span>' : '<i class="fas fa-smoking-ban"></i> <span>No se permite fumar</span>'}
      </p>
      <p class="text-danger">
          ${propiedades_alquiler[index].pets ? '<i style="color: green" class="fas fa-paw"></i> <span style="color: green">Mascotas permitidas</span>' : '<i class="fa-solid fa-ban"></i> <span>No se permiten mascotas</span>'}
      </p>
    </div>
  </div>
  </div>`;
}

cardContainerAlquiler.innerHTML = allCardsAlquiler;

