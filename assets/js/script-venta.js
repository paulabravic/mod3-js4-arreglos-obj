import propiedades_venta from "./objVenta.js";


const cardContainerVenta = document.querySelector("#venta .row");
let allCardsVenta = "";

for (let index = 0; index < propiedades_venta.length; index++) {
  allCardsVenta += `
  <div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedades_venta[index].src}"
      class="card-img-top"
      alt="${propiedades_venta[index].nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
          ${propiedades_venta[index].nombre}
      </h5>
      <p class="card-text">
          ${propiedades_venta[index].descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[index].ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedades_venta[index].habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedades_venta[index].banos} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[index].costo}</p>
      <p class="text-danger">
          ${propiedades_venta[index].smoke ? '<i style="color: green" class="fas fa-smoking"></i> <span style="color: green">Permitido fumar</span>' : '<i class="fas fa-smoking-ban"></i> <span>No se permite fumar</span>'}
      </p>
      <p class="text-danger">
          ${propiedades_venta[index].pets ? '<i style="color: green" class="fas fa-paw"></i> <span style="color: green">Mascotas permitidas</span>' : '<i class="fa-solid fa-ban"></i> <span>No se permiten mascotas</span>'}
      </p>
    </div>
  </div>
  </div>`;
}

cardContainerVenta.innerHTML = allCardsVenta;

