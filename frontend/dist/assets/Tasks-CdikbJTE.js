import{r as v,g as j,j as e}from"./index-CM90JP7Y.js";const N=[{id:"html",label:"HTML",subtitle:"Estrutura, semantica e formularios",accent:"from-[#c79a68] to-[#e5c7a1]",accentText:"text-[#f0dbc2]",language:"HTML",items:[{id:"html-1",title:"1. Estrutura basica de uma pagina HTML",acceptance:"96.4%",difficulty:"Easy",status:"done",summary:"Monte o esqueleto minimo de um documento com `html`, `head` e `body`.",theory:"HTML organiza o conteudo da pagina e define a base de tudo o que aparece no navegador. Antes de pensar em estilo com CSS ou interatividade com JavaScript, voce precisa entender como um documento e montado. Nesta atividade, o foco e reconhecer o papel do `<!DOCTYPE html>`, da tag `html`, do bloco `head`, onde ficam metadados e titulo da pagina, e do `body`, onde o conteudo visivel realmente aparece.",code:`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha pagina</title>
  </head>
  <body>
    <h1>Ola, mundo!</h1>
  </body>
</html>`,starterCode:`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Atividade HTML</title>
  </head>
  <body>
    
  </body>
</html>`,instructions:["Crie a estrutura principal de uma pagina HTML valida.","Use tags semanticas sempre que possivel.","Garanta identacao clara para facilitar leitura."]},{id:"html-2",title:"2. Titulos, paragrafos e hierarquia",acceptance:"90.1%",difficulty:"Easy",status:"done",summary:"Organize informacoes com `h1` ate `h6` e `p` de forma semantica.",theory:"Titulos e paragrafos nao servem apenas para deixar a pagina bonita: eles ajudam o leitor a entender a ordem das informacoes. Uma boa hierarquia melhora leitura, acessibilidade e organizacao do conteudo. Nesta atividade, voce vai perceber como o `h1` representa o tema principal da pagina, enquanto subtitulos como `h2` e `h3` dividem o assunto em partes menores. Ja o `p` serve para desenvolver a explicacao de forma clara.",code:`<section>
  <h1>Introducao a Programacao</h1>
  <h2>Tipos primitivos</h2>
  <p>Texto introdutorio da aula.</p>
</section>`,starterCode:`<section>
  <h1></h1>
  <h2></h2>
  <p></p>
</section>`,instructions:["Defina um titulo principal da pagina.","Crie um subtitulo para a secao da aula.","Escreva um paragrafo introdutorio curto."]},{id:"html-3",title:"3. Listas e navegacao",acceptance:"82.7%",difficulty:"Easy",status:"pending",summary:"Crie menus e listas ordenadas para representar trilhas e etapas.",theory:"Listas sao fundamentais na web porque ajudam a representar conjuntos de itens relacionados de forma organizada. Menus, roadmaps, sumarios e etapas de estudo costumam ser construidos com listas. Nesta atividade, voce vai entender quando usar uma lista nao ordenada (`ul`) e por que cada item deve ficar dentro de um `li`. Isso cria uma base importante para menus de navegacao e estruturas de trilha como as que aparecem em plataformas de estudo.",code:`<nav>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</nav>`,starterCode:`<nav>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</nav>`,instructions:["Monte um menu com pelo menos tres trilhas.","Use lista nao ordenada para a navegacao.","Mantenha os itens claros e legiveis."]},{id:"html-4",title:"4. Links, imagens e midia",acceptance:"74.8%",difficulty:"Med.",status:"pending",summary:"Conecte paginas, ilustre conteudos e aprenda boas praticas de acessibilidade.",theory:"Links e imagens tornam a experiencia mais rica e navegavel. Um link permite que o usuario avance entre paginas ou secoes, enquanto uma imagem ajuda a ilustrar o conteudo. Mas nao basta apenas inserir esses elementos: e importante saber escrever textos de link claros e usar o atributo `alt` nas imagens para manter a pagina acessivel. Nesta atividade, voce vai praticar como tornar a navegacao mais intuitiva e o conteudo mais compreensivel.",code:`<a href="/curso/html">Abrir trilha HTML</a>
<img src="/cover.png" alt="Capa da trilha HTML" />`,starterCode:`<a href=""></a>
<img src="" alt="" />`,instructions:["Crie um link que leve para uma pagina do curso.","Adicione uma imagem com atributo alt descritivo.","Use textos claros para orientar o usuario."]},{id:"html-5",title:"5. Formularios e entrada de dados",acceptance:"68.2%",difficulty:"Med.",status:"locked",summary:"Colete nome, email e respostas do aluno com campos e botoes.",theory:"Formularios sao a principal forma de entrada de dados na web. Sempre que um usuario preenche cadastro, faz login ou responde uma atividade, existe um formulario por tras disso. Nesta atividade, voce vai entender como `label`, `input` e `button` trabalham juntos para criar uma interface clara e funcional. Tambem vai perceber que formularios bem estruturados melhoram a experiencia do usuario e evitam confusoes durante o preenchimento.",code:`<form>
  <label>Nome</label>
  <input type="text" />
  <button>Enviar</button>
</form>`,starterCode:`<form>
  <label></label>
  <input type="text" />
  <button>Enviar</button>
</form>`,instructions:["Adicione campos para nome e uma resposta simples.","Associe labels aos inputs do formulario.","Inclua um botao para envio."]},{id:"html-6",title:"6. Botoes, acoes e chamadas visuais",acceptance:"66.7%",difficulty:"Med.",status:"locked",summary:"Estruture botoes e acoes principais de uma interface educacional.",theory:"Botoes orientam o usuario sobre o que pode ser feito na tela. Em plataformas educacionais, eles aparecem para iniciar atividade, enviar resposta ou voltar para a trilha. Nesta atividade, voce vai praticar como montar botoes claros, com texto objetivo e posicionamento coerente na estrutura HTML.",code:`<div>
  <button>Comecar atividade</button>
  <button>Voltar</button>
</div>`,starterCode:`<div>
  <button></button>
  <button></button>
</div>`,instructions:["Crie dois botoes com acoes diferentes.","Use textos curtos e claros nos botoes.","Agrupe os controles em uma area da interface."]},{id:"html-7",title:"7. Tabelas para organizar dados",acceptance:"64.9%",difficulty:"Med.",status:"locked",summary:"Apresente horarios, modulos e notas em linhas e colunas.",theory:"Tabelas sao uteis quando voce precisa mostrar informacoes que se relacionam entre si em formato de grade. Horarios de aula, comparacoes e listas de desempenho sao exemplos comuns. Nesta atividade, voce vai praticar o uso de `table`, `tr`, `th` e `td` para estruturar dados com clareza.",code:`<table>
  <tr>
    <th>Modulo</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>HTML</td>
    <td>Concluido</td>
  </tr>
</table>`,starterCode:`<table>
  <tr>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>`,instructions:["Crie uma tabela com cabecalho e pelo menos uma linha de dados.","Use titulos claros nas colunas.","Organize as informacoes da trilha de estudo."]},{id:"html-8",title:"8. Secoes semanticas da pagina",acceptance:"61.8%",difficulty:"Med.",status:"locked",summary:"Separe cabecalho, conteudo principal e rodape com mais significado.",theory:"HTML semantico ajuda o navegador, leitores de tela e outros desenvolvedores a entenderem a estrutura da pagina. Elementos como `header`, `main`, `section`, `article` e `footer` tornam o documento mais claro. Nesta atividade, voce vai praticar a divisao do conteudo em partes com funcao bem definida.",code:`<header>
  <h1>Mini curso</h1>
</header>
<main>
  <section>Aulas</section>
</main>
<footer>Plataforma gratuita</footer>`,starterCode:`<header>
  
</header>
<main>
  
</main>
<footer>
  
</footer>`,instructions:["Use `header`, `main` e `footer` na estrutura da pagina.","Crie uma secao principal para o conteudo da aula.","Mantenha a organizacao semantica e legivel."]},{id:"html-9",title:"9. Estrutura de um card de atividade",acceptance:"57.6%",difficulty:"Hard",status:"locked",summary:"Monte um card com titulo, descricao, status e botao de acao.",theory:"Grande parte das interfaces modernas usa cards para agrupar informacoes relacionadas. Um card bem estruturado ajuda o usuario a identificar rapidamente o que e importante. Nesta atividade, voce vai montar a base HTML de um card de atividade com elementos de texto, status e chamada para acao.",code:`<article>
  <h2>Atividade 1</h2>
  <p>Pratique a estrutura HTML.</p>
  <button>Comecar</button>
</article>`,starterCode:`<article>
  <h2></h2>
  <p></p>
  <button></button>
</article>`,instructions:["Crie um card com titulo e descricao curta.","Mostre um status simples da atividade.","Adicione um botao para iniciar a etapa."]},{id:"html-10",title:"10. Pagina final de roadmap HTML",acceptance:"52.4%",difficulty:"Hard",status:"locked",summary:"Combine secoes, cards e navegacao em uma pagina completa de trilha.",theory:"Quando voce junta varios elementos basicos, comeca a construir paginas completas de verdade. Nesta atividade final da trilha HTML, o foco e integrar titulos, secoes, botoes, listas e cards em uma unica pagina organizada. O objetivo e consolidar o que foi aprendido ate aqui.",code:`<main>
  <header>
    <h1>Roadmap HTML</h1>
  </header>
  <section>
    <article>
      <h2>Atividade 1</h2>
      <p>Estrutura basica</p>
    </article>
  </section>
</main>`,starterCode:`<main>
  <header>
    
  </header>
  <section>
    
  </section>
</main>`,instructions:["Monte uma pagina com titulo principal e area de conteudo.","Adicione pelo menos um card de atividade.","Organize a estrutura como uma pequena tela de roadmap."]}]},{id:"css",label:"CSS",subtitle:"Layout, cores e responsividade",accent:"from-[#7b8f9d] to-[#b9c7d0]",accentText:"text-[#dbe4e8]",language:"CSS",items:[{id:"css-1",title:"1. Seletores, cores e tipografia",acceptance:"88.9%",difficulty:"Easy",status:"done",summary:"Aplique estilos basicos a titulos, textos e botoes.",theory:"CSS controla a apresentacao visual da pagina. Se o HTML organiza a estrutura, o CSS define como essa estrutura sera vista pelo usuario. Nesta primeira atividade, o objetivo e entender a logica basica dos seletores e das propriedades mais comuns, como fonte, cor e aparencia de titulos. Ao dominar isso, voce comeca a transformar uma pagina simples em algo visualmente mais agradavel e legivel.",code:`body {
  font-family: sans-serif;
  color: #111;
}

h1 {
  color: #0f172a;
}`,starterCode:`body {
  font-family: sans-serif;
}

h1 {
  
}`,instructions:["Defina uma fonte base para a pagina.","Escolha uma cor para o texto principal.","Personalize o titulo principal."]},{id:"css-2",title:"2. Box model e espacamento",acceptance:"79.3%",difficulty:"Easy",status:"pending",summary:"Domine `margin`, `padding`, `border` e a ocupacao real de cada bloco.",theory:"Todo elemento em CSS pode ser entendido como uma caixa. Essa caixa tem conteudo, espacamento interno (`padding`), borda e espacamento externo (`margin`). Esse conceito e conhecido como box model e e um dos fundamentos mais importantes para montar layouts. Nesta atividade, voce vai aprender como cada parte afeta o tamanho e o posicionamento visual dos blocos na tela.",code:`.card {
  padding: 16px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}`,starterCode:`.card {
  
}`,instructions:["Crie uma classe `.card` com espaco interno.","Adicione uma borda sutil ao bloco.","Separe os cards com margem inferior."]},{id:"css-3",title:"3. Flexbox para alinhamento",acceptance:"71.2%",difficulty:"Med.",status:"pending",summary:"Organize linhas, colunas e alinhamentos com menos codigo.",theory:"Flexbox foi criado para facilitar o alinhamento de elementos em uma unica direcao, seja horizontal ou vertical. Ele resolve com poucas linhas problemas que antes exigiam muitos ajustes manuais. Nesta atividade, voce vai entender como usar `display: flex`, distribuir espaco entre itens e alinhar conteudos em barras, listas e pequenos conjuntos de componentes.",code:`.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,starterCode:`.toolbar {
  
}`,instructions:["Transforme a barra em um container flexivel.","Distribua espaco entre os elementos.","Alinhe tudo verticalmente no centro."]},{id:"css-4",title:"4. Grid para layouts complexos",acceptance:"63.5%",difficulty:"Med.",status:"locked",summary:"Monte estruturas de dashboard e secoes com linhas e colunas reais.",theory:"CSS Grid e ideal quando voce precisa controlar linhas e colunas ao mesmo tempo. Diferente do Flexbox, que trabalha melhor em uma direcao, o Grid permite montar areas mais complexas, como dashboards, paineis e estruturas com varias secoes. Nesta atividade, voce vai aprender a pensar o layout como uma grade organizada e previsivel.",code:`.dashboard {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
}`,starterCode:`.dashboard {
  
}`,instructions:["Ative o modo grid no container principal.","Crie duas colunas com proporcoes diferentes.","Defina um espacamento consistente entre areas."]},{id:"css-5",title:"5. Responsividade e media queries",acceptance:"58.7%",difficulty:"Hard",status:"locked",summary:"Adapte interfaces para celular, tablet e desktop.",theory:"Uma interface moderna precisa funcionar bem em telas de tamanhos diferentes. Responsividade e a capacidade de adaptar o layout para celular, tablet e desktop sem perder clareza nem usabilidade. Nesta atividade, voce vai entender como as media queries ajudam a alterar o comportamento do layout conforme a largura da tela, deixando a experiencia mais consistente.",code:`@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
  }
}`,starterCode:`@media (max-width: 768px) {
  .dashboard {
    
  }
}`,instructions:["Crie uma media query para telas menores.","Transforme o layout em uma unica coluna.","Revise o comportamento em celulares."]},{id:"css-6",title:"6. Espacamento vertical e ritmo visual",acceptance:"65.1%",difficulty:"Med.",status:"locked",summary:"Organize a distancia entre secoes para melhorar leitura e hierarquia.",theory:"Nem todo problema visual esta nas cores ou no layout. Muitas vezes, o que torna uma interface confusa e a falta de espacamento consistente. Nesta atividade, voce vai praticar como criar ritmo visual usando margens e paddings para separar blocos de forma harmoniosa.",code:`.secao {
  padding: 24px;
  margin-bottom: 20px;
}`,starterCode:`.secao {
  
}`,instructions:["Adicione espacamento interno a uma secao.","Separe os blocos com margem externa.","Busque uma leitura mais confortavel."]},{id:"css-7",title:"7. Estados de botoes e interacao visual",acceptance:"62.4%",difficulty:"Med.",status:"locked",summary:"Destaque hover, foco e estados importantes para o usuario.",theory:"Interfaces boas nao mostram apenas conteudo: elas respondem ao toque e ao clique do usuario. Estados como `hover`, `focus` e `disabled` ajudam a comunicar o que pode ou nao ser feito. Nesta atividade, voce vai estilizar botoes para deixar a experiencia mais clara e intuitiva.",code:`.botao {
  background: #e7c79f;
}

.botao:hover {
  opacity: 0.9;
}`,starterCode:`.botao {
  
}

.botao:hover {
  
}`,instructions:["Estilize um botao com cor e contraste visivel.","Adicione um efeito de hover.","Pense em como destacar a interacao para o usuario."]},{id:"css-8",title:"8. Sombras, bordas e profundidade",acceptance:"55.9%",difficulty:"Med.",status:"locked",summary:"Crie cards mais elegantes usando contorno, raio e sombra.",theory:"Detalhes visuais como bordas arredondadas, sombras e contornos ajudam a separar elementos na tela e a criar sensacao de profundidade. Esses recursos sao muito usados em dashboards, listas e areas de destaque. Nesta atividade, voce vai aplicar esse acabamento em componentes reais da interface.",code:`.painel {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}`,starterCode:`.painel {
  
}`,instructions:["Adicione borda e cantos arredondados a um bloco.","Use sombra para destacar o componente.","Mantenha um visual limpo e equilibrado."]},{id:"css-9",title:"9. Tema visual de uma trilha",acceptance:"49.8%",difficulty:"Hard",status:"locked",summary:"Combine fundo, acentos e tipografia para uma identidade consistente.",theory:"Um bom tema visual faz o usuario sentir que tudo pertence ao mesmo produto. Cores de destaque, contraste e padrao tipografico precisam conversar entre si. Nesta atividade, voce vai montar um pequeno sistema visual para uma trilha do curso, pensando em consistencia e legibilidade.",code:`:root {
  --bg: #231e1a;
  --panel: #2b241f;
  --accent: #e7c79f;
}`,starterCode:`:root {
  --bg: ;
  --panel: ;
  --accent: ;
}`,instructions:["Defina variaveis para fundo, painel e cor de destaque.","Escolha tons que conversem entre si.","Use contraste suficiente para leitura."]},{id:"css-10",title:"10. Painel completo de roadmap",acceptance:"45.2%",difficulty:"Hard",status:"locked",summary:"Una layout, botoes, cards e responsividade em uma unica interface visual.",theory:"A etapa final da trilha CSS pede que voce combine varios conceitos em uma tela mais completa. Em vez de pensar em propriedades isoladas, o desafio agora e fazer o conjunto funcionar bem: espacamento, contraste, alinhamento, profundidade e adaptacao entre telas. Isso aproxima muito mais a pratica de um projeto real.",code:`.roadmap {
  display: grid;
  gap: 20px;
  padding: 24px;
}

.card {
  border-radius: 24px;
}`,starterCode:`.roadmap {
  
}

.card {
  
}`,instructions:["Monte a estrutura visual de um painel de roadmap.","Aplique estilos coerentes aos cards.","Revise o resultado pensando na experiencia completa."]}]},{id:"javascript",label:"JavaScript",subtitle:"Logica, operadores e condicoes",accent:"from-[#788567] to-[#bcc79b]",accentText:"text-[#dfe7cf]",language:"JavaScript",items:[{id:"js-1",title:"1. Tipos primitivos e variaveis",acceptance:"85.6%",difficulty:"Easy",status:"done",summary:"Diferencie `string`, `number`, `boolean`, `let` e `const`.",theory:"Toda aplicacao em JavaScript comeca com dados. Antes de criar condicoes, funcoes ou interacoes, voce precisa saber trabalhar com valores como textos, numeros e estados verdadeiros ou falsos. Nesta atividade, voce vai entender a diferenca entre `string`, `number` e `boolean`, alem de perceber quando usar `let` e `const` para armazenar informacoes.",code:`const nome = "Ana";
let idade = 17;
const ativo = true;`,starterCode:`const nome = "";
let idade = 0;
const ativo = true;`,instructions:["Crie uma string com um nome.","Declare uma idade numerica usando `let`.","Use um booleano para representar um estado."]},{id:"js-2",title:"2. Entrada e saida de dados",acceptance:"72.5%",difficulty:"Easy",status:"done",summary:"Receba e exiba valores usando `prompt`, `alert` e `console.log`.",theory:"Programas ficam interessantes quando conseguem receber dados e responder ao usuario. A entrada de dados permite capturar informacoes, enquanto a saida mostra resultados ou mensagens. Nesta atividade, voce vai perceber como `prompt` pode solicitar um valor e como `console.log` ajuda a exibir o que foi processado. Esse e um passo essencial para criar interatividade.",code:`const nome = prompt("Digite seu nome");
console.log("Bem-vindo, " + nome);`,starterCode:`const nome = prompt("Digite seu nome");
console.log(nome);`,instructions:["Solicite um dado ao usuario com `prompt`.","Mostre a resposta no console.","Monte uma mensagem personalizada."]},{id:"js-3",title:"3. Operadores aritmeticos",acceptance:"66.4%",difficulty:"Med.",status:"pending",summary:"Resolva expressoes com soma, subtracao, multiplicacao, divisao e modulo.",theory:"Operadores aritmeticos sao a base dos calculos em programacao. Eles aparecem em exercicios simples, jogos, sistemas financeiros e varias situacoes do dia a dia. Nesta atividade, voce vai praticar soma, subtracao, multiplicacao, divisao e resto da divisao, entendendo como combinar numeros e variaveis para produzir resultados.",code:`const a = 10;
const b = 3;
console.log(a + b);
console.log(a % b);`,starterCode:`const a = 10;
const b = 3;

console.log(a + b);`,instructions:["Calcule soma, subtracao e multiplicacao.","Teste a divisao de dois numeros.","Use o operador modulo para descobrir o resto."]},{id:"js-4",title:"4. Operadores relacionais e logicos",acceptance:"59.7%",difficulty:"Med.",status:"pending",summary:"Compare valores e combine condicoes para preparar o uso de `if` e `else`.",theory:"Comparar valores e combinar condicoes e o que permite que um programa tome decisoes inteligentes. Operadores relacionais verificam igualdade, diferenca e ordem entre valores. Operadores logicos unem essas comparacoes em regras mais completas. Nesta atividade, voce vai entender como preparar o terreno para usar estruturas condicionais com muito mais sentido.",code:`const idade = 18;
const matriculado = true;
console.log(idade >= 16 && matriculado);`,starterCode:`const idade = 18;
const matriculado = true;

console.log(idade >= 16 && matriculado);`,instructions:["Teste comparacoes como `>=` e `===`.","Combine condicoes com `&&` e `||`.","Observe os resultados booleanos."]},{id:"js-5",title:"5. Condicional if e else",acceptance:"49.3%",difficulty:"Hard",status:"locked",summary:"Controle o caminho do programa com base em regras e resultados de comparacoes.",theory:"Com `if` e `else`, o programa deixa de executar sempre o mesmo caminho e passa a reagir a regras. Essa e uma das ideias mais importantes da programacao, porque permite criar comportamentos diferentes para situacoes diferentes. Nesta atividade, voce vai usar comparacoes e condicoes para decidir o que deve acontecer em cada caso, aproximando o codigo de problemas reais.",code:`if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Revisar conteudo");
}`,starterCode:`const nota = 8;

if (nota >= 7) {
  
} else {
  
}`,instructions:["Crie uma regra de aprovacao com `if`.","Defina um caminho alternativo com `else`.","Exiba mensagens diferentes em cada caso."]},{id:"js-6",title:"6. Conversao e manipulacao de entradas",acceptance:"56.6%",difficulty:"Med.",status:"locked",summary:"Transforme textos em numeros e prepare dados antes de calcular.",theory:"Quando o usuario digita um valor, ele nem sempre chega no formato ideal para o programa. Muitas vezes e preciso converter ou ajustar a entrada antes de usala em contas e condicoes. Nesta atividade, voce vai praticar a leitura de dados e a conversao para tipos adequados.",code:`const idadeTexto = prompt("Digite sua idade");
const idade = Number(idadeTexto);
console.log(idade + 1);`,starterCode:`const valorTexto = prompt("Digite um numero");

console.log(valorTexto);`,instructions:["Receba um valor digitado pelo usuario.","Converta esse valor para numero.","Use o resultado em uma operacao simples."]},{id:"js-7",title:"7. Estruturas com else if",acceptance:"52.8%",difficulty:"Med.",status:"locked",summary:"Crie multiplos caminhos para classificar resultados e situacoes.",theory:"Nem sempre existem apenas dois cenarios possiveis. Em muitos problemas, o programa precisa decidir entre varias faixas ou categorias. O `else if` permite criar esse fluxo intermediario de forma organizada. Nesta atividade, voce vai classificar resultados com mais de duas possibilidades.",code:`if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else {
  console.log("Revisar");
}`,starterCode:`const nota = 7;

if (nota >= 9) {
  
} else if (nota >= 7) {
  
} else {
  
}`,instructions:["Use `if`, `else if` e `else` no mesmo fluxo.","Crie pelo menos tres resultados diferentes.","Exiba uma mensagem para cada faixa."]},{id:"js-8",title:"8. Funcoes para reutilizar logica",acceptance:"47.1%",difficulty:"Hard",status:"locked",summary:"Agrupe instrucoes em funcoes simples para evitar repeticao.",theory:"Funcoes servem para organizar o codigo em blocos reaproveitaveis. Em vez de repetir a mesma logica varias vezes, voce pode dar um nome a ela e executa-la quando precisar. Nesta atividade, voce vai criar uma funcao simples que recebe dados e devolve um resultado util.",code:`function saudacao(nome) {
  return "Ola, " + nome;
}

console.log(saudacao("Ana"));`,starterCode:`function saudacao(nome) {
  
}

console.log(saudacao(""));`,instructions:["Crie uma funcao com um parametro.","Retorne uma mensagem baseada no valor recebido.","Chame a funcao e mostre o resultado."]},{id:"js-9",title:"9. Arrays e listas de atividades",acceptance:"43.9%",difficulty:"Hard",status:"locked",summary:"Guarde varias informacoes em uma lista para percorrer depois.",theory:"Arrays permitem armazenar varios valores dentro de uma unica variavel. Isso e muito util quando voce trabalha com listas de aulas, nomes de usuarios ou resultados. Nesta atividade, voce vai criar um array simples e acessar seus itens para entender como manipular colecoes de dados.",code:`const trilhas = ["HTML", "CSS", "JavaScript"];
console.log(trilhas[0]);
console.log(trilhas.length);`,starterCode:`const trilhas = [];

console.log(trilhas);`,instructions:["Crie um array com pelo menos tres itens.","Acesse um item da lista pelo indice.","Mostre o tamanho total do array."]},{id:"js-10",title:"10. Logica final de uma atividade interativa",acceptance:"39.8%",difficulty:"Hard",status:"locked",summary:"Una entrada, calculo e decisao para simular um desafio real de plataforma.",theory:"Na etapa final, a ideia e combinar varios fundamentos em um pequeno fluxo completo. O usuario informa um dado, o programa processa esse valor e depois decide qual resposta mostrar. Esse tipo de encadeamento aparece o tempo todo em sistemas reais e ajuda a consolidar a base da logica de programacao.",code:`const nota = Number(prompt("Digite a nota"));

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reforcar estudos");
}`,starterCode:`const valor = Number(prompt("Digite um valor"));

if (valor > 0) {
  
} else {
  
}`,instructions:["Leia um valor com `prompt`.","Use uma condicao para decidir a resposta.","Mostre o resultado final no console."]}]}];function b(a){return a==="Easy"?"text-[#9fcfc0]":a==="Hard"?"text-[#d79486]":"text-[#d7ba83]"}function x(a){return a==="done"?"Concluída":a==="locked"?"Bloqueada":"Disponível"}function g(a){return a==="done"?"border border-emerald-400/35 bg-emerald-500/12 text-emerald-300":a==="locked"?"border border-rose-400/30 bg-rose-500/12 text-rose-300":"border border-amber-300/35 bg-amber-400/12 text-amber-200"}function C(a,l){var h;if(/^\s*<!DOCTYPE/i.test(a)){const p=a.match(/^(\s*)(<!DOCTYPE)(\s+)(html)(>)$/i);return p?e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e9ddcf]",children:p[1]}),e.jsx("span",{className:"text-[#c586c0]",children:p[2]}),e.jsx("span",{className:"text-[#e9ddcf]",children:p[3]}),e.jsx("span",{className:"text-[#4ec9b0]",children:p[4]}),e.jsx("span",{className:"text-[#808080]",children:p[5]})]},l):e.jsx("span",{className:"text-[#9cdcfe]",children:a},l)}const i=((h=a.match(/^\s*/))==null?void 0:h[0])||"",n=a.trim(),u=n.startsWith("</"),c=n.endsWith("/>"),t=n.match(/^<\/?([^\s/>]+)(.*?)(\/?)>$/);if(!t)return e.jsx("span",{className:"text-[#9cdcfe]",children:a},l);const[,m,o,r]=t,f=[],s=/([:@\w-]+)(=)("[^"]*"|'[^']*')?/g;let d;for(;(d=s.exec(o))!==null;)f.push({name:d[1],equal:d[2]||"",value:d[3]||""});return e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e9ddcf]",children:i}),e.jsx("span",{className:"text-[#808080]",children:u?"</":"<"}),e.jsx("span",{className:"text-[#569cd6]",children:m}),f.map((p,y)=>e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e9ddcf]",children:" "}),e.jsx("span",{className:"text-[#9cdcfe]",children:p.name}),e.jsx("span",{className:"text-[#d4d4d4]",children:p.equal}),e.jsx("span",{className:"text-[#ce9178]",children:p.value})]},`${l}-attr-${y}`)),c||r?e.jsx("span",{className:"text-[#808080]",children:" /"}):null,e.jsx("span",{className:"text-[#808080]",children:">"})]},l)}function q(a){const l=a.split(`
`);return e.jsx("code",{className:"block",children:l.map((i,n)=>{var m;const u=i.trim(),c=((m=i.match(/^\s*/))==null?void 0:m[0])||"";if(!u)return e.jsx("div",{className:"whitespace-pre",children:i},`${n}-empty`);if(u.endsWith("{")){const o=u.slice(0,-1).trim();return e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e9ddcf]",children:c}),e.jsx("span",{className:"text-[#d7ba83]",children:o}),e.jsxs("span",{className:"text-[#808080]",children:[" ","{"]})]},`${n}-${i}`)}if(u==="}")return e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e9ddcf]",children:c}),e.jsx("span",{className:"text-[#808080]",children:"}"})]},`${n}-${i}`);const t=u.match(/^([-\w]+)(:\s*)(.+?)(;?)$/);return t?e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e9ddcf]",children:c}),e.jsx("span",{className:"text-[#9cdcfe]",children:t[1]}),e.jsx("span",{className:"text-[#d4d4d4]",children:t[2]}),e.jsx("span",{className:"text-[#ce9178]",children:t[3]}),e.jsx("span",{className:"text-[#808080]",children:t[4]})]},`${n}-${i}`):e.jsx("div",{className:"whitespace-pre text-[#e9ddcf]",children:i},`${n}-${i}`)})})}function M(a){const l=a.split(`
`);return e.jsx("code",{className:"block",children:l.map((i,n)=>{const u=i.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g);return e.jsx("div",{className:"whitespace-pre",children:u.map((c,t)=>c?/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')$/.test(c)?e.jsx("span",{className:"text-[#ce9178]",children:c},`${t}-${c}`):c.split(/\b(const|let|if|else|true|false|prompt|console)\b/g).map((o,r)=>o?/^(const|let|if|else|true|false)$/.test(o)?e.jsx("span",{className:"text-[#c586c0]",children:o},`${t}-${r}-${o}`):/^(prompt|console)$/.test(o)?e.jsx("span",{className:"text-[#4ec9b0]",children:o},`${t}-${r}-${o}`):o.split(/(\b\d+\b)/g).map((s,d)=>s?/^\d+$/.test(s)?e.jsx("span",{className:"text-[#b5cea8]",children:s},`${t}-${r}-${d}-${s}`):e.jsx("span",{className:"text-[#e9ddcf]",children:s},`${t}-${r}-${d}-${s}`):null):null):null)},`${n}-${i}`)})})}function T(a,l){if(l==="css")return q(a);if(l==="javascript")return M(a);const i=a.split(`
`);return e.jsx("code",{className:"block",children:i.map((n,u)=>{const c=n.split(/(<\/?[^>]+>)/g);return e.jsx("div",{className:"whitespace-pre",children:c.map((t,m)=>/^\s*<!DOCTYPE/i.test(t)||/^(\s*)<\/?[^>]+>$/.test(t)?C(t,`${m}-${t}`):e.jsx("span",{className:"text-[#e9ddcf]",children:t},`${m}-${t}`))},`${u}-${n}`)})})}function $(a){return a==="css"?"style.css":a==="javascript"?"script.js":"index.html"}function E({user:a,progressVersion:l,onStartActivity:i}){const[n,u]=v.useState("html"),[c,t]=v.useState("html-1"),m=v.useMemo(()=>j(N,a),[l,a]),o=v.useMemo(()=>m.find(s=>s.id===n)||m[0],[n,m]),r=v.useMemo(()=>o.items.find(s=>s.id===c)||o.items[0],[o,c]),f=s=>{var h;const d=m.find(p=>p.id===s);u(s),t(((h=d==null?void 0:d.items[0])==null?void 0:h.id)||"")};return e.jsxs("section",{className:"page-enter space-y-6",children:[e.jsxs("div",{className:"interactive-card surface-enter rounded-[2rem] border border-black/10 bg-[#221d19] px-6 py-6 text-[#f5efe6] shadow-[0_20px_60px_rgba(34,29,25,0.24)] sm:px-8",children:[e.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.28em] text-[#c7b7a3]",children:"Roadmaps"}),e.jsx("h2",{className:"mt-3 text-3xl font-semibold sm:text-4xl",children:a!=null&&a.name?`${a.name}, escolha sua trilha.`:"Escolha sua trilha."}),e.jsx("p",{className:"mt-3 max-w-3xl text-sm leading-6 text-[#d8ccbf]",children:"Explore sua jornada de aprendizado por trilhas e avance passo a passo."})]}),e.jsx("div",{className:"rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#cdbdaa]",children:"3 trilhas disponíveis"})]}),e.jsx("div",{className:"mt-6 flex flex-wrap gap-3",children:m.map(s=>{const d=s.id===o.id;return e.jsx("button",{type:"button",onClick:()=>f(s.id),className:`glass-button rounded-full px-5 py-3 text-sm font-medium transition ${d?`bg-gradient-to-r ${s.accent} text-[#1e1915]`:"border border-white/10 bg-white/5 text-[#e4dacd] hover:bg-white/10"}`,children:s.label},s.id)})})]}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]",children:[e.jsxs("div",{className:"interactive-card surface-enter surface-enter-delay-1 h-full rounded-[2rem] border border-black/10 bg-[#1d1916] p-3 shadow-[0_20px_60px_rgba(34,29,25,0.24)]",children:[e.jsx("div",{className:"rounded-[1.4rem] border border-white/5 bg-[#28221e] px-5 py-4 text-[#f5efe6]",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs uppercase tracking-[0.22em] ${o.accentText}`,children:o.label}),e.jsx("h3",{className:"mt-1 text-2xl font-semibold",children:o.subtitle})]}),e.jsxs("div",{className:"text-sm text-[#b8aa99]",children:[o.items.length," atividades."]})]})}),e.jsx("div",{className:"mt-3 space-y-2",children:o.items.map(s=>{const d=s.id===r.id;return e.jsxs("button",{type:"button",onClick:()=>t(s.id),className:`interactive-row grid w-full grid-cols-[minmax(0,1fr)_90px_80px_100px] items-center gap-3 rounded-2xl px-5 py-4 text-left transition ${d?"bg-[#332c27] text-[#fffaf2]":"bg-[#241f1b] text-[#e4dacd] hover:bg-[#2c2622]"}`,children:[e.jsx("div",{className:"min-w-0",children:e.jsx("p",{className:"truncate text-base font-semibold",children:s.title})}),e.jsx("div",{className:"text-sm text-[#c2b09b]",children:s.acceptance}),e.jsx("div",{className:`text-sm font-semibold ${b(s.difficulty)}`,children:s.difficulty}),e.jsx("div",{className:"flex justify-end",children:e.jsx("span",{className:`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${g(s.status)}`,children:x(s.status)})})]},s.id)})})]}),e.jsxs("article",{className:"interactive-card surface-enter surface-enter-delay-2 flex min-h-[42rem] flex-col rounded-[2rem] border border-black/10 bg-[#231e1a] p-6 text-[#f5efe6] shadow-[0_20px_60px_rgba(34,29,25,0.24)]",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:`rounded-full bg-gradient-to-r ${o.accent} px-3 py-1 text-xs font-semibold text-[#1e1915]`,children:o.label}),e.jsx("span",{className:`rounded-full bg-white/5 px-3 py-1 text-xs font-semibold ${b(r.difficulty)}`,children:r.difficulty}),e.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${g(r.status)}`,children:x(r.status)})]}),e.jsx("div",{className:"mt-5 min-h-[5.5rem]",children:e.jsx("h3",{className:"text-3xl font-semibold leading-tight",children:r.title})}),e.jsxs("section",{className:"mt-3 min-h-[7rem]",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Resumo rápido"}),e.jsx("p",{className:"mt-3 text-sm leading-6 text-[#ddd1c5]",children:r.summary})]}),e.jsxs("section",{className:"mt-8 flex-1",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Preview"}),e.jsxs("div",{className:"code-shell mt-3 overflow-hidden rounded-2xl border border-white/5 bg-[#181411]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 bg-[#211b17] px-4 py-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#ff6f61]"}),e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#f5c04f]"}),e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#67c587]"})]}),e.jsx("span",{className:"text-xs font-medium tracking-[0.18em] text-[#bfae99]",children:$(o.id)})]}),e.jsx("pre",{className:"min-h-[18rem] overflow-auto p-4 text-sm leading-6 text-[#e9ddcf]",children:T(r.code,o.id)})]})]}),e.jsxs("div",{className:"mt-8 flex flex-wrap gap-3 pt-2",children:[e.jsx("button",{type:"button",className:`glass-button rounded-full px-5 py-3 text-sm font-semibold transition ${r.status==="locked"?"cursor-not-allowed bg-white/10 text-[#978877]":`bg-gradient-to-r ${o.accent} text-[#1e1915] hover:opacity-90`}`,disabled:r.status==="locked",onClick:()=>i==null?void 0:i(o,r),children:r.status==="done"?"Revisar atividade":r.status==="locked"?"Desbloqueie etapas anteriores.":"Começar atividade"}),e.jsxs("div",{className:"rounded-full border border-white/10 px-4 py-3 text-sm text-[#baa997]",children:["Taxa de acerto: ",r.acceptance,"."]})]})]})]})]})}export{E as default};
