const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  esconderCartaoSelecionado();

  cartaoAtual++;

  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) {
    return;
  }

  esconderCartaoSelecionado();

  cartaoAtual--;

  mostrarCartao();
});

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");

  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}
