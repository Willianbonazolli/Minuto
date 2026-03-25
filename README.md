# Minuto

Uma plataforma web para ensino de programação baseada em micro-atividades e progressão estruturada.

---

## Sobre o projeto

O Minuto é uma proposta de um trabalho da Faculdade, onde teriamos que lecionar uma aula sobre devido tema. Minha ideia foi que aprender programação pode ser menos intimidador quando o conteúdo é dividido em pequenas partes. O nome é uma referência direta a essa proposta: atividades curtas, objetivas e que respeitam o ritmo de cada pessoa.

A plataforma organiza o aprendizado em trilhas, onde cada atividade precisa ser concluída antes da próxima ser liberada.

Atualmente, o projeto está em fase de desenvolvimento e conta com 3 trilhas iniciais sendo HTML,  CSS e JavaScript.

---

## Como funciona

O usuário se cadastra e escolhe uma trilha de aprendizado. Dentro de cada trilha, as atividades são apresentadas em sequência. Cada atividade contém:

- Instruções passo a passo (em desenvolvimento)
- Um editor de código integrado (em desenvolvimento)
- Uma taxa de acerto da comunidade como referência

O progresso é salvo automaticamente, permitindo que o usuário retorne a qualquer momento de onde parou.

---

## Tecnologias utilizadas

| Frontend | React com Vite |
| Estilização | Tailwind CSS |
| Backend | Node.js com Express |
| Banco de dados | PostgreSQL |
| Autenticação | JWT |
| Deploy | Vercel (frontend) + Railway (backend) + Neon (banco de dados) |

---

## Estrutura do projeto
minuto/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── styles/
│ ├── index.html
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── middleware/
│ ├── migrations/
│ └── package.json
│
└── README.md

---

## Como executar localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL (ou conta no Neon)
- npm ou yarn

### Passos

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/minuto.git
cd minuto
Configure as variáveis de ambiente do backend

Crie um arquivo .env no diretório backend com o seguinte conteúdo:

text
DATABASE_URL=postgresql://usuario:senha@localhost:5432/minuto
JWT_SECRET=minha_chave_secreta_aqui
PORT=3333
Execute as migrations

bash
cd backend
npm install
npm run migrate
Inicie o servidor backend

bash
npm run dev
Em outro terminal, configure e inicie o frontend

bash
cd frontend
npm install
npm run dev
