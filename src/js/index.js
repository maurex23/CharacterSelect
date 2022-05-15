/*
OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que:

    - colocar a classe selecionado no persongem que o mouse passa por cima para adcionar animacao nele

    - retirar a classe selecionado do personagem que esta selecionado

OBJATIVO 2 - quando passar o mouse em cima do personagem trocar a imagem e o nome do personagem grande

    - alternar a imgagem do jogador 1
    - alternar o nome do jogador 1
*/

// OBJETIVO 1

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        
        if(idSelecionado === 'octopus') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        //OBJETIVO 2

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`
        
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado
    });
})



