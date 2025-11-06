describe('Search page', () => {
    beforeEach(() => {
      cy.login('sandrine@email.com', '1234') 
    })

  it('should be able to add item to cart from search', () => {    
    cy.addItemFromSearch('Bespoke Gold Bacon')
    })

  it('should be able to add item to cart from main list', () => {
    cy.addItemFromMainList('Tasty Bronze Pants')
  })
})