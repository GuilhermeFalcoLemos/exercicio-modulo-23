describe('Reservas - cenário positivo', () => {

  beforeEach(() => {
    cy.loginToken(Cypress.env('TOKEN_COMUM'))
  })

  it('Deve carregar reservas com sucesso', () => {

    cy.intercept('GET', '**/api/reservations', {
      statusCode: 200,
      body: []
    }).as('listarReservas')

    cy.visit('dashboard.html')

    cy.wait('@listarReservas')
      .its('response.statusCode')
      .should('eq', 200)

    cy.get('h4').should('contain', 'Olá')
  })
})