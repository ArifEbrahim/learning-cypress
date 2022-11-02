///<reference types="cypress"/>

describe('habits page', () => {
  
  beforeEach(() => {
    cy.visit('/habits')
  })

  it('should display modal when add button is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.contains('Add a new habit').should('be.visible')
  })

  it('should display habit card when new habit is added', () => {
    // cy.get('#habit-add-btn').click()
    cy.contains('button', 'Add').click()
    cy.get("input").type('hello')
    cy.contains('button', 'Save Changes').click()
    cy.contains('hello').should('be.visible').and('have.class', "HabitCard__habit-container")
  })

  it('should toggle icon when habit card is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.get("input").type('hello')
    cy.contains('button', 'Save Changes').click()
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible')
    cy.contains('hello').click()
    cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible')
  })

  it('modal dissapears when user clicks close button', () => {
    cy.contains('button', 'Add').click()
    cy.contains('Add a new habit').should('be.visible')
    cy.contains('Close').click()
    cy.contains('Add a new habit').should('not.exist')
  })
})

