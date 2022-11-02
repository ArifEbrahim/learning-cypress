///<reference types="cypress"/>

describe('habits page', () => {

  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should show an error if information is missing', () => {
    cy.get("[data-cy='accomplishment-title-input']").type('mr')
    cy.get("textarea").type('hello')
    cy.contains('button', 'Submit Accomplishment').click()
    cy.contains('Complete the items above to continue').should('be.visible')
  })

  it('should display validation component if all information is input', () => {
    cy.get("[data-cy='accomplishment-title-input']").type('mr')
    cy.get("textarea").type('hello')
    cy.get("[type='checkbox']").click()
    cy.contains('button', 'Submit Accomplishment').click()
    cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')
  })

  it('should return to dashboard with empty inputs', () => {
    cy.get("[data-cy='accomplishment-title-input']").type('mr')
    cy.get("textarea").type('hello')
    cy.get("[type='checkbox']").click()
    cy.contains('button', 'Submit Accomplishment').click()
    cy.contains('Go Back').click()
    cy.contains('h2', 'Accomplishment').should('be.visible')
    cy.get("[data-cy='accomplishment-title-input']").should('have.value', '')
    cy.get("textarea").should('have.value', '')
    cy.get("[type='checkbox']").should('not.be.checked')
  })
})