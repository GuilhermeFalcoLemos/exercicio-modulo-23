/// <reference types="cypress" />

describe('Reservas - cenário negativo', () => {

  beforeEach(() => {
    cy.loginToken(Cypress.env('TOKEN_COMUM'))
  })

  it('Deve tratar erro da API de reservas', () => {

    cy.intercept('GET', '**/api/reservations', {
      statusCode: 500,
      body: {
        mensagem: 'Erro interno do servidor'
      }
    }).as('erroReservas')

    cy.visit('dashboard.html')

    cy.wait('@erroReservas')
      .its('response.statusCode')
      .should('eq', 500)
    cy.get('h4').should('contain', 'Olá')
  })
})