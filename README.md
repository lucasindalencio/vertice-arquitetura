# Vértice Arquitetura — Site Institucional

## 📌 Nome do projeto
**Vértice Arquitetura** — Site institucional (Single Page) para um escritório fictício de arquitetura e design de interiores.

## 🎯 Objetivo
Desenvolver um site institucional utilizando **apenas HTML semântico, CSS e Javascript puro (Vanilla)**, aplicando na prática os conceitos estudados em aula: estruturação de páginas, manipulação do DOM, tratamento de eventos do navegador, organização de código Javascript e validação de formulários. O projeto foi desenvolvido como avaliação prática da disciplina de Desenvolvimento Web.

## 🛠️ Tecnologias utilizadas
- **HTML5** — estruturação semântica do conteúdo (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
- **CSS3** — estilização, layout responsivo (Flexbox e Grid), variáveis CSS e media queries.
- **Javascript (Vanilla)** — manipulação do DOM, eventos do navegador e validação de formulário.

> Não foi utilizado nenhum framework ou biblioteca (sem React, Angular, Vue, Bootstrap ou jQuery), conforme exigido pela atividade.

## 🗂️ Estrutura das seções
O site foi construído no formato **Single Page** (uma única página HTML), com navegação por âncoras entre 4 seções principais:

1. **Início (`#inicio`)** — Seção de destaque (hero) com a apresentação da empresa e chamada para ação.
2. **Sobre (`#sobre`)** — História da empresa, missão, visão, valores e números (contador animado).
3. **Serviços (`#servicos`)** — Cards com os principais serviços oferecidos pelo escritório.
4. **Contato (`#contato`)** — Formulário de contato com validação e informações da empresa.

## ⚙️ Funcionalidades implementadas
- **Menu responsivo (mobile)**: menu "hambúrguer" que abre/fecha via Javascript em telas pequenas (evento `click`).
- **Navegação por âncoras**: rolagem suave (`scroll-behavior: smooth`) entre as seções.
- **Menu ativo dinâmico**: o link do menu correspondente à seção visível é destacado automaticamente conforme o usuário rola a página (evento `scroll`).
- **Contador animado**: os números da seção "Sobre" são animados via Javascript quando entram na tela (`setInterval`).
- **Botão "voltar ao topo"**: aparece após certa rolagem da página e leva o usuário de volta ao início com um clique.
- **Validação em tempo real**: cada campo do formulário é validado assim que o usuário sai dele (evento `blur`), além da validação completa no envio.
- **Formulário de contato com validação em Javascript**:
  - Verifica se os campos obrigatórios (Nome, E-mail e Mensagem) foram preenchidos e têm tamanho mínimo;
  - Valida o formato do e-mail digitado com expressão regular;
  - Exibe mensagens de erro específicas para cada campo inválido, destacando visualmente o campo com problema;
  - Usa `event.preventDefault()` para impedir o recarregamento da página ao enviar o formulário;
  - **Simula o envio dos dados para um banco de dados**: ao ser validado, o formulário gera um registro (objeto com nome, e-mail, telefone, mensagem, data e um número de protocolo) e o adiciona a um array (`bancoDeDadosContatos`), que representa uma tabela em memória. O registro salvo também é exibido no console do navegador, simulando o retorno de uma gravação real;
  - Após o "salvamento", uma mensagem de sucesso é exibida na tela para o usuário, com o número de protocolo gerado, e o formulário é limpo automaticamente.
- **Design responsivo**: o layout se adapta a celulares, tablets e desktops por meio de media queries.

## ✅ Como o projeto atende aos requisitos técnicos da disciplina
| Requisito | Onde está implementado |
|---|---|
| Estruturação semântica com HTML | `index.html` — uso de `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` |
| Utilização de CSS para estilização | `css/style.css` — variáveis, Flexbox, Grid, media queries |
| Manipulação de elementos via Javascript | `js/script.js` — `classList`, `textContent`, `createElement`, `appendChild`, `setAttribute` |
| Tratamento de eventos do navegador | `click`, `submit`, `scroll`, `blur`, `input`, `load` |
| Organização adequada do código Javascript | Arquivo dividido em blocos numerados e comentados por funcionalidade |
| Formulário de contato com validação dos campos | Bloco 5 do `script.js` — validação de campos obrigatórios, tamanho mínimo e formato de e-mail |
| Mensagem de sucesso simulando envio a um banco de dados | Função `simulaEnvioFormulario()` — gera um registro, salva no array `bancoDeDadosContatos` e exibe mensagem de sucesso com protocolo |

## 👤 Integrantes
- [SEU NOME AQUI]

## 🔗 Links
- **Repositório no GitHub:** [LINK AQUI]
- **Site publicado (GitHub Pages):** [LINK AQUI]
- **Vídeo de apresentação (YouTube):** [LINK AQUI]

## 📁 Estrutura de arquivos
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```
