// Mostrar el modal de confirmación de edad al cargar la página
window.onload = function() {
    const modal = document.getElementById('ageConfirmationModal');
    const acceptButton = document.getElementById('acceptButton');
    const declineButton = document.getElementById('declineButton');
    const body = document.body;

    // Mostrar el modal
    modal.style.display = "flex";

    // Aplicar el efecto de desenfoque en todo el contenido de la página, EXCEPTO el modal
    body.classList.add('body-blur');

    // Si el usuario acepta
    acceptButton.onclick = function() {
        modal.style.display = "none"; // Cierra el modal
        body.classList.remove('body-blur'); // Elimina el desenfoque
        alert("Bienvenido a Sky Models. ¡Disfruta explorando nuestra página!");
    };

    // Si el usuario rechaza
    declineButton.onclick = function() {
        modal.style.display = "none"; // Cierra el modal
        body.classList.remove('body-blur'); // Elimina el desenfoque
        alert("Lamentablemente, necesitas ser mayor de 18 años para acceder a este sitio.");
        window.location.href = "https://www.google.com"; // Redirige a otra página si no es mayor de 18
    };
};

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    // Aquí podrías agregar lógica para enviar el formulario al backend si es necesario
    document.getElementById('contactForm').reset(); // Resetea el formulario después de enviarlo
});
