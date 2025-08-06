const form = document.getElementById('reservaForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      Swal.fire('¡Gracias!', 'Tu reserva fue enviada con éxito.', 'success');
      form.reset();
    } else {
      Swal.fire('Error', 'Hubo un problema al enviar tu reserva.', 'error');
    }
  } catch (error) {
    Swal.fire('Error', 'Hubo un problema al enviar tu reserva.', 'error');
  }
});
