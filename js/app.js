const form = document.getElementById("cotizadorForm");
const resultado = document.getElementById("resultado");
const resumenCotizacion = document.getElementById("resumenCotizacion");
const guardarBtn = document.getElementById("guardarBtn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tipo = document.getElementById("tipoEvento").value;
    const personas = parseInt(document.getElementById("personas").value);
    const fecha = document.getElementById("fecha").value;
    const serviciosSeleccionados = Array.from(form.querySelectorAll("input[type='checkbox']:checked")).map(i => i.value);

    if (!tipo || !personas || !fecha) {
        Swal.fire("Completa todos los campos", "", "warning");
        return;
    }

    const evento = eventos[tipo];
    const costoBase = evento.precioPorPersona * personas;

    let extras = [];
    let costoExtras = 0;

    serviciosSeleccionados.forEach(id => {
        const servicio = servicios.find(s => s.id === id);
        if (servicio) {
            extras.push(servicio.nombre);
            costoExtras += servicio.precioBase;
        }
    });

    const total = costoBase + costoExtras;

    resumenCotizacion.innerHTML = `
        <p><strong>Tipo de evento:</strong> ${evento.nombre}</p>
        <p><strong>Cantidad de personas:</strong> ${personas}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Servicios extra:</strong> ${extras.length ? extras.join(", ") : "Ninguno"}</p>
        <p><strong>Total estimado:</strong> $${total}</p>
    `;

    resultado.classList.remove("oculto");

    guardarBtn.onclick = () => {
        const cotizacion = {
            tipo: evento.nombre,
            personas,
            fecha,
            extras,
            total
        };
        localStorage.setItem("ultimaCotizacion", JSON.stringify(cotizacion));
        Swal.fire("Cotización guardada", "Puedes consultarla más tarde", "success");
    };
});
