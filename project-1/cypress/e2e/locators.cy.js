///<reference types="cypress"/>

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it('locating elements with get', () => {
    // get all elements by tag name
    cy.get('button')

    // get all elements by class
    cy.get('.btn-with-class')

    // get all elements with specific classes (exact match)
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    // get all elemnts by id
    cy.get("#btn-with-id")

    // get all elements by specific attribute
    cy.get("[type='submit']")

    // get all elements by tag name and class
    cy.get("button.Elements-btn")

    // get all elements by tag name & class & id
    cy.get("button.Elements-btn#btn-with-id")

    // get all elements by tag name & class & type attribute
    cy.get("button.Elements-btn[type='submit']")

    // get all elements with specific data test id
    cy.get("[data-cy='btn-id-1']")
    cy.getByTestId('btn-id-1')
  })

  it('locating elements with contains', () => {
    // get element by text
    cy.contains('Unique Text')

    // get element by text
    cy.contains('Not Unique Text')

    // with a selector
    cy.contains("[type='submit']", "Not Unique Text")

    cy.get("[type='submit']").contains("Not Unique Text")

    cy.contains('form', "Not Unique Text")
  })

  it('locating elements with find', () => {
    cy.get('#form-1').find('.btn-1')
  })
})