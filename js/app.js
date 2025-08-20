document.addEventListener("DOMContentLoaded", () => {
  const btnModoOscuro = document.getElementById("modoOscuroBtn");
  const body = document.body;

  // Restaurar preferencia guardada
  if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.add("oscuro");
  }

  if (btnModoOscuro) {
    btnModoOscuro.addEventListener("click", () => {
      body.classList.toggle("oscuro");
      localStorage.setItem("modoOscuro", body.classList.contains("oscuro"));
    });
  }

  // Cargar datos dinámicos en index
  const tipoEventoSelect = document.getElementById("tipoEvento");
  const extrasSelect = document.getElementById("extras");

  if (tipoEventoSelect && extrasSelect) {
    const eventosData = [
      { id: 1, nombre: "Cumpleaños" },
      { id: 2, nombre: "Casamiento" },
      { id: 3, nombre: "Conferencia" },
      { id: 4, nombre: "Fiesta de 15" }
    ];

    const extrasData = [
      { id: 1, nombre: "Catering" },
      { id: 2, nombre: "DJ" },
      { id: 3, nombre: "Fotografía" },
      { id: 4, nombre: "Decoración" }
    ];

    function cargarOpciones(select, data) {
      select.innerHTML = `<option value="">Selecciona una opción</option>`;
      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.nombre;
        option.textContent = item.nombre;
        select.appendChild(option);
      });
    }

    cargarOpciones(tipoEventoSelect, eventosData);
    cargarOpciones(extrasSelect, extrasData);
  }
});
