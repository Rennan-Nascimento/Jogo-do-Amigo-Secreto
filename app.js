console.log('Arquivo app.js carregado com sucesso!');

let amigos = [];
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
        return;
 }
 // Adicionar ao array
    amigos.push(nomeAmigo);
    
// Atualizar a lista visual
    atualizarListaAmigos();
    
// Limpar o input
    inputAmigo.value = '';
    inputAmigo.focus();
}
// Função para atualizar a lista visual
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
       listaAmigos.innerHTML = ''; 

amigos.forEach(amigo=> {
       listaAmigos.innerHTML += `<li>${amigo}</>;</li>`;
    });
}

function sortearAmigo() {
// Verifica se há amigos dispoiníveis
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!Adicione alguns nomes primeiro.");
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





