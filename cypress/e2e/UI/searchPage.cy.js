describe('Search page', () => {
    beforeEach(() => {
      cy.login('sandrine@email.com', '1234') 
    })

  it('should be able to add item to cart from search', () => {    
    cy.addItemFromSearch('Bespoke Gold Bacon')
    cy.get(searchPage.cartProductName).should('contain', 'Bespoke Gold Bacon')
    })

  it('should be able to add item to cart from main list', () => {
    cy.addItemFromMainList('Tasty Bronze Pants')
    cy.get(searchPage.cartProductName).should('contain', 'Tasty Bronze Pants')
  })
})



export const searchPage = {
  cartProductName: '[data-testid="shopping-cart-product-name"]'
}