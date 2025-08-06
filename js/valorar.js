const form = document.getElementById("valoracionForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      Swal.fire("¡Gracias!", "Tu valoración fue enviada correctamente.", "success");
      form.reset();
    } else {
      Swal.fire("Error", "Ocurrió un error al enviar tu valoración.", "error");
    }
  } catch (error) {
    Swal.fire("Error", "No se pudo conectar con el servidor.", "error");
  }
});
