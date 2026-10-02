# J Tech Store

Loja virtual de eletrônicos (demonstração) — catálogo por categoria, carrinho de compras funcional e formulário de contato validado, construídos com HTML, CSS e JavaScript puro, sem frameworks.


## Funcionalidades

- 🛒 **Carrinho de compras funcional** — adiciona, remove e limpa itens, com total calculado em tempo real e persistência via `localStorage`
- 📦 **Catálogo por categoria** — celulares, notebooks e fones, com navegação por âncoras
- ✉️ **Formulário de contato** com validação de campos e mensagem de confirmação
- 🎯 **Navegação ativa** — o menu destaca automaticamente a página atual
- 📱 **Totalmente responsivo** — adaptado para mobile, tablet e desktop
- ♿ **Acessível** — estados de foco visíveis, `aria-live` no feedback do formulário, `prefers-reduced-motion` respeitado

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, animações)
- JavaScript vanilla (sem dependências ou build step)

## Estrutura do projeto

```
jtech-store-ecommerce/
├── loja.html        → Página inicial
├── produtos.html    → Catálogo completo
├── fale.html        → Formulário de contato
├── site.css         → Estilos do site
└── js/
    └── app.js       → Lógica do carrinho, menu ativo e formulário
```

## Como rodar localmente

Não precisa de instalação nem build — é só abrir o `loja.html` no navegador, ou usar uma extensão como o **Live Server** no VS Code para recarregamento automático.

## Sobre o projeto

Este é um projeto de demonstração desenvolvido por João Moglia, através da **Nexus Frost**, estúdio de criação de sites sob medida.
