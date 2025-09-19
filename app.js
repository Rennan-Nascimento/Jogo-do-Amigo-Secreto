let amigos = [];

function adicionarAmigo() {
    const inputAmigo =  document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
} 

if (nomeAmigo === '') {
    alert("Por favor, insira um nome.");
    return;
} 

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
       listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo=> {
       listaAmigos.innerHTML += `<li>${amigo}</>;</li>`;
    });
}











