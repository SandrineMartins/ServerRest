# K2 – Suite de Testes Cypress

Este projeto contém testes end-to-end (UI) e de API para o Serverest. As instruções abaixo explicam como preparar o ambiente, configurar variáveis sensíveis e executar cada grupo de testes.

## Pré-requisitos
- Node.js 18+ (recomendado 20+)
- npm 9+

## Instalação
```bash
npm install
```

## Configuração de ambiente (`.env`)
Os testes de API dependem de um usuário administrador para obter o token de autenticação. Crie um arquivo `.env` na raiz do projeto contendo:
```ini
EMAIL=seu-email-admin@example.com
PASSWORD=sua-senha
```

> **Por que apenas as credenciais de API estão no `.env`?**  
> Optei por deixar as credenciais da UI hardcoded nos testes e mover apenas as de API para o `.env` para demonstrar as duas abordagens: variáveis de ambiente para dados sensíveis e valores literais quando queremos mostrar o fluxo completo sem depender de configuração externa.

## Execução dos testes

### UI
Roda cenários de criação de conta e busca de produtos via interface.
```bash
npx cypress run --spec "cypress/e2e/UI/**/*.cy.js"
```
Ou abra o Runner interativo:
```bash
npx cypress open --e2e
```

### API
Garanta que o `.env` esteja preenchido com um usuário administrador válido e execute:
```bash
npx cypress run --spec "cypress/e2e/API/**/*.cy.js"
```

## Estrutura dos testes
- `cypress/e2e/UI/createAccount.cy.js`: fluxo de cadastro pela UI.
- `cypress/e2e/UI/searchPage.cy.js`: testes de busca/adicionar ao carrinho.
- `cypress/e2e/API/ApiUsers.cy.js`: criação e validação de usuários pela API.

## 🧠 Boas práticas aplicadas
- Separação clara entre testes de UI e API
- Uso de custom commands reutilizáveis
- Armazenamento seguro de credenciais com dotenv
- Estrutura modular e escalável
- Asserções claras tanto nos testes quanto nos comandos
- Padrão de código consistente e fácil de manter

## Dicas adicionais
- Caso precise inspecionar os comandos personalizados, confira `cypress/support/commands.js`.
- Para alternar usuários rapidamente, atualize apenas o `.env`; não há necessidade de editar os testes.
