const cadastroForm = document.getElementById('cadastroForm');
const listaPecas = document.getElementById('listaPecas');

let pecas = [];

cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;

    const novaPeca = {
        nome: nome,
        quantidade: parseInt(quantidade)
    };

    pecas.push(novaPeca);
    atualizarLista();
    cadastroForm.reset();
});

function atualizarLista() {
    listaPecas.innerHTML = '';
    pecas.forEach((peca, index) => {
        const li = document.createElement('li');
        li.textContent = `${peca.nome} - Quantidade: ${peca.quantidade}`;
        listaPecas.appendChild(li);
    });
}