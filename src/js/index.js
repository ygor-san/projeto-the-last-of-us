/* 
  OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 

  - passo 1 - dar um jeito de pegar o elemento HTML dos botões 

  - passo 2 - dar um jeito de identificar o clique do usuario no botão 

  - passo 3 - desmarcar o botão selecionado anterior

  - passo 4 - marcar o botão  clicando como se estivesse selecionada

  - passo 5 - esconder a imagem de fundo anterior

  - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuario no botão 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);

        //passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //passo 4 - marcar o botão  clicando como se estivesse selecionada
        selecionarBotaoCarrossel(botao);

        //passo 5 - esconder a imagem de fundo anterior
        esconderImagemAtiva();

        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        newFunction(indice);
    })
})

function newFunction(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
