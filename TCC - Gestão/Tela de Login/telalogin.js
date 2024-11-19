const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Usuário e senha fixos para exemplo
    const usuarioValido = 'admin';
    const senhaValida = '123456';

    if (username === usuarioValido && password === senhaValida) {
        // Redireciona para a página principal
        window.location.href = 'http://127.0.0.1:5500/Tela%20de%20Listagem/teladelistagem.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }

});

const messageDiv = document.createElement('div');
messageDiv.id = 'message';
document.body.appendChild(messageDiv);

// No seu código de validação
if (username === usuarioValido && password === senhaValida) {
    messageDiv.textContent = 'Login bem-sucedido!';
    messageDiv.style.color = 'green';
    localStorage.setItem('autenticado', 'true');
    window.location.href = 'index.html';
} else {
    messageDiv.textContent = 'Usuário ou senha inválidos!';
    messageDiv.style.color = 'red';
}



