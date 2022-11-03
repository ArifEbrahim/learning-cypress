///<reference types="cypress"/>

describe("Rewards", () => {
  beforeEach(() => {
    cy.visit("/rewards")
  })

  it("should display a list of rewards", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json"
    })

    cy.contains('250 points for exercising for 3 straight days').should('be.visible')
  })
})
