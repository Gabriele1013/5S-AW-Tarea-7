function switchForm(formType) {
    if (formType === 'login') {
        document.getElementById('loginContainer').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    } else if (formType === 'register') {
        document.getElementById('loginContainer').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }
}

function registerUser() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let career = document.getElementById('career').value;
    let graduationYear = document.getElementById('graduationYear').value;

    // Simulación de registro exitoso
    if (fullName && email && password && confirmPassword && career && graduationYear) {
        alert('¡Usuario registrado exitosamente!'); // Puedes reemplazar esto por un mensaje más elaborado o un elemento HTML para mostrar el mensaje
    } else {
        alert('Por favor complete todos los campos para registrarse.'); // Puedes personalizar este mensaje según tus necesidades
    }
}

function loginUser() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;
}
