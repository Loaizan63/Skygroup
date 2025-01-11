// Función para comprobar si ya se ha confirmado la edad
function checkAgeConfirmation() {
    const ageConfirmed = localStorage.getItem('ageConfirmed');
    
    if (ageConfirmed === 'true') {
        // Si ya se ha confirmado la edad, no mostrar el modal
        document.getElementById('ageConfirmationModal').style.display = 'none';
        document.body.classList.remove('body-blur'); // Asegura que el blur se elimine si ya fue confirmado
    } else {
        // Si no se ha confirmado la edad, mostrar el modal
        document.getElementById('ageConfirmationModal').style.display = 'flex';
        document.body.classList.add('body-blur'); // Aplicar el blur en el resto de la página
    }
}

// Función para manejar el clic en el botón "Aceptar"
function acceptAgeConfirmation() {
    // Guardar en localStorage que el usuario ya ha confirmado su edad
    localStorage.setItem('ageConfirmed', 'true');
    
    // Cerrar el modal
    document.getElementById('ageConfirmationModal').style.display = 'none';
    
    // Eliminar el blur en el resto de la página
    document.body.classList.remove('body-blur');
}

// Función para manejar el clic en el botón "Rechazar"
function declineAgeConfirmation() {
    // Redirigir a otra página si el usuario no acepta
    window.location.href = "https://www.google.com"; // Puedes cambiar esta URL a la página que prefieras
}

// Asignar eventos a los botones del modal
document.getElementById('acceptButton').addEventListener('click', acceptAgeConfirmation);
document.getElementById('declineButton').addEventListener('click', declineAgeConfirmation);

// Verificar si el usuario ya ha confirmado la edad cuando se carga la página
window.onload = checkAgeConfirmation;
