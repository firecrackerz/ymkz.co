describe('/', () => {
  it('Visits the / and take a screenshot', () => {
    cy.visit('/')
    cy.screenshot()

    if (Cypress.env('PERCY') === true) {
      cy.percySnapshot()
    }
  })
})
