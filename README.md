# 💰 Query Money

O **Query Money** é um sistema de gerenciamento financeiro pessoal moderno e intuitivo, desenvolvido para ajudar usuários a monitorarem suas finanças, gerenciarem gastos diários e fixos, acompanharem investimentos e alcançarem metas financeiras de forma clara e organizada.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores e mais modernas tecnologias do ecossistema de desenvolvimento web:

* **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Banco de Dados & ORM:** [Prisma ORM](https://www.prisma.io/)
* **Componentes de UI:** Componentes customizados baseados no [shadcn/ui](https://ui.shadcn.com/) (como Dialog, Dropdown, Select, Progress)

---

## 🛠️ Funcionalidades Principais

* **Dashboard Central:** Painel geral para visualização rápida do status financeiro atual, com barras de progresso financeiro e cálculo do valor restante do mês.
* **Gestão de Metas Financeiras:** * Criação, edição e encerramento de metas de economia.
    * Acompanhamento visual via barras de progresso dinâmicas.
    * Páginas de detalhes específicas para cada meta (`[id]`).
* **Fluxo de Caixa & Transações:** Histórico e categorização de entradas e saídas.
* **Filtros Inteligentes:** Navegação facilitada e filtragem de dados por Mês e Ano.
* **API Interna (Route Handlers):** Endpoints integrados para lidar com contas fixas, dados do dashboard, investimentos e metas diretamente no Next.js.

---

## 📂 Estrutura de Pastas Relevante

A arquitetura do projeto segue o padrão de responsabilidade única e modularidade do Next.js:

```text
query-money/
├── app/                  # Rotas, Páginas e API Endpoints (App Router)
│   ├── (main)/           # Grupo de rotas principais da aplicação
│   │   ├── dashboard/    # Visão geral dos dados
│   │   ├── metas/        # Módulo de metas com componentes locais dedicados
│   │   └── transacoes/   # Histórico de transações
│   └── api/              # Endpoints back-end da aplicação (Prisma/DB)
├── components/           # Componentes globais reutilizáveis
│   ├── header/           # Cabeçalho global com filtro de data
│   ├── sidebar/          # Barra lateral com resumos financeiros
│   └── ui/               # Componentes atômicos de interface (Botões, Modais, etc.)
├── config/               # Configurações globais (Menu de navegação)
├── lib/                  # Utilitários e cliente do Prisma
└── prisma/               # Schemas de banco de dados e migrações

```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* Um banco de dados de sua escolha (PostgreSQL, MySQL, SQLite, etc.) configurado.

### Passo a Passo

1. **Clonar o Repositório:**
```bash
git clone [https://github.com/seu-usuario/query-money.git](https://github.com/seu-usuario/query-money.git)
cd query-money

```


2. **Instalar as Dependências:**
```bash
npm install

```


3. **Configurar as Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão do seu banco de dados (exemplo baseado no Prisma):
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/query_money?schema=public"

```


4. **Rodar as Migrações do Banco de Dados:**
```bash
npx prisma migrate dev

```


5. **Iniciar o Servidor de Desenvolvimento:**
```bash
npm run dev

```


Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
