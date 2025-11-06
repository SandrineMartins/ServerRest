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
    cy.get('[data-testid="shopping-cart-product-name"]').should('have.text', `Produto:${productName}`)
})

Cypress.Commands.add('addItemFromSearch', (productName) => {
    cy.get('[data-testid="pesquisar"]').type(productName)
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get('.card-title').should('have.text', productName)
    cy.get('[data-testid="adicionarNaLista"]').click()
    cy.contains('Lista de Compras').should('be.visible')
    cy.get('[data-testid="shopping-cart-product-name"]').should('have.text', `Produto:${productName}`)
})

Cypress.Commands.add('createUser', (name, email, password) => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="shopping-cart-button"]').should(
        'be.visible')
})
