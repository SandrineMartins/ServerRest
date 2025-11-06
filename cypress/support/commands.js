Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="shopping-cart-button"]').should(
    'be.visible')
})

Cypress.Commands.add('addItemFromMainList', (productName) => {
    cy.contains('.card-body .card-title', productName)
        .parents('.card-body')
        .find('[data-testid="adicionarNaLista"]')
        .click()
    cy.contains('Lista de Compras').should('be.visible')    
})

Cypress.Commands.add('addItemFromSearch', (productName) => {
    cy.get('[data-testid="pesquisar"]').type(productName)
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get('.card-title').should('have.text', productName)
    cy.get('[data-testid="adicionarNaLista"]').click()
    cy.contains('Lista de Compras').should('be.visible')
})

Cypress.Commands.add('createUser', (name, email, password) => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="cadastrar"]').click()
})



// ------------------- API Custom Commands -----------------------

Cypress.Commands.add('postUser', ({ nome, email, password, administrador }, options = {}) => {
  cy.request({
    method: 'POST',
    url: '/usuarios',
    failOnStatusCode: options.failOnStatusCode ?? true,
    body: {
      nome,
      email,
      password,
      administrador
    }
  })
})

Cypress.Commands.add('getUserById', (userId, options = {}) => {
  cy.request({
    method: 'GET',
    url: `/usuarios/${userId}`,
    failOnStatusCode: options.failOnStatusCode ?? true
  })
})
