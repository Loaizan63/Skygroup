document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const customer = customers.find(customer => customer.email === email && customer.password === password);

    if (customer) {
      alert(`Login exitoso. Bienvenido/a, ${customer.username}!`);
      localStorage.setItem('username', customer.username);
      window.location.href = 'home.html';
    } else {
      alert('Correo electrónico o contraseña incorrecta.');
    }
  })
  