// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-item-form');
    const stockTableBody = document.querySelector('#stock-table tbody');
    
    // Recuperar os itens salvos no localStorage
    const savedItems = JSON.parse(localStorage.getItem('stockItems')) || [];
  
    // Mostrar os itens salvos ao carregar a página
    savedItems.forEach(item => {
      addItemToTable(item);
    });
  
    // Adicionar item ao estoque
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Capturar os valores dos campos
      const itemName = document.getElementById('item-name').value;
      const itemId = document.getElementById('item-id').value;
      const itemQuantity = document.getElementById('item-quantity').value;
      const itemLocation = document.getElementById('item-location').value;
      const itemImageFile = document.getElementById('item-image').files[0];
  
      // Verificar se uma imagem foi escolhida
      if (!itemImageFile) {
        alert('Por favor, adicione uma imagem para o item.');
        return;
      }
  
      // Ler a imagem usando FileReader
      const reader = new FileReader();
      reader.onload = function (e) {
        const itemImage = e.target.result;
  
        // Criar o objeto do item
        const newItem = {
          name: itemName,
          id: itemId,
          quantity: itemQuantity,
          location: itemLocation,
          image: itemImage
        };
  
        // Adicionar o item à tabela
        addItemToTable(newItem);
  
        // Adicionar o item aos itens salvos no localStorage
        savedItems.push(newItem);
        localStorage.setItem('stockItems', JSON.stringify(savedItems));
  
        // Limpar o formulário
        form.reset();
      };
  
      // Ler a imagem como URL de dados
      reader.readAsDataURL(itemImageFile);
    });
  
    // Função para adicionar item à tabela
    function addItemToTable(item) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>${item.id}</td>
        <td>${item.quantity}</td>
        <td>${item.location}</td>
        <td><button class="action-btn" onclick="removeItem(this)">Remover</button></td>
      `;
      stockTableBody.appendChild(row);
    }
  
    // Função para remover item da tabela
    window.removeItem = function(button) {
      const row = button.closest('tr');
      const itemId = row.cells[2].textContent; // Obtém o ID do item da célula
  
      // Remover o item da lista de itens salvos no localStorage
      const updatedItems = savedItems.filter(item => item.id !== itemId);
      localStorage.setItem('stockItems', JSON.stringify(updatedItems));
  
      // Remover a linha da tabela
      row.remove();
    };
  });
  