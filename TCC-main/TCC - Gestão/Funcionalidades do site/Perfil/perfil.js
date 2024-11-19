// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Botão para voltar à página inicial
    const goBackButton = document.getElementById('go-back');
    goBackButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html'; // Substitua 'index.html' pelo caminho correto.
    });
  
  });
  

document.addEventListener('DOMContentLoaded', () => {
    // Carregar e salvar foto de perfil
    const photoUpload = document.getElementById('photo-upload');
    const userPhoto = document.getElementById('user-photo');
    const saveInfoButton = document.getElementById('save-info');
    const savePasswordButton = document.getElementById('save-password');
  
    // Inicializar informações do usuário
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const idInput = document.getElementById('user-id');
    
    // Carregar dados persistidos
    const loadUserData = () => {
      const savedPhoto = localStorage.getItem('profilePhoto');
      const savedName = localStorage.getItem('userName');
      const savedEmail = localStorage.getItem('userEmail');
      const savedId = localStorage.getItem('userId');
  
      if (savedPhoto) userPhoto.src = savedPhoto;
      if (savedName) nameInput.value = savedName;
      if (savedEmail) emailInput.value = savedEmail;
      if (savedId) idInput.value = savedId;
    };
  
    loadUserData();
  
    // Atualizar foto de perfil
    photoUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          userPhoto.src = reader.result;
          localStorage.setItem('profilePhoto', reader.result);
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Salvar informações
    saveInfoButton.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const id = idInput.value.trim();
  
      if (name && email && id) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', id);
        alert('Informações salvas com sucesso!');
      } else {
        alert('Por favor, preencha todos os campos antes de salvar.');
      }
    });
  
    // Salvar nova senha
    savePasswordButton.addEventListener('click', () => {
      const newPassword = document.getElementById('new-password').value.trim();
      if (newPassword.length >= 6) {
        alert('Senha alterada com sucesso!');
        document.getElementById('new-password').value = '';
      } else {
        alert('A senha deve ter pelo menos 6 caracteres.');
      }
    });
  
    // Chat interno para múltiplos usuários
    const chatBox = document.getElementById('chat-box');
    const chatUsername = document.getElementById('chat-username');
    const chatMessage = document.getElementById('chat-message');
    const sendMessage = document.getElementById('send-message');
  
    sendMessage.addEventListener('click', () => {
      const username = chatUsername.value.trim();
      const message = chatMessage.value.trim();
  
      if (username && message) {
        const userMsg = document.createElement('p');
        userMsg.textContent = `${username}: ${message}`;
        chatBox.appendChild(userMsg);
        chatMessage.value = '';
  
        // Simular resposta automática
        setTimeout(() => {
          const botMsg = document.createElement('p');
          botMsg.textContent = 'Outro usuário: Resposta automática!';
          botMsg.style.backgroundColor = '#e6f2ff';
          chatBox.appendChild(botMsg);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
      } else {
        alert('Preencha o nome e a mensagem antes de enviar.');
      }
    });
  });
  