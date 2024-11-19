// Função para adicionar uma nova especificação à tabela
function addSpecification() {
    const tableBody = document.getElementById('specifications-body');
    const newRow = document.createElement('tr');
    
    // Criação das células para especificação e valor
    newRow.innerHTML = `
        <td><input type="text" name="spec-name[]" placeholder="Especificação" required></td>
        <td><input type="text" name="spec-value[]" placeholder="Valor" required></td>
        <td><button type="button" onclick="removeSpecification(this)">Remover</button></td>
    `;
    
    // Adiciona a nova linha à tabela
    tableBody.appendChild(newRow);
}

// Função para remover uma especificação da tabela
function removeSpecification(button) {
    const row = button.closest('tr');
    row.remove();
}

// Função para salvar os dados do produto
function saveProduct() {
    // Obtém os dados do formulário
    const productName = document.getElementById('product-name').value;
    const productId = document.getElementById('product-id').value;
    const companySeller = document.getElementById('company-seller').value;
    const productStatus = document.getElementById('product-status').value;
    const userResponsible = document.getElementById('user-responsible').value;

    // Obtém as especificações
    const specificationNames = Array.from(document.querySelectorAll('[name="spec-name[]"]'))
        .map(input => input.value);
    const specificationValues = Array.from(document.querySelectorAll('[name="spec-value[]"]'))
        .map(input => input.value);

    // Validação básica (caso algum campo obrigatório esteja vazio)
    if (!productName || !productId || !companySeller || !productStatus) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibe os dados salvos na tela
    document.getElementById('saved-name').textContent = productName;
    document.getElementById('saved-id').textContent = productId;
    document.getElementById('saved-seller').textContent = companySeller;
    document.getElementById('saved-status').textContent = productStatus;
    document.getElementById('saved-responsible').textContent = userResponsible;

    // Exibe as especificações na tela
    const savedSpecifications = specificationNames.map((name, index) => {
        return `${name}: ${specificationValues[index]}`;
    }).join(', ');
    document.getElementById('saved-specifications').textContent = savedSpecifications;

    // Mostra a seção de dados salvos
    document.getElementById('saved-data').style.display = 'block';

    // Esconde o formulário de cadastro
    document.getElementById('product-form').reset();
}

// Função para adicionar mais produtos
function addMore() {
    // Limpa os campos do formulário para adicionar um novo produto
    document.getElementById('product-form').reset();
    document.getElementById('saved-data').style.display = 'none';
    document.getElementById('product-list').style.display = 'none';
}

// Função para listar os produtos cadastrados
function listProduct(product) {
    const productList = document.getElementById('product-list-items');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${product.name}</strong> (ID: ${product.id}) 
        - <button onclick="viewProductDetails('${product.id}')">Ver Detalhes</button>
    `;
    productList.appendChild(listItem);
    document.getElementById('product-list').style.display = 'block';
}

// Função para exibir os detalhes do produto em um modal
function viewProductDetails(productId) {
    const productDetailsModal = document.getElementById('product-details-modal');
    const productDetails = document.getElementById('product-details');
    
    // Simulação de dados de produto (pode ser adaptado para pegar dados reais)
    const product = {
        name: 'Produto Exemplo',
        id: productId,
        company: 'Empresa Exemplo',
        specifications: ['Peso: 20kg', 'Cor: Vermelho'],
        status: 'Em Falta'
    };

    // Preenche os detalhes no modal
    productDetails.innerHTML = `
        <p><strong>Nome:</strong> ${product.name}</p>
        <p><strong>ID:</strong> ${product.id}</p>
        <p><strong>Empresa:</strong> ${product.company}</p>
        <p><strong>Especificações:</strong> ${product.specifications.join(', ')}</p>
        <p><strong>Status:</strong> ${product.status}</p>
    `;

    // Exibe o modal
    productDetailsModal.style.display = 'flex';
}

// Função para fechar o modal de detalhes
function closeModal() {
    document.getElementById('product-details-modal').style.display = 'none';
}

// Adicionar funcionalidade de listar produtos ao carregar
window.onload = function() {
    // Exemplo de lista de produtos cadastrados (pode ser adaptado conforme necessário)
    const exampleProducts = [
        { id: '12345', name: 'Produto 1' },
        { id: '67890', name: 'Produto 2' }
    ];

    exampleProducts.forEach(product => listProduct(product));
}
