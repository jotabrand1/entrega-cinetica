# Torra Miúda

Site institucional de uma torrefação de café fictícia, feito com **HTML, CSS e JavaScript puro** (sem frameworks) como exercício de estrutura de página, responsividade e publicação no GitHub Pages.

🔗 **Site publicado:** https://jotabrand1.github.io/entrega-cinetica/

## Seções

| Seção | O que mostra |
| --- | --- |
| **Hero** | Título, subtítulo, botão de chamada para ação e uma escala de torra (clara, média, escura) feita só com CSS |
| **O que fazemos** | Os três serviços: grãos avulsos, assinatura mensal e oficina de preparo |
| **Contato** | Formulário com nome, e-mail e mensagem |

## Tecnologias

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`)
- CSS3 puro: variáveis (`:root`), Flexbox, Grid e media queries
- Fontes do Google Fonts: Bricolage Grotesque e Instrument Sans (com fontes de reserva do sistema)

## Estrutura do projeto

```
.
├── index.html   # estrutura da página
├── style.css    # estilos e responsividade
├── script.js    # menu mobile e envio do formulário
└── README.md    # este arquivo
```

## Responsividade

O layout se adapta a três faixas de largura:

- **Acima de 900px:** hero e contato em duas colunas, serviços em três colunas.
- **Até 900px:** tudo em uma coluna.
- **Até 480px:** botões ocupam a largura toda e a barra de torra fica mais baixa.

Para testar, abra o DevTools (`F12`), clique no ícone de celular e troque entre os tamanhos de tela.

## Acessibilidade

- Cada campo do formulário tem um `<label>` ligado ao seu `id`.
- O foco do teclado fica visível em links, botões e campos.
- A rolagem suave é desativada para quem usa `prefers-reduced-motion`.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   ```
2. Entre na pasta:
   ```bash
   cd NOME-DO-REPOSITORIO
   ```
3. Abra o `index.html` no navegador (clique duas vezes no arquivo).

Não precisa instalar nada.

## Publicação no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
4. Aguarde cerca de um minuto e acesse o link gerado.

## Menu e formulário

- Em telas de até 600 px, o botão de menu abre e fecha a navegação. Também é possível fechar com a tecla Esc ou ao escolher um link.
- O formulário valida nome, e-mail e mensagem no navegador e envia os dados por `fetch` com POST.
- Para conectar o formulário, preencha o atributo `data-webhook-url` do formulário em `index.html` com a URL do webhook. O atributo está vazio até a automação da próxima etapa estar disponível; enquanto isso, a página informa que o envio ainda não foi conectado.
- O endpoint precisa aceitar requisições do domínio do GitHub Pages (CORS). Nenhuma URL de teste foi configurada para evitar encaminhar mensagens a um destino de terceiros.
- Após uma resposta bem-sucedida do endpoint, a página confirma o envio e limpa os campos; em caso de erro, mantém os dados e permite tentar novamente.

A Torra Miúda é um negócio fictício, criado só para este exercício.

## Autor

João Paulo Brandão
