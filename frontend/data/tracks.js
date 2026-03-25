export const tracks = [
  {
    id: "html",
    label: "HTML",
    subtitle: "Estrutura, semântica e formulários",
    duration: "1 mês",
    description: "Aprenda a montar páginas bem organizadas, com estrutura correta, conteúdo semantico e formulários simples para a web.",
    accent: "from-[#c79a68] to-[#e5c7a1]",
    accentText: "text-[#f0dbc2]",
    language: "HTML",
    items: [
      {
        id: "html-1",
        title: "1. Estrutura básica de uma página HTML",
        acceptance: "96.4%",
        difficulty: "Easy",
        status: "done",
        summary: "Monte o esqueleto mínimo de um documento com <html>, <head> e <body>.",
        theory:
          "HTML organiza o conteúdo da página e define a base de tudo o que aparece no navegador. Antes de pensar em estilo com CSS ou interatividade com JavaScript, você precisa entender como um documento é montado. Nesta atividade, o foco é reconhecer o papel do <!DOCTYPE html>, da tag <html>, do bloco <head>, onde ficam metadados e título da página, e do <body>, onde o conteúdo visível realmente aparece.",
        code: `<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Minha página</title>\n  </head>\n  <body>\n    <h1>Olá, mundo!</h1>\n  </body>\n</html>`,
        starterCode: `<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Atividade HTML</title>\n  </head>\n  <body>\n    \n  </body>\n</html>`,
        instructions: [
          "Crie a estrutura principal de uma página HTML valida.",
          "Use tags semânticas sempre que possível.",
          "Garanta identação clara para facilitar leitura."
        ]
      },
      {
        id: "html-2",
        title: "2. Títulos, parágrafos e hierarquia",
        acceptance: "90.1%",
        difficulty: "Easy",
        status: "done",
        summary: "Organize informações com <h1> ate <h6> e <p> de forma semântica.",
        theory:
          "Títulos e parágrafos não servem apenas para deixar a página bonita: eles ajudam o leitor a entender a ordem das informações. Uma boa hierarquia melhora leitura, acessibilidade e organização do conteúdo. Nesta atividade, você vai perceber como o <h1> representa o tema principal da página, enquanto subtitulos como <h2> e <h3> dividem o assunto em partes menores. Já o <p> serve para desenvolver a explicacao de forma clara.",
        code: `<section>\n  <h1>Introdução à Programação</h1>\n  <h2>Tipos primitivos</h2>\n  <p>Texto introdutório da aula.</p>\n</section>`,
        starterCode: `<section>\n  <h1></h1>\n  <h2></h2>\n  <p></p>\n</section>`,
        instructions: [
          "Defina um título principal da página.",
          "Crie um subtitulo para a seção da aula.",
          "Escreva um parágrafo introdutório curto."
        ]
      },
      {
        id: "html-3",
        title: "3. Listas e navegação",
        acceptance: "82.7%",
        difficulty: "Easy",
        status: "pending",
        summary: "Crie menus e listas ordenadas para representar trilhas e etapas.",
        theory:
          "Listas são fundamentais na web porque ajudam a representar conjuntos de itens relacionados de forma organizada. Menus, roadmaps, sumários e etapas de estudo costumam ser construídos com listas. Nesta atividade, você vai entender quando usar uma lista não ordenada (<ul>) e por que cada item deve ficar dentro de um <li>. Isso cria uma base importante para menus de navegação e estruturas de trilha como as que aparecem em plataformas de estudo.",
        code: `<nav>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n</nav>`,
        starterCode: `<nav>\n  <ul>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</nav>`,
        instructions: [
          "Monte um menu com pelo menos tres trilhas.",
          "Use lista não ordenada para a navegação.",
          "Mantenha os itens claros e legiveis."
        ]
      },
      {
        id: "html-4",
        title: "4. Links, imagens e mídia",
        acceptance: "74.8%",
        difficulty: "Med.",
        status: "pending",
        summary: "Conecte páginas, ilustre conteúdos e aprenda boas práticas de acessibilidade.",
        theory:
          "Links e imagens tornam a experiência mais rica e navegavel. Um link permite que o usuário avance entre páginas ou seções, enquanto uma imagem ajuda a ilustrar o conteúdo. Mas não basta apenas inserir esses elementos: e importante saber escrever textos de link claros e usar o atributo alt nas imagens para manter a página acessível. Nesta atividade, você vai praticar como tornar a navegação mais intuitiva e o conteúdo mais compreensível.",
        code: `<a href="/curso/html">Abrir trilha HTML</a>\n<img src="/cover.png" alt="Capa da trilha HTML" />`,
        starterCode: `<a href=""></a>\n<img src="" alt="" />`,
        instructions: [
          "Crie um link que leve para uma página do curso.",
          "Adicione uma imagem com atributo alt descritivo.",
          "Use textos claros para orientar o usuário."
        ]
      },
      {
        id: "html-5",
        title: "5. Formularios e entrada de dados",
        acceptance: "68.2%",
        difficulty: "Med.",
        status: "locked",
        summary: "Colete nome, email e respostas do aluno com campos e botões.",
        theory:
          "Formulários são a principal forma de entrada de dados na web. Sempre que um usuário preenche cadastro, faz login ou responde uma atividade, existe um formulário por trás disso. Nesta atividade, você vai entender como <label>, <input> e <button> trabalham juntos para criar uma interface clara e funcional. Também vai perceber que formulários bem estruturados melhoram a experiência do usuário e evitam confusões durante o preenchimento.",
        code: `<form>\n  <label>Nome</label>\n  <input type="text" />\n  <button>Enviar</button>\n</form>`,
        starterCode: `<form>\n  <label></label>\n  <input type="text" />\n  <button>Enviar</button>\n</form>`,
        instructions: [
          "Adicione campos para nome e uma resposta simples.",
          "Associe labels aos inputs do formulário.",
          "Inclua um botão para envio."
        ]
      },
      {
        id: "html-6",
        title: "6. Botoes, ações e chamadas visuais",
        acceptance: "66.7%",
        difficulty: "Med.",
        status: "locked",
        summary: "Estruture botões e ações principais de uma interface educacional.",
        theory:
          "Botões orientam o usuário sobre o que pode ser feito na tela. Em plataformas educacionais, eles aparecem para iniciar atividade, enviar resposta ou voltar para a trilha. Nesta atividade, você vai praticar como montar botões claros, com texto objetivo e posicionamento coerente na estrutura HTML.",
        code: `<div>\n  <button>Comecar atividade</button>\n  <button>Voltar</button>\n</div>`,
        starterCode: `<div>\n  <button></button>\n  <button></button>\n</div>`,
        instructions: [
          "Crie dois botões com ações diferentes.",
          "Use textos curtos e claros nos botões.",
          "Agrupe os controles em uma área da interface."
        ]
      },
      {
        id: "html-7",
        title: "7. Tabelas para organizar dados",
        acceptance: "64.9%",
        difficulty: "Med.",
        status: "locked",
        summary: "Apresente horários, módulos e notas em linhas e colunas.",
        theory:
          "Tabelas são úteis quando você precisa mostrar informações que se relacionam entre si em formato de grade. Horários de aula, comparações e listas de desempenho são exemplos comuns. Nesta atividade, você vai praticar o uso de <table>, <tr>, <th> e <td> para estruturar dados com clareza.",
        code: `<table>\n  <tr>\n    <th>Modulo</th>\n    <th>Status</th>\n  </tr>\n  <tr>\n    <td>HTML</td>\n    <td>Concluído</td>\n  </tr>\n</table>`,
        starterCode: `<table>\n  <tr>\n    <th></th>\n    <th></th>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n</table>`,
        instructions: [
          "Crie uma tabela com cabeçalho e pelo menos uma linha de dados.",
          "Use títulos claros nas colunas.",
          "Organize as informações da trilha de estudo."
        ]
      },
      {
        id: "html-8",
        title: "8. Secoes semanticas da página",
        acceptance: "61.8%",
        difficulty: "Med.",
        status: "locked",
        summary: "Separe cabeçalho, conteúdo principal e rodapé com mais significado.",
        theory:
          "HTML semantico ajuda o navegador, leitores de tela e outros desenvolvedores a entenderem a estrutura da página. Elementos como <header>, <main>, <section>, <article> e <footer> tornam o documento mais claro. Nesta atividade, você vai praticar a divisão do conteúdo em partes com função bem definida.",
        code: `<header>\n  <h1>Mini curso</h1>\n</header>\n<main>\n  <section>Aulas</section>\n</main>\n<footer>Plataforma gratuita</footer>`,
        starterCode: `<header>\n  \n</header>\n<main>\n  \n</main>\n<footer>\n  \n</footer>`,
        instructions: [
          "Use <header>, <main> e <footer> na estrutura da página.",
          "Crie uma seção principal para o conteúdo da aula.",
          "Mantenha a organização semântica e legível."
        ]
      },
      {
        id: "html-9",
        title: "9. Estrutura de um card de atividade",
        acceptance: "57.6%",
        difficulty: "Hard",
        status: "locked",
        summary: "Monte um card com título, descrição, status e botão de ação.",
        theory:
          "Grande parte das interfaces modernas usa cards para agrupar informações relacionadas. Um card bem estruturado ajuda o usuário a identificar rapidamente o que e importante. Nesta atividade, você vai montar a base HTML de um card de atividade com elementos de texto, status e chamada para acao.",
        code: `<article>\n  <h2>Atividade 1</h2>\n  <p>Pratique a estrutura HTML.</p>\n  <button>Comecar</button>\n</article>`,
        starterCode: `<article>\n  <h2></h2>\n  <p></p>\n  <button></button>\n</article>`,
        instructions: [
          "Crie um card com título e descrição curta.",
          "Mostre um status simples da atividade.",
          "Adicione um botão para iniciar a etapa."
        ]
      },
      {
        id: "html-10",
        title: "10. Página final de roadmap HTML",
        acceptance: "52.4%",
        difficulty: "Hard",
        status: "locked",
        summary: "Combine seções, cards e navegação em uma página completa de trilha.",
        theory:
          "Quando você junta vários elementos básicos, começa a construir páginas completas de verdade. Nesta atividade final da trilha HTML, o foco é integrar títulos, seções, botões, listas e cards em uma única página organizada. O objetivo é consolidar o que foi aprendido até aqui.",
        code: `<main>\n  <header>\n    <h1>Roadmap HTML</h1>\n  </header>\n  <section>\n    <article>\n      <h2>Atividade 1</h2>\n      <p>Estrutura básica</p>\n    </article>\n  </section>\n</main>`,
        starterCode: `<main>\n  <header>\n    \n  </header>\n  <section>\n    \n  </section>\n</main>`,
        instructions: [
          "Monte uma página com título principal e área de conteúdo.",
          "Adicione pelo menos um card de atividade.",
          "Organize a estrutura como uma pequena tela de roadmap."
        ]
      }
    ]
  },
  {
    id: "css",
    label: "CSS",
    subtitle: "Layout, cores e responsividade",
    duration: "2 meses",
    description: "Desenvolva a parte visual das interfaces com espaços, alinhamento, estilos, componentes e adaptação entre telas.",
    accent: "from-[#7b8f9d] to-[#b9c7d0]",
    accentText: "text-[#dbe4e8]",
    language: "CSS",
    items: [
      {
        id: "css-1",
        title: "1. Seletores, cores e tipografia",
        acceptance: "88.9%",
        difficulty: "Easy",
        status: "done",
        summary: "Aplique estilos básicos a títulos, textos e botões.",
        theory:
          "CSS controla a apresentação visual da página. Se o HTML organiza a estrutura, o CSS define como essa estrutura será vista pelo usuário. Nesta primeira atividade, o objetivo é entender a lógica básica dos seletores e das propriedades mais comuns, como fonte, cor e aparência de títulos. Ao dominar isso, você começa a transformar uma página simples em algo visualmente mais agradável e legível.",
        code: `body {\n  font-family: sans-serif;\n  color: #111;\n}\n\nh1 {\n  color: #0f172a;\n}`,
        starterCode: `body {\n  font-family: sans-serif;\n}\n\nh1 {\n  \n}`,
        instructions: [
          "Defina uma fonte base para a página.",
          "Escolha uma cor para o texto principal.",
          "Personalize o título principal."
        ]
      },
      {
        id: "css-2",
        title: "2. Box model e espaçamento",
        acceptance: "79.3%",
        difficulty: "Easy",
        status: "pending",
        summary: "Domine `margin`, `padding`, `border` e a ocupação real de cada bloco.",
        theory:
          "Todo elemento em CSS pode ser entendido como uma caixa. Essa caixa tem conteúdo, espaçamento interno (`padding`), borda e espaçamento externo (`margin`). Esse conceito e conhecido como box model e e um dos fundamentos mais importantes para montar layouts. Nesta atividade, você vai aprender como cada parte afeta o tamanho e o posicionamento visual dos blocos na tela.",
        code: `.card {\n  padding: 16px;\n  border: 1px solid #ddd;\n  margin-bottom: 12px;\n}`,
        starterCode: `.card {\n  \n}`,
        instructions: [
          "Crie uma classe `.card` com espaco interno.",
          "Adicione uma borda sutil ao bloco.",
          "Separe os cards com margem inferior."
        ]
      },
      {
        id: "css-3",
        title: "3. Flexbox para alinhamento",
        acceptance: "71.2%",
        difficulty: "Med.",
        status: "pending",
        summary: "Organize linhas, colunas e alinhamentos com menos código.",
        theory:
          "Flexbox foi criado para facilitar o alinhamento de elementos em uma única direção, seja horizontal ou vertical. Ele resolve com poucas linhas problemas que antes exigiam muitos ajustes manuais. Nesta atividade, você vai entender como usar `display: flex`, distribuir espaco entre itens e alinhar conteúdos em barras, listas e pequenos conjuntos de componentes.",
        code: `.toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
        starterCode: `.toolbar {\n  \n}`,
        instructions: [
          "Transforme a barra em um container flexivel.",
          "Distribua espaco entre os elementos.",
          "Alinhe tudo verticalmente no centro."
        ]
      },
      {
        id: "css-4",
        title: "4. Grid para layouts complexos",
        acceptance: "63.5%",
        difficulty: "Med.",
        status: "locked",
        summary: "Monte estruturas de dashboard e seções com linhas e colunas reais.",
        theory:
          "CSS Grid e ideal quando você precisa controlar linhas e colunas ao mesmo tempo. Diferente do Flexbox, que trabalha melhor em uma direção, o Grid permite montar areas mais complexas, como dashboards, painéis e estruturas com várias seções. Nesta atividade, você vai aprender a pensar o layout como uma grade organizada e previsivel.",
        code: `.dashboard {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 24px;\n}`,
        starterCode: `.dashboard {\n  \n}`,
        instructions: [
          "Ative o modo grid no container principal.",
          "Crie duas colunas com proporcoes diferentes.",
          "Defina um espaçamento consistente entre areas."
        ]
      },
      {
        id: "css-5",
        title: "5. Responsividade e media queries",
        acceptance: "58.7%",
        difficulty: "Hard",
        status: "locked",
        summary: "Adapte interfaces para celular, tablet e desktop.",
        theory:
          "Uma interface moderna precisa funcionar bem em telas de tamanhos diferentes. Responsividade e a capacidade de adaptar o layout para celular, tablet e desktop sem perder clareza nem usabilidade. Nesta atividade, você vai entender como as media queries ajudam a alterar o comportamento do layout conforme a largura da tela, deixando a experiência mais consistente.",
        code: `@media (max-width: 768px) {\n  .dashboard {\n    grid-template-columns: 1fr;\n  }\n}`,
        starterCode: `@media (max-width: 768px) {\n  .dashboard {\n    \n  }\n}`,
        instructions: [
          "Crie uma media query para telas menores.",
          "Transforme o layout em uma única coluna.",
          "Revise o comportamento em celulares."
        ]
      },
      {
        id: "css-6",
        title: "6. Espacamento vertical e ritmo visual",
        acceptance: "65.1%",
        difficulty: "Med.",
        status: "locked",
        summary: "Organize a distancia entre seções para melhorar leitura e hierarquia.",
        theory:
          "Nem todo problema visual esta nas cores ou no layout. Muitas vezes, o que torna uma interface confusa e a falta de espaçamento consistente. Nesta atividade, você vai praticar como criar ritmo visual usando margens e paddings para separar blocos de forma harmoniosa.",
        code: `.seção {\n  padding: 24px;\n  margin-bottom: 20px;\n}`,
        starterCode: `.seção {\n  \n}`,
        instructions: [
          "Adicione espaçamento interno a uma seção.",
          "Separe os blocos com margem externa.",
          "Busque uma leitura mais confortavel."
        ]
      },
      {
        id: "css-7",
        title: "7. Estados de botões e interação visual",
        acceptance: "62.4%",
        difficulty: "Med.",
        status: "locked",
        summary: "Destaque hover, foco e estados importantes para o usuário.",
        theory:
          "Interfaces boas não mostram apenas conteúdo: elas respondem ao toque e ao clique do usuário. Estados como `hover`, `focus` e `disabled` ajudam a comunicar o que pode ou não ser feito. Nesta atividade, você vai estilizar botões para deixar a experiência mais clara e intuitiva.",
        code: `.botão {\n  background: #e7c79f;\n}\n\n.botão:hover {\n  opacity: 0.9;\n}`,
        starterCode: `.botão {\n  \n}\n\n.botão:hover {\n  \n}`,
        instructions: [
          "Estilize um botão com cor e contraste visível.",
          "Adicione um efeito de hover.",
          "Pense em como destacar a interação para o usuário."
        ]
      },
      {
        id: "css-8",
        title: "8. Sombras, bordas e profundidade",
        acceptance: "55.9%",
        difficulty: "Med.",
        status: "locked",
        summary: "Crie cards mais elegantes usando contorno, raio e sombra.",
        theory:
          "Detalhes visuais como bordas arredondadas, sombras e contornos ajudam a separar elementos na tela e a criar sensação de profundidade. Esses recursos são muito usados em dashboards, listas e áreas de destaque. Nesta atividade, você vai aplicar esse acabamento em componentes reais da interface.",
        code: `.painel {\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 24px;\n  box-shadow: 0 20px 40px rgba(0,0,0,0.2);\n}`,
        starterCode: `.painel {\n  \n}`,
        instructions: [
          "Adicione borda e cantos arredondados a um bloco.",
          "Use sombra para destacar o componente.",
          "Mantenha um visual limpo e equilibrado."
        ]
      },
      {
        id: "css-9",
        title: "9. Tema visual de uma trilha",
        acceptance: "49.8%",
        difficulty: "Hard",
        status: "locked",
        summary: "Combine fundo, acentos e tipografia para uma identidade consistente.",
        theory:
          "Um bom tema visual faz o usuário sentir que tudo pertence ao mesmo produto. Cores de destaque, contraste e padrao tipográfico precisam conversar entre si. Nesta atividade, você vai montar um pequeno sistema visual para uma trilha do curso, pensando em consistência e legibilidade.",
        code: `:root {\n  --bg: #231e1a;\n  --panel: #2b241f;\n  --accent: #e7c79f;\n}`,
        starterCode: `:root {\n  --bg: ;\n  --panel: ;\n  --accent: ;\n}`,
        instructions: [
          "Defina variáveis para fundo, painel e cor de destaque.",
          "Escolha tons que conversem entre si.",
          "Use contraste suficiente para leitura."
        ]
      },
      {
        id: "css-10",
        title: "10. Painel completo de roadmap",
        acceptance: "45.2%",
        difficulty: "Hard",
        status: "locked",
        summary: "Una layout, botões, cards e responsividade em uma única interface visual.",
        theory:
          "A etapa final da trilha CSS pede que você combine vários conceitos em uma tela mais completa. Em vez de pensar em propriedades isoladas, o desafio agora é fazer o conjunto funcionar bem: espaçamento, contraste, alinhamento, profundidade e adaptação entre telas. Isso aproxima muito mais a prática de um projeto real.",
        code: `.roadmap {\n  display: grid;\n  gap: 20px;\n  padding: 24px;\n}\n\n.card {\n  border-radius: 24px;\n}`,
        starterCode: `.roadmap {\n  \n}\n\n.card {\n  \n}`,
        instructions: [
          "Monte a estrutura visual de um painel de roadmap.",
          "Aplique estilos coerentes aos cards.",
          "Revise o resultado pensando na experiência completa."
        ]
      }
    ]
  },
  {
    id: "javascript",
    label: "JavaScript",
    subtitle: "Lógica, operadores e condições",
    duration: "3 meses",
    description: "Entenda como o código toma decisões, manipula dados e resolve problemas com variáveis, operadores e condicionais.",
    accent: "from-[#788567] to-[#bcc79b]",
    accentText: "text-[#dfe7cf]",
    language: "JavaScript",
    items: [
      {
        id: "js-1",
        title: "1. Tipos primitivos e variáveis",
        acceptance: "85.6%",
        difficulty: "Easy",
        status: "done",
        summary: "Diferencie `string`, `number`, `boolean`, `let` e `const`.",
        theory:
          "Toda aplicação em JavaScript começa com dados. Antes de criar condições, funções ou interacoes, você precisa saber trabalhar com valores como textos, números e estados verdadeiros ou falsos. Nesta atividade, você vai entender a diferença entre `string`, `number` e `boolean`, além de perceber quando usar `let` e `const` para armazenar informações.",
        code: `const nome = "Ana";\nlet idade = 17;\nconst ativo = true;`,
        starterCode: `const nome = "";\nlet idade = 0;\nconst ativo = true;`,
        instructions: [
          "Crie uma string com um nome.",
          "Declare uma idade numérica usando `let`.",
          "Use um booleano para representar um estado."
        ]
      },
      {
        id: "js-2",
        title: "2. Entrada e saída de dados",
        acceptance: "72.5%",
        difficulty: "Easy",
        status: "done",
        summary: "Receba e exiba valores usando `prompt`, `alert` e `console.log`.",
        theory:
          "Programas ficam interessantes quando conseguem receber dados e responder ao usuário. A entrada de dados permite capturar informações, enquanto a saída mostra resultados ou mensagens. Nesta atividade, você vai perceber como `prompt` pode solicitar um valor e como `console.log` ajuda a exibir o que foi processado. Esse é um passo essencial para criar interatividade.",
        code: `const nome = prompt("Digite seu nome");\nconsole.log("Bem-vindo, " + nome);`,
        starterCode: `const nome = prompt("Digite seu nome");\nconsole.log(nome);`,
        instructions: [
          "Solicite um dado ao usuário com `prompt`.",
          "Mostre a resposta no console.",
          "Monte uma mensagem personalizada."
        ]
      },
      {
        id: "js-3",
        title: "3. Operadores aritméticos",
        acceptance: "66.4%",
        difficulty: "Med.",
        status: "pending",
        summary: "Resolva expressões com soma, subtração, multiplicação, divisão e módulo.",
        theory:
          "Operadores aritméticos são a base dos cálculos em programação. Eles aparecem em exercícios simples, jogos, sistemas financeiros e várias situações do dia a dia. Nesta atividade, você vai praticar soma, subtração, multiplicação, divisão e resto da divisão, entendendo como combinar números e variáveis para produzir resultados.",
        code: `const a = 10;\nconst b = 3;\nconsole.log(a + b);\nconsole.log(a % b);`,
        starterCode: `const a = 10;\nconst b = 3;\n\nconsole.log(a + b);`,
        instructions: [
          "Calcule soma, subtração e multiplicação.",
          "Teste a divisão de dois números.",
          "Use o operador módulo para descobrir o resto."
        ]
      },
      {
        id: "js-4",
        title: "4. Operadores relacionais e lógicos",
        acceptance: "59.7%",
        difficulty: "Med.",
        status: "pending",
        summary: "Compare valores e combine condições para preparar o uso de `if` e `else`.",
        theory:
          "Comparar valores e combinar condições e o que permite que um programa tome decisões inteligentes. Operadores relacionais verificam igualdade, diferença e ordem entre valores. Operadores lógicos unem essas comparações em regras mais completas. Nesta atividade, você vai entender como preparar o terreno para usar estruturas condicionais com muito mais sentido.",
        code: `const idade = 18;\nconst matriculado = true;\nconsole.log(idade >= 16 && matriculado);`,
        starterCode: `const idade = 18;\nconst matriculado = true;\n\nconsole.log(idade >= 16 && matriculado);`,
        instructions: [
          "Teste comparações como `>=` e `===`.",
          "Combine condições com `&&` e `||`.",
          "Observe os resultados booleanos."
        ]
      },
      {
        id: "js-5",
        title: "5. Condicional if e else",
        acceptance: "49.3%",
        difficulty: "Hard",
        status: "locked",
        summary: "Controle o caminho do programa com base em regras e resultados de comparações.",
        theory:
          "Com `if` e `else`, o programa deixa de executar sempre o mesmo caminho e passa a reagir a regras. Essa é uma das ideias mais importantes da programação, porque permite criar comportamentos diferentes para situações diferentes. Nesta atividade, você vai usar comparações e condições para decidir o que deve acontecer em cada caso, aproximando o código de problemas reais.",
        code: `if (nota >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Revisar conteúdo");\n}`,
        starterCode: `const nota = 8;\n\nif (nota >= 7) {\n  \n} else {\n  \n}`,
        instructions: [
          "Crie uma regra de aprovação com `if`.",
          "Defina um caminho alternativo com `else`.",
          "Exiba mensagens diferentes em cada caso."
        ]
      },
      {
        id: "js-6",
        title: "6. Conversão e manipulacao de entradas",
        acceptance: "56.6%",
        difficulty: "Med.",
        status: "locked",
        summary: "Transforme textos em números e prepare dados antes de calcular.",
        theory:
          "Quando o usuário digita um valor, ele nem sempre chega no formato ideal para o programa. Muitas vezes e preciso converter ou ajustar a entrada antes de usala em contas e condições. Nesta atividade, você vai praticar a leitura de dados e a conversão para tipos adequados.",
        code: `const idadeTexto = prompt("Digite sua idade");\nconst idade = Number(idadeTexto);\nconsole.log(idade + 1);`,
        starterCode: `const valorTexto = prompt("Digite um número");\n\nconsole.log(valorTexto);`,
        instructions: [
          "Receba um valor digitado pelo usuário.",
          "Converta esse valor para número.",
          "Use o resultado em uma operação simples."
        ]
      },
      {
        id: "js-7",
        title: "7. Estruturas com else if",
        acceptance: "52.8%",
        difficulty: "Med.",
        status: "locked",
        summary: "Crie múltiplos caminhos para classificar resultados e situações.",
        theory:
          "Nem sempre existem apenas dois cenários possíveis. Em muitos problemas, o programa precisa decidir entre várias faixas ou categorias. O `else if` permite criar esse fluxo intermediario de forma organizada. Nesta atividade, você vai classificar resultados com mais de duas possibilidades.",
        code: `if (nota >= 9) {\n  console.log("Excelente");\n} else if (nota >= 7) {\n  console.log("Bom");\n} else {\n  console.log("Revisar");\n}`,
        starterCode: `const nota = 7;\n\nif (nota >= 9) {\n  \n} else if (nota >= 7) {\n  \n} else {\n  \n}`,
        instructions: [
          "Use `if`, `else if` e `else` no mesmo fluxo.",
          "Crie pelo menos tres resultados diferentes.",
          "Exiba uma mensagem para cada faixa."
        ]
      },
      {
        id: "js-8",
        title: "8. Funcoes para reutilizar lógica",
        acceptance: "47.1%",
        difficulty: "Hard",
        status: "locked",
        summary: "Agrupe instruções em funções simples para evitar repetição.",
        theory:
          "Funções servem para organizar o código em blocos reaproveitáveis. Em vez de repetir a mesma lógica várias vezes, você pode dar um nome a ela e executá-la quando precisar. Nesta atividade, você vai criar uma função simples que recebe dados e devolve um resultado útil.",
        code: `function saudacao(nome) {\n  return "Olá, " + nome;\n}\n\nconsole.log(saudacao("Ana"));`,
        starterCode: `function saudacao(nome) {\n  \n}\n\nconsole.log(saudacao(""));`,
        instructions: [
          "Crie uma função com um parametro.",
          "Retorne uma mensagem baseada no valor recebido.",
          "Chame a função e mostre o resultado."
        ]
      },
      {
        id: "js-9",
        title: "9. Arrays e listas de atividades",
        acceptance: "43.9%",
        difficulty: "Hard",
        status: "locked",
        summary: "Guarde várias informações em uma lista para percorrer depois.",
        theory:
          "Arrays permitem armazenar vários valores dentro de uma única variavel. Isso e muito util quando você trabalha com listas de aulas, nomes de usuarios ou resultados. Nesta atividade, você vai criar um array simples e acessar seus itens para entender como manipular coleções de dados.",
        code: `const trilhas = ["HTML", "CSS", "JavaScript"];\nconsole.log(trilhas[0]);\nconsole.log(trilhas.length);`,
        starterCode: `const trilhas = [];\n\nconsole.log(trilhas);`,
        instructions: [
          "Crie um array com pelo menos tres itens.",
          "Acesse um item da lista pelo indice.",
          "Mostre o tamanho total do array."
        ]
      },
      {
        id: "js-10",
        title: "10. Lógica final de uma atividade interativa",
        acceptance: "39.8%",
        difficulty: "Hard",
        status: "locked",
        summary: "Una entrada, calculo e decisao para simular um desafio real de plataforma.",
        theory:
          "Na etapa final, a ideia é combinar vários fundamentos em um pequeno fluxo completo. O usuário informa um dado, o programa processa esse valor e depois decide qual resposta mostrar. Esse tipo de encadeamento aparece o tempo todo em sistemas reais e ajuda a consolidar a base da lógica de programação.",
        code: `const nota = Number(prompt("Digite a nota"));\n\nif (nota >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Reforçar estudos");\n}`,
        starterCode: `const valor = Number(prompt("Digite um valor"));\n\nif (valor > 0) {\n  \n} else {\n  \n}`,
        instructions: [
          "Leia um valor com `prompt`.",
          "Use uma condicao para decidir a resposta.",
          "Mostre o resultado final no console."
        ]
      }
    ]
  }
];



