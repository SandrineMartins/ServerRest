import { faker } from '@faker-js/faker'

const name = faker.internet.name()
const email = faker.internet.email()
const password = faker.internet.password()

describe('Create account', () => {
  
  it('should redirect user to home page after a successful registration', () => {
    cy.createUser(name, email, password)
  })
})

