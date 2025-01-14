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

    // Reiniciar el temporizador de inactividad
    resetInactivityTimer();
}

// Función para manejar el clic en el botón "Rechazar"
function declineAgeConfirmation() {
    // Redirigir a otra página si el usuario no acepta
    window.location.href = "https://www.google.com"; // Puedes cambiar esta URL a la página que prefieras
}

// Función para manejar la inactividad
let inactivityTimer;

function startInactivityTimer() {
    inactivityTimer = setTimeout(() => {
        // Si han pasado 5 minutos sin actividad, vuelve a mostrar la confirmación de edad
        localStorage.removeItem('ageConfirmed'); // Elimina la confirmación de edad para forzar la solicitud
        checkAgeConfirmation(); // Muestra el modal
    }, 5 * 60 * 1000); // 5 minutos en milisegundos
}

// Función para reiniciar el temporizador de inactividad cada vez que hay actividad
function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // Cancela el temporizador anterior
    startInactivityTimer(); // Vuelve a iniciar el temporizador
}

// Asignar eventos a los botones del modal
document.getElementById('acceptButton').addEventListener('click', acceptAgeConfirmation);
document.getElementById('declineButton').addEventListener('click', declineAgeConfirmation);

// Verificar si el usuario ya ha confirmado la edad cuando se carga la página
window.onload = function() {
    checkAgeConfirmation();
    startInactivityTimer(); // Inicia el temporizador de inactividad al cargar la página

    // Asignar eventos para detectar actividad
    document.body.addEventListener('mousemove', resetInactivityTimer);
    document.body.addEventListener('keydown', resetInactivityTimer);
};

// Asignar evento de envío del formulario
employeeForm.addEventListener('submit', handleEmployeeFormSubmit);

