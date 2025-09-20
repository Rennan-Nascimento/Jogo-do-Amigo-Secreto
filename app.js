// Lista/array para os nomes dos amigos
let amigos = [];

// Função para limpar o campo de input
function limparCampo() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.value = "";
}
// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo =  document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
 
// Validação básica
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.');
        return;
}  
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        limparCampo();
        return;
 }
 // Adicionar ao array
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    limparCampo();

// Habilitar/desabilitar botão de sortear
    atualizarBotoes();    
 
}
// Função para atualizar a lista visual
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
       listaAmigos.innerHTML = ''; 

amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${amigo}
            <span class="remover" onclick="removerAmigo(${index})">✕</span>
        `;
        listaAmigos.appendChild(li);
    });
}
// Função para remover amigo
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
    atualizarBotoes();
}
// Função para atualizar estado dos botões
function atualizarBotoes() {
    const sortearBtn = document.getElementById('sortearBtn');
    const errorMessage = document.getElementById('errorMessage');
    
    if (amigos.length >= 3) {
        sortearBtn.disabled = false;
        errorMessage.style.display = 'none';
    } else {
        sortearBtn.disabled = true;
        if (amigos.length > 0) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    }
}

function sortearAmigo() {
    // Verifica se há amigos disponíveis
    if (amigos.length < 3) {
        alert("É necessário pelo menos 3 amigos para sortear! Adicione mais nomes.");
        return;
    }

// Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

// Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

 // Mostrar o resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = ""; 
    alert("jogo Reiniciado! Adicione novos amigos.");
}
// Permitir adicionar com a tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    if (inputAmigo) {
        inputAmigo.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                adicionarAmigo();
            }
        });
    }
});


