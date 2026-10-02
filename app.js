/* ==========================================================================
   J TECH STORE — app.js
   Este arquivo substitui os antigos <script> com document.write() que
   existiam soltos em cada página. Ele é carregado 1x em cada HTML com
   <script src="js/app.js" defer></script>.

   O que ele faz:
   1) Atualiza automaticamente o ano do rodapé (© 2026 -> ano atual sempre).
   2) Marca o link do menu (nav) referente à página atual com a classe
      "ativo" (usada no site.css para destacar visualmente onde o usuário está).
   3) Valida e dá feedback visual no formulário de contato (fale.html),
      já que o formulário não tem um servidor por trás para processá-lo.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    atualizarAnoRodape();
    marcarLinkAtivoDoMenu();
    configurarFormularioDeContato();
    configurarCarrinho();
});

/**
 * 1) Coloca o ano atual em qualquer elemento com id="ano-atual".
 * Assim o "© 2026 J Tech Store" nunca fica desatualizado.
 */
function atualizarAnoRodape() {
    var elementoAno = document.getElementById("ano-atual");
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }
}

/**
 * 2) Compara a URL atual com o href de cada link do menu e adiciona a
 * classe "ativo" no link correspondente, melhorando a orientação do usuário.
 */
function marcarLinkAtivoDoMenu() {
    var linksDoMenu = document.querySelectorAll("nav a");
    var paginaAtual = window.location.pathname.split("/").pop() || "loja.html";

    linksDoMenu.forEach(function (link) {
        var destino = link.getAttribute("href");
        if (destino === paginaAtual) {
            link.classList.add("ativo");
            link.setAttribute("aria-current", "page");
        }
    });
}

/**
 * 3) Intercepta o envio do formulário de contato (se existir na página),
 * evita o recarregamento da página e mostra uma mensagem de confirmação.
 *
 * IMPORTANTE: como este é um site estático (sem back-end), o formulário
 * ainda NÃO envia e-mail de verdade. Para isso funcionar de verdade,
 * é necessário ligar o "action" do formulário a um serviço como
 * Formspree, EmailJS, Google Forms ou a um back-end próprio.
 */
function configurarFormularioDeContato() {
    var formulario = document.querySelector("form");
    if (!formulario) return;

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var mensagem = document.getElementById("msg");

        if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
            exibirMensagem(formulario, "Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        exibirMensagem(
            formulario,
            "Obrigado, " + nome.value.trim() + "! Sua mensagem foi registrada. Em breve entraremos em contato."
        );
        formulario.reset();
    });
}

/**
 * Mostra (ou reaproveita) uma caixa de feedback logo abaixo do formulário.
 */
function exibirMensagem(formulario, texto) {
    var caixaFeedback = formulario.querySelector(".mensagem-feedback");

    if (!caixaFeedback) {
        caixaFeedback = document.createElement("p");
        caixaFeedback.className = "mensagem-feedback";
        caixaFeedback.setAttribute("role", "status");
        caixaFeedback.setAttribute("aria-live", "polite");
        formulario.appendChild(caixaFeedback);
    }

    caixaFeedback.textContent = texto;
}

function configurarCarrinho() {
    var itens = JSON.parse(localStorage.getItem("jtech-carrinho") || "[]");
    var painel = document.createElement("aside");
    painel.className = "painel-carrinho";
    painel.setAttribute("aria-label", "Carrinho de compras");
    painel.innerHTML = "<div class=\"carrinho-cabecalho\"><h2>Seu carrinho</h2><button type=\"button\" class=\"carrinho-fechar\" data-fechar-carrinho aria-label=\"Fechar carrinho\">&times;</button></div><div class=\"carrinho-itens\"></div><div class=\"carrinho-rodape\"><strong>Total <span class=\"carrinho-total\">R$ 0,00</span></strong><button type=\"button\" class=\"botao-limpar-carrinho\" data-limpar-carrinho>Limpar carrinho</button></div>";
    document.body.appendChild(painel);

    function salvar() {
        localStorage.setItem("jtech-carrinho", JSON.stringify(itens));
    }

    function atualizarPainel() {
        var lista = painel.querySelector(".carrinho-itens");
        var total = itens.reduce(function (soma, item) { return soma + item.preco * item.quantidade; }, 0);
        var quantidade = itens.reduce(function (soma, item) { return soma + item.quantidade; }, 0);
        lista.innerHTML = itens.length ? itens.map(function (item, indice) {
            return "<div class=\"carrinho-item\"><span>" + item.nome + " <small>x" + item.quantidade + "</small></span><button type=\"button\" data-remover-item=\"" + indice + " aria-label=\"Remover " + item.nome + "\">Remover</button></div>";
        }).join("") : "<p class=\"carrinho-vazio\">Seu carrinho está vazio.</p>";
        document.querySelectorAll(".carrinho-contagem").forEach(function (contador) { contador.textContent = quantidade; });
        painel.querySelector(".carrinho-total").textContent = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

    document.addEventListener("click", function (evento) {
        var adicionar = evento.target.closest("[data-adicionar-carrinho]");
        var abrir = evento.target.closest("[data-abrir-carrinho]");
        var remover = evento.target.closest("[data-remover-item]");
        if (adicionar) {
            var produto = adicionar.closest(".produto");
            var existente = itens.find(function (item) { return item.nome === produto.dataset.produto; });
            if (existente) existente.quantidade += 1;
            else itens.push({ nome: produto.dataset.produto, preco: Number(produto.dataset.preco), quantidade: 1 });
            salvar();
            atualizarPainel();
            painel.classList.add("aberto");
        }
        if (abrir) painel.classList.add("aberto");
        if (evento.target.closest("[data-fechar-carrinho]")) painel.classList.remove("aberto");
        if (remover) {
            itens.splice(Number(remover.dataset.removerItem), 1);
            salvar();
            atualizarPainel();
        }
        if (evento.target.closest("[data-limpar-carrinho]")) {
            itens = [];
            salvar();
            atualizarPainel();
        }
    });

    atualizarPainel();
}
