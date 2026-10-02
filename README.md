# 🛒 J Tech Store

Site estático (HTML, CSS e JavaScript puro) de uma loja fictícia de eletrônicos, desenvolvido como projeto de estudo de front-end.

## 🔗 Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `loja.html` | Apresentação da loja, categorias, produtos em destaque e vídeo institucional |
| Produtos | `produtos.html` | Listagem de produtos por categoria |
| Contato | `fale.html` | Formulário de contato com validação em JavaScript |

## 🛠️ Tecnologias

- **HTML5** semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** com variáveis (`:root`), Flexbox e Media Queries (responsivo para tablet e celular)
- **JavaScript** puro (`js/app.js`), sem frameworks nem bibliotecas

## ✨ Funcionalidades

- Layout 100% responsivo (desktop, tablet e celular)
- Menu de navegação que destaca automaticamente a página atual
- Ano do rodapé atualizado automaticamente via JavaScript
- Validação e mensagem de feedback no formulário de contato
- Produtos e categorias com links diretos para cada item do catálogo
- Carrinho lateral com quantidade, total, remoção de itens e persistência no navegador
- Acessibilidade: contraste, `alt` em imagens e destaque de foco no teclado

## 📁 Estrutura de pastas

```
├── loja.html
├── produtos.html
├── fale.html
├── site.css
├── js/
│   └── app.js
├── img/
│   ├── logo.png
│   └── fundo1.png
└── README.md
```

> ⚠️ As imagens `img/logo.png` e `img/fundo1.png` precisam estar dentro da pasta `img/` do repositório para aparecerem corretamente.

## 🚀 Como usar

Basta abrir o arquivo `loja.html` no navegador — não é necessário nenhum servidor ou instalação.

## 📌 Próximos passos (melhorias futuras)

- Conectar o formulário de contato a um serviço real de envio de e-mail (ex.: Formspree, EmailJS)
- Adicionar mais produtos e uma página de detalhes por produto
- Adicionar um favicon

---
Desenvolvido como projeto pessoal de estudo em HTML, CSS e JavaScript.
