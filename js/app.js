document.addEventListener("DOMContentLoaded", () => {
  const tipoEventoSelect = document.getElementById("tipoEvento");
  const extrasSelect = document.getElementById("extras");
  const form = document.getElementById("reservaForm");
  const resultado = document.getElementById("resultado");

  const eventos = [
    { id: "1", nombre: "Cumpleaños", precioPorPersona: 500 },
    { id: "2", nombre: "Casamiento", precioPorPersona: 1000 },
    { id: "3", nombre: "Conferencia", precioPorPersona: 800 },
    { id: "4", nombre: "Fiesta de 15", precioPorPersona: 700 }
  ];

  const servicios = [
    { id: "1", nombre: "Catering", precioBase: 3000 },
    { id: "2", nombre: "DJ", precioBase: 2000 },
    { id: "3", nombre: "Fotografía", precioBase: 1500 },
    { id: "4", nombre: "Decoración", precioBase: 1000 }
  ];

  function cargarOpciones(select, data) {
    select.innerHTML = `<option value="">Selecciona una opción</option>`;
    data.forEach(item => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.nombre;
      select.appendChild(option);
    });
  }

  cargarOpciones(tipoEventoSelect, eventos);
  cargarOpciones(extrasSelect, servicios);

  form.addEventListener("submit", (e) => {
    
    const tipoId = tipoEventoSelect.value;
    const cantidadPersonas = parseInt(document.getElementById("cantidad").value);
    const extrasId = extrasSelect.value;

    if (!tipoId || !cantidadPersonas) {
      e.preventDefault(); 
      Swal.fire("Por favor, completá el tipo de evento y la cantidad de personas.", "", "warning");
      return;
    }

    const eventoSeleccionado = eventos.find(ev => ev.id === tipoId);
    const servicioSeleccionado = servicios.find(s => s.id === extrasId);

    if (!eventoSeleccionado) {
      e.preventDefault();
      Swal.fire("Evento no válido.", "", "error");
      return;
    }

    const costoBase = eventoSeleccionado.precioPorPersona * cantidadPersonas;
    const costoExtras = servicioSeleccionado ? servicioSeleccionado.precioBase : 0;
    const total = costoBase + costoExtras;

    resultado.innerHTML = `
      <h3>Resumen de tu cotización</h3>
      <p><strong>Tipo de evento:</strong> ${eventoSeleccionado.nombre}</p>
      <p><strong>Cantidad de personas:</strong> ${cantidadPersonas}</p>
      <p><strong>Extras:</strong> ${servicioSeleccionado ? servicioSeleccionado.nombre : "Ninguno"}</p>
      <p><strong>Total estimado:</strong> $${total}</p>
    `;
    resultado.classList.remove("oculto");


  });
});
