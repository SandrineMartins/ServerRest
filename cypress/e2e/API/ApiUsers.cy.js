import { faker } from '@faker-js/faker'

describe('POST /usuarios', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()
  const nome = faker.person.fullName()

  it('should create a new user successfully', () => {
    cy.postUser({
      nome,
      email,
      password,
      administrador: 'true'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
      expect(response.body).to.have.property('_id')
    })
  })

  it('should return 400 when email is already registered', () => {
    cy.postUser({
      nome,
      email, 
      password,
      administrador: 'true'
    }, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('Este email já está sendo usado')
    })
  })
})

describe('GET /usuarios{_id}', () => {
  
  it('should return 400 when user is not found', () => {
    cy.getUserById('invalidID123lkju', { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.message).to.eq('Usuário não encontrado')
    })
  })
})