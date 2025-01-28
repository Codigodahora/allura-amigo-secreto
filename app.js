// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um nome ao array e exibir na lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);

        // Atualizar a lista visualmente
        const lista = document.getElementById("listaAmigos");
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);

        // Limpar o campo de input
        input.value = "";
        input.focus();
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

// Função para sortear um nome do array
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibir o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>Amigo sorteado:</strong> ${sorteado}</li>`;
}
