/// <reference types="cypress" />

describe('Dashboard - usando AppActions', () => {

  it('Deve acessar o dashboard sem usar a interface de login', () => {

    cy.loginApp(
      Cypress.env('ADMIN_EMAIL'),
      Cypress.env('ADMIN_SENHA')
    )

    cy.url().should('include', 'dashboard')
  })

})