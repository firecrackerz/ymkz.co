describe('/about', () => {
  it('Visits the /about and take a screenshot', () => {
    cy.visit('/about')
    cy.screenshot()

    if (Cypress.env('PERCY') === true) {
      cy.percySnapshot()
    }
  })
})
