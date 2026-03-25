export const tracks = [
  {
    id: "html",
    label: "HTML",
    subtitle: "Estrutura, semantica e formularios",
    duration: "1 mes",
    description: "Aprenda a montar paginas bem organizadas, com estrutura correta, conteudo semantico e formularios simples para a web.",
    accent: "from-[#c79a68] to-[#e5c7a1]",
    accentText: "text-[#f0dbc2]",
    language: "HTML",
    items: [
      {
        id: "html-1",
        title: "1. Estrutura basica de uma pagina HTML",
        acceptance: "96.4%",
        difficulty: "Easy",
        status: "done",
        summary: "Monte o esqueleto minimo de um documento com <html>, <head> e <body>.",
        theory:
          "HTML organiza o conteudo da pagina e define a base de tudo o que aparece no navegador. Antes de pensar em estilo com CSS ou interatividade com JavaScript, voce precisa entender como um documento e montado. Nesta atividade, o foco e reconhecer o papel do <!DOCTYPE html>, da tag <html>, do bloco <head>, onde ficam metadados e titulo da pagina, e do <body>, onde o conteudo visivel realmente aparece.",
        code: `<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Minha pagina</title>\n  </head>\n  <body>\n    <h1>Ola, mundo!</h1>\n  </body>\n</html>`,
        starterCode: `<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Atividade HTML</title>\n  </head>\n  <body>\n    \n  </body>\n</html>`,
        instructions: [
          "Crie a estrutura principal de uma pagina HTML valida.",
          "Use tags semanticas sempre que possivel.",
          "Garanta identacao clara para facilitar leitura."
        ]
      },
      {
        id: "html-2",
        title: "2. Titulos, paragrafos e hierarquia",
        acceptance: "90.1%",
        difficulty: "Easy",
        status: "done",
        summary: "Organize informacoes com <h1> ate <h6> e <p> de forma semantica.",
        theory:
          "Titulos e paragrafos nao servem apenas para deixar a pagina bonita: eles ajudam o leitor a entender a ordem das informacoes. Uma boa hierarquia melhora leitura, acessibilidade e organizacao do conteudo. Nesta atividade, voce vai perceber como o <h1> representa o tema principal da pagina, enquanto subtitulos como <h2> e <h3> dividem o assunto em partes menores. Ja o <p> serve para desenvolver a explicacao de forma clara.",
        code: `<section>\n  <h1>Introducao a Programacao</h1>\n  <h2>Tipos primitivos</h2>\n  <p>Texto introdutorio da aula.</p>\n</section>`,
        starterCode: `<section>\n  <h1></h1>\n  <h2></h2>\n  <p></p>\n</section>`,
        instructions: [
          "Defina um titulo principal da pagina.",
          "Crie um subtitulo para a secao da aula.",
          "Escreva um paragrafo introdutorio curto."
        ]
      },
      {
        id: "html-3",
        title: "3. Listas e navegacao",
        acceptance: "82.7%",
        difficulty: "Easy",
        status: "pending",
        summary: "Crie menus e listas ordenadas para representar trilhas e etapas.",
        theory:
          "Listas sao fundamentais na web porque ajudam a representar conjuntos de itens relacionados de forma organizada. Menus, roadmaps, sumarios e etapas de estudo costumam ser construidos com listas. Nesta atividade, voce vai entender quando usar uma lista nao ordenada (<ul>) e por que cada item deve ficar dentro de um <li>. Isso cria uma base importante para menus de navegacao e estruturas de trilha como as que aparecem em plataformas de estudo.",
        code: `<nav>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n</nav>`,
        starterCode: `<nav>\n  <ul>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</nav>`,
        instructions: [
          "Monte um menu com pelo menos tres trilhas.",
          "Use lista nao ordenada para a navegacao.",
          "Mantenha os itens claros e legiveis."
        ]
      },
      {
        id: "html-4",
        title: "4. Links, imagens e midia",
        acceptance: "74.8%",
        difficulty: "Med.",
        status: "pending",
        summary: "Conecte paginas, ilustre conteudos e aprenda boas praticas de acessibilidade.",
        theory:
          "Links e imagens tornam a experiencia mais rica e navegavel. Um link permite que o usuario avance entre paginas ou secoes, enquanto uma imagem ajuda a ilustrar o conteudo. Mas nao basta apenas inserir esses elementos: e importante saber escrever textos de link claros e usar o atributo alt nas imagens para manter a pagina acessivel. Nesta atividade, voce vai praticar como tornar a navegacao mais intuitiva e o conteudo mais compreensivel.",
        code: `<a href="/curso/html">Abrir trilha HTML</a>\n<img src="/cover.png" alt="Capa da trilha HTML" />`,
        starterCode: `<a href=""></a>\n<img src="" alt="" />`,
        instructions: [
          "Crie um link que leve para uma pagina do curso.",
          "Adicione uma imagem com atributo alt descritivo.",
          "Use textos claros para orientar o usuario."
        ]
      },
      {
        id: "html-5",
        title: "5. Formularios e entrada de dados",
        acceptance: "68.2%",
        difficulty: "Med.",
        status: "locked",
        summary: "Colete nome, email e respostas do aluno com campos e botoes.",
        theory:
          "Formularios sao a principal forma de entrada de dados na web. Sempre que um usuario preenche cadastro, faz login ou responde uma atividade, existe um formulario por tras disso. Nesta atividade, voce vai entender como <label>, <input> e <button> trabalham juntos para criar uma interface clara e funcional. Tambem vai perceber que formularios bem estruturados melhoram a experiencia do usuario e evitam confusoes durante o preenchimento.",
        code: `<form>\n  <label>Nome</label>\n  <input type="text" />\n  <button>Enviar</button>\n</form>`,
        starterCode: `<form>\n  <label></label>\n  <input type="text" />\n  <button>Enviar</button>\n</form>`,
        instructions: [
          "Adicione campos para nome e uma resposta simples.",
          "Associe labels aos inputs do formulario.",
          "Inclua um botao para envio."
        ]
      },
      {
        id: "html-6",
        title: "6. Botoes, acoes e chamadas visuais",
        acceptance: "66.7%",
        difficulty: "Med.",
        status: "locked",
        summary: "Estruture botoes e acoes principais de uma interface educacional.",
        theory:
          "Botoes orientam o usuario sobre o que pode ser feito na tela. Em plataformas educacionais, eles aparecem para iniciar atividade, enviar resposta ou voltar para a trilha. Nesta atividade, voce vai praticar como montar botoes claros, com texto objetivo e posicionamento coerente na estrutura HTML.",
        code: `<div>\n  <button>Comecar atividade</button>\n  <button>Voltar</button>\n</div>`,
        starterCode: `<div>\n  <button></button>\n  <button></button>\n</div>`,
        instructions: [
          "Crie dois botoes com acoes diferentes.",
          "Use textos curtos e claros nos botoes.",
          "Agrupe os controles em uma area da interface."
        ]
      },
      {
        id: "html-7",
        title: "7. Tabelas para organizar dados",
        acceptance: "64.9%",
        difficulty: "Med.",
        status: "locked",
        summary: "Apresente horarios, modulos e notas em linhas e colunas.",
        theory:
          "Tabelas sao uteis quando voce precisa mostrar informacoes que se relacionam entre si em formato de grade. Horarios de aula, comparacoes e listas de desempenho sao exemplos comuns. Nesta atividade, voce vai praticar o uso de <table>, <tr>, <th> e <td> para estruturar dados com clareza.",
        code: `<table>\n  <tr>\n    <th>Modulo</th>\n    <th>Status</th>\n  </tr>\n  <tr>\n    <td>HTML</td>\n    <td>Concluido</td>\n  </tr>\n</table>`,
        starterCode: `<table>\n  <tr>\n    <th></th>\n    <th></th>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n</table>`,
        instructions: [
          "Crie uma tabela com cabecalho e pelo menos uma linha de dados.",
          "Use titulos claros nas colunas.",
          "Organize as informacoes da trilha de estudo."
        ]
      },
      {
        id: "html-8",
        title: "8. Secoes semanticas da pagina",
        acceptance: "61.8%",
        difficulty: "Med.",
        status: "locked",
        summary: "Separe cabecalho, conteudo principal e rodape com mais significado.",
        theory:
          "HTML semantico ajuda o navegador, leitores de tela e outros desenvolvedores a entenderem a estrutura da pagina. Elementos como <header>, <main>, <section>, <article> e <footer> tornam o documento mais claro. Nesta atividade, voce vai praticar a divisao do conteudo em partes com funcao bem definida.",
        code: `<header>\n  <h1>Mini curso</h1>\n</header>\n<main>\n  <section>Aulas</section>\n</main>\n<footer>Plataforma gratuita</footer>`,
        starterCode: `<header>\n  \n</header>\n<main>\n  \n</main>\n<footer>\n  \n</footer>`,
        instructions: [
          "Use <header>, <main> e <footer> na estrutura da pagina.",
          "Crie uma secao principal para o conteudo da aula.",
          "Mantenha a organizacao semantica e legivel."
        ]
      },
      {
        id: "html-9",
        title: "9. Estrutura de um card de atividade",
        acceptance: "57.6%",
        difficulty: "Hard",
        status: "locked",
        summary: "Monte um card com titulo, descricao, status e botao de acao.",
        theory:
          "Grande parte das interfaces modernas usa cards para agrupar informacoes relacionadas. Um card bem estruturado ajuda o usuario a identificar rapidamente o que e importante. Nesta atividade, voce vai montar a base HTML de um card de atividade com elementos de texto, status e chamada para acao.",
        code: `<article>\n  <h2>Atividade 1</h2>\n  <p>Pratique a estrutura HTML.</p>\n  <button>Comecar</button>\n</article>`,
        starterCode: `<article>\n  <h2></h2>\n  <p></p>\n  <button></button>\n</article>`,
        instructions: [
          "Crie um card com titulo e descricao curta.",
          "Mostre um status simples da atividade.",
          "Adicione um botao para iniciar a etapa."
        ]
      },
      {
        id: "html-10",
        title: "10. Pagina final de roadmap HTML",
        acceptance: "52.4%",
        difficulty: "Hard",
        status: "locked",
        summary: "Combine secoes, cards e navegacao em uma pagina completa de trilha.",
        theory:
          "Quando voce junta varios elementos basicos, comeca a construir paginas completas de verdade. Nesta atividade final da trilha HTML, o foco e integrar titulos, secoes, botoes, listas e cards em uma unica pagina organizada. O objetivo e consolidar o que foi aprendido ate aqui.",
        code: `<main>\n  <header>\n    <h1>Roadmap HTML</h1>\n  </header>\n  <section>\n    <article>\n      <h2>Atividade 1</h2>\n      <p>Estrutura basica</p>\n    </article>\n  </section>\n</main>`,
        starterCode: `<main>\n  <header>\n    \n  </header>\n  <section>\n    \n  </section>\n</main>`,
        instructions: [
          "Monte uma pagina com titulo principal e area de conteudo.",
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
    description: "Desenvolva a parte visual das interfaces com espacos, alinhamento, estilos, componentes e adaptacao entre telas.",
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
        summary: "Aplique estilos basicos a titulos, textos e botoes.",
        theory:
          "CSS controla a apresentacao visual da pagina. Se o HTML organiza a estrutura, o CSS define como essa estrutura sera vista pelo usuario. Nesta primeira atividade, o objetivo e entender a logica basica dos seletores e das propriedades mais comuns, como fonte, cor e aparencia de titulos. Ao dominar isso, voce comeca a transformar uma pagina simples em algo visualmente mais agradavel e legivel.",
        code: `body {\n  font-family: sans-serif;\n  color: #111;\n}\n\nh1 {\n  color: #0f172a;\n}`,
        starterCode: `body {\n  font-family: sans-serif;\n}\n\nh1 {\n  \n}`,
        instructions: [
          "Defina uma fonte base para a pagina.",
          "Escolha uma cor para o texto principal.",
          "Personalize o titulo principal."
        ]
      },
      {
        id: "css-2",
        title: "2. Box model e espacamento",
        acceptance: "79.3%",
        difficulty: "Easy",
        status: "pending",
        summary: "Domine `margin`, `padding`, `border` e a ocupacao real de cada bloco.",
        theory:
          "Todo elemento em CSS pode ser entendido como uma caixa. Essa caixa tem conteudo, espacamento interno (`padding`), borda e espacamento externo (`margin`). Esse conceito e conhecido como box model e e um dos fundamentos mais importantes para montar layouts. Nesta atividade, voce vai aprender como cada parte afeta o tamanho e o posicionamento visual dos blocos na tela.",
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
        summary: "Organize linhas, colunas e alinhamentos com menos codigo.",
        theory:
          "Flexbox foi criado para facilitar o alinhamento de elementos em uma unica direcao, seja horizontal ou vertical. Ele resolve com poucas linhas problemas que antes exigiam muitos ajustes manuais. Nesta atividade, voce vai entender como usar `display: flex`, distribuir espaco entre itens e alinhar conteudos em barras, listas e pequenos conjuntos de componentes.",
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
        summary: "Monte estruturas de dashboard e secoes com linhas e colunas reais.",
        theory:
          "CSS Grid e ideal quando voce precisa controlar linhas e colunas ao mesmo tempo. Diferente do Flexbox, que trabalha melhor em uma direcao, o Grid permite montar areas mais complexas, como dashboards, paineis e estruturas com varias secoes. Nesta atividade, voce vai aprender a pensar o layout como uma grade organizada e previsivel.",
        code: `.dashboard {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 24px;\n}`,
        starterCode: `.dashboard {\n  \n}`,
        instructions: [
          "Ative o modo grid no container principal.",
          "Crie duas colunas com proporcoes diferentes.",
          "Defina um espacamento consistente entre areas."
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
          "Uma interface moderna precisa funcionar bem em telas de tamanhos diferentes. Responsividade e a capacidade de adaptar o layout para celular, tablet e desktop sem perder clareza nem usabilidade. Nesta atividade, voce vai entender como as media queries ajudam a alterar o comportamento do layout conforme a largura da tela, deixando a experiencia mais consistente.",
        code: `@media (max-width: 768px) {\n  .dashboard {\n    grid-template-columns: 1fr;\n  }\n}`,
        starterCode: `@media (max-width: 768px) {\n  .dashboard {\n    \n  }\n}`,
        instructions: [
          "Crie uma media query para telas menores.",
          "Transforme o layout em uma unica coluna.",
          "Revise o comportamento em celulares."
        ]
      },
      {
        id: "css-6",
        title: "6. Espacamento vertical e ritmo visual",
        acceptance: "65.1%",
        difficulty: "Med.",
        status: "locked",
        summary: "Organize a distancia entre secoes para melhorar leitura e hierarquia.",
        theory:
          "Nem todo problema visual esta nas cores ou no layout. Muitas vezes, o que torna uma interface confusa e a falta de espacamento consistente. Nesta atividade, voce vai praticar como criar ritmo visual usando margens e paddings para separar blocos de forma harmoniosa.",
        code: `.secao {\n  padding: 24px;\n  margin-bottom: 20px;\n}`,
        starterCode: `.secao {\n  \n}`,
        instructions: [
          "Adicione espacamento interno a uma secao.",
          "Separe os blocos com margem externa.",
          "Busque uma leitura mais confortavel."
        ]
      },
      {
        id: "css-7",
        title: "7. Estados de botoes e interacao visual",
        acceptance: "62.4%",
        difficulty: "Med.",
        status: "locked",
        summary: "Destaque hover, foco e estados importantes para o usuario.",
        theory:
          "Interfaces boas nao mostram apenas conteudo: elas respondem ao toque e ao clique do usuario. Estados como `hover`, `focus` e `disabled` ajudam a comunicar o que pode ou nao ser feito. Nesta atividade, voce vai estilizar botoes para deixar a experiencia mais clara e intuitiva.",
        code: `.botao {\n  background: #e7c79f;\n}\n\n.botao:hover {\n  opacity: 0.9;\n}`,
        starterCode: `.botao {\n  \n}\n\n.botao:hover {\n  \n}`,
        instructions: [
          "Estilize um botao com cor e contraste visivel.",
          "Adicione um efeito de hover.",
          "Pense em como destacar a interacao para o usuario."
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
          "Detalhes visuais como bordas arredondadas, sombras e contornos ajudam a separar elementos na tela e a criar sensacao de profundidade. Esses recursos sao muito usados em dashboards, listas e areas de destaque. Nesta atividade, voce vai aplicar esse acabamento em componentes reais da interface.",
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
          "Um bom tema visual faz o usuario sentir que tudo pertence ao mesmo produto. Cores de destaque, contraste e padrao tipografico precisam conversar entre si. Nesta atividade, voce vai montar um pequeno sistema visual para uma trilha do curso, pensando em consistencia e legibilidade.",
        code: `:root {\n  --bg: #231e1a;\n  --panel: #2b241f;\n  --accent: #e7c79f;\n}`,
        starterCode: `:root {\n  --bg: ;\n  --panel: ;\n  --accent: ;\n}`,
        instructions: [
          "Defina variaveis para fundo, painel e cor de destaque.",
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
        summary: "Una layout, botoes, cards e responsividade em uma unica interface visual.",
        theory:
          "A etapa final da trilha CSS pede que voce combine varios conceitos em uma tela mais completa. Em vez de pensar em propriedades isoladas, o desafio agora e fazer o conjunto funcionar bem: espacamento, contraste, alinhamento, profundidade e adaptacao entre telas. Isso aproxima muito mais a pratica de um projeto real.",
        code: `.roadmap {\n  display: grid;\n  gap: 20px;\n  padding: 24px;\n}\n\n.card {\n  border-radius: 24px;\n}`,
        starterCode: `.roadmap {\n  \n}\n\n.card {\n  \n}`,
        instructions: [
          "Monte a estrutura visual de um painel de roadmap.",
          "Aplique estilos coerentes aos cards.",
          "Revise o resultado pensando na experiencia completa."
        ]
      }
    ]
  },
  {
    id: "javascript",
    label: "JavaScript",
    subtitle: "Logica, operadores e condicoes",
    duration: "3 meses",
    description: "Entenda como o codigo toma decisoes, manipula dados e resolve problemas com variaveis, operadores e condicionais.",
    accent: "from-[#788567] to-[#bcc79b]",
    accentText: "text-[#dfe7cf]",
    language: "JavaScript",
    items: [
      {
        id: "js-1",
        title: "1. Tipos primitivos e variaveis",
        acceptance: "85.6%",
        difficulty: "Easy",
        status: "done",
        summary: "Diferencie `string`, `number`, `boolean`, `let` e `const`.",
        theory:
          "Toda aplicacao em JavaScript comeca com dados. Antes de criar condicoes, funcoes ou interacoes, voce precisa saber trabalhar com valores como textos, numeros e estados verdadeiros ou falsos. Nesta atividade, voce vai entender a diferenca entre `string`, `number` e `boolean`, alem de perceber quando usar `let` e `const` para armazenar informacoes.",
        code: `const nome = "Ana";\nlet idade = 17;\nconst ativo = true;`,
        starterCode: `const nome = "";\nlet idade = 0;\nconst ativo = true;`,
        instructions: [
          "Crie uma string com um nome.",
          "Declare uma idade numerica usando `let`.",
          "Use um booleano para representar um estado."
        ]
      },
      {
        id: "js-2",
        title: "2. Entrada e saida de dados",
        acceptance: "72.5%",
        difficulty: "Easy",
        status: "done",
        summary: "Receba e exiba valores usando `prompt`, `alert` e `console.log`.",
        theory:
          "Programas ficam interessantes quando conseguem receber dados e responder ao usuario. A entrada de dados permite capturar informacoes, enquanto a saida mostra resultados ou mensagens. Nesta atividade, voce vai perceber como `prompt` pode solicitar um valor e como `console.log` ajuda a exibir o que foi processado. Esse e um passo essencial para criar interatividade.",
        code: `const nome = prompt("Digite seu nome");\nconsole.log("Bem-vindo, " + nome);`,
        starterCode: `const nome = prompt("Digite seu nome");\nconsole.log(nome);`,
        instructions: [
          "Solicite um dado ao usuario com `prompt`.",
          "Mostre a resposta no console.",
          "Monte uma mensagem personalizada."
        ]
      },
      {
        id: "js-3",
        title: "3. Operadores aritmeticos",
        acceptance: "66.4%",
        difficulty: "Med.",
        status: "pending",
        summary: "Resolva expressoes com soma, subtracao, multiplicacao, divisao e modulo.",
        theory:
          "Operadores aritmeticos sao a base dos calculos em programacao. Eles aparecem em exercicios simples, jogos, sistemas financeiros e varias situacoes do dia a dia. Nesta atividade, voce vai praticar soma, subtracao, multiplicacao, divisao e resto da divisao, entendendo como combinar numeros e variaveis para produzir resultados.",
        code: `const a = 10;\nconst b = 3;\nconsole.log(a + b);\nconsole.log(a % b);`,
        starterCode: `const a = 10;\nconst b = 3;\n\nconsole.log(a + b);`,
        instructions: [
          "Calcule soma, subtracao e multiplicacao.",
          "Teste a divisao de dois numeros.",
          "Use o operador modulo para descobrir o resto."
        ]
      },
      {
        id: "js-4",
        title: "4. Operadores relacionais e logicos",
        acceptance: "59.7%",
        difficulty: "Med.",
        status: "pending",
        summary: "Compare valores e combine condicoes para preparar o uso de `if` e `else`.",
        theory:
          "Comparar valores e combinar condicoes e o que permite que um programa tome decisoes inteligentes. Operadores relacionais verificam igualdade, diferenca e ordem entre valores. Operadores logicos unem essas comparacoes em regras mais completas. Nesta atividade, voce vai entender como preparar o terreno para usar estruturas condicionais com muito mais sentido.",
        code: `const idade = 18;\nconst matriculado = true;\nconsole.log(idade >= 16 && matriculado);`,
        starterCode: `const idade = 18;\nconst matriculado = true;\n\nconsole.log(idade >= 16 && matriculado);`,
        instructions: [
          "Teste comparacoes como `>=` e `===`.",
          "Combine condicoes com `&&` e `||`.",
          "Observe os resultados booleanos."
        ]
      },
      {
        id: "js-5",
        title: "5. Condicional if e else",
        acceptance: "49.3%",
        difficulty: "Hard",
        status: "locked",
        summary: "Controle o caminho do programa com base em regras e resultados de comparacoes.",
        theory:
          "Com `if` e `else`, o programa deixa de executar sempre o mesmo caminho e passa a reagir a regras. Essa e uma das ideias mais importantes da programacao, porque permite criar comportamentos diferentes para situacoes diferentes. Nesta atividade, voce vai usar comparacoes e condicoes para decidir o que deve acontecer em cada caso, aproximando o codigo de problemas reais.",
        code: `if (nota >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Revisar conteudo");\n}`,
        starterCode: `const nota = 8;\n\nif (nota >= 7) {\n  \n} else {\n  \n}`,
        instructions: [
          "Crie uma regra de aprovacao com `if`.",
          "Defina um caminho alternativo com `else`.",
          "Exiba mensagens diferentes em cada caso."
        ]
      },
      {
        id: "js-6",
        title: "6. Conversao e manipulacao de entradas",
        acceptance: "56.6%",
        difficulty: "Med.",
        status: "locked",
        summary: "Transforme textos em numeros e prepare dados antes de calcular.",
        theory:
          "Quando o usuario digita um valor, ele nem sempre chega no formato ideal para o programa. Muitas vezes e preciso converter ou ajustar a entrada antes de usala em contas e condicoes. Nesta atividade, voce vai praticar a leitura de dados e a conversao para tipos adequados.",
        code: `const idadeTexto = prompt("Digite sua idade");\nconst idade = Number(idadeTexto);\nconsole.log(idade + 1);`,
        starterCode: `const valorTexto = prompt("Digite um numero");\n\nconsole.log(valorTexto);`,
        instructions: [
          "Receba um valor digitado pelo usuario.",
          "Converta esse valor para numero.",
          "Use o resultado em uma operacao simples."
        ]
      },
      {
        id: "js-7",
        title: "7. Estruturas com else if",
        acceptance: "52.8%",
        difficulty: "Med.",
        status: "locked",
        summary: "Crie multiplos caminhos para classificar resultados e situacoes.",
        theory:
          "Nem sempre existem apenas dois cenarios possiveis. Em muitos problemas, o programa precisa decidir entre varias faixas ou categorias. O `else if` permite criar esse fluxo intermediario de forma organizada. Nesta atividade, voce vai classificar resultados com mais de duas possibilidades.",
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
        title: "8. Funcoes para reutilizar logica",
        acceptance: "47.1%",
        difficulty: "Hard",
        status: "locked",
        summary: "Agrupe instrucoes em funcoes simples para evitar repeticao.",
        theory:
          "Funcoes servem para organizar o codigo em blocos reaproveitaveis. Em vez de repetir a mesma logica varias vezes, voce pode dar um nome a ela e executa-la quando precisar. Nesta atividade, voce vai criar uma funcao simples que recebe dados e devolve um resultado util.",
        code: `function saudacao(nome) {\n  return "Ola, " + nome;\n}\n\nconsole.log(saudacao("Ana"));`,
        starterCode: `function saudacao(nome) {\n  \n}\n\nconsole.log(saudacao(""));`,
        instructions: [
          "Crie uma funcao com um parametro.",
          "Retorne uma mensagem baseada no valor recebido.",
          "Chame a funcao e mostre o resultado."
        ]
      },
      {
        id: "js-9",
        title: "9. Arrays e listas de atividades",
        acceptance: "43.9%",
        difficulty: "Hard",
        status: "locked",
        summary: "Guarde varias informacoes em uma lista para percorrer depois.",
        theory:
          "Arrays permitem armazenar varios valores dentro de uma unica variavel. Isso e muito util quando voce trabalha com listas de aulas, nomes de usuarios ou resultados. Nesta atividade, voce vai criar um array simples e acessar seus itens para entender como manipular colecoes de dados.",
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
        title: "10. Logica final de uma atividade interativa",
        acceptance: "39.8%",
        difficulty: "Hard",
        status: "locked",
        summary: "Una entrada, calculo e decisao para simular um desafio real de plataforma.",
        theory:
          "Na etapa final, a ideia e combinar varios fundamentos em um pequeno fluxo completo. O usuario informa um dado, o programa processa esse valor e depois decide qual resposta mostrar. Esse tipo de encadeamento aparece o tempo todo em sistemas reais e ajuda a consolidar a base da logica de programacao.",
        code: `const nota = Number(prompt("Digite a nota"));\n\nif (nota >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Reforcar estudos");\n}`,
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
