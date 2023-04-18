const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Por favor, rellene todos los campos.');
  } else {
    console.log(`Nombre: ${name}`);
    console.log(`Correo electrónico: ${email}`);
    console.log(`Asunto: ${subject}`);
    console.log(`Mensaje: ${message}`);
  }
});

const resetBtn = document.querySelector('button[type="reset"]');

resetBtn.addEventListener('click', () => {
  form.reset();
});