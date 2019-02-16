describe('/work', () => {
  it('Visits the /work and take a screenshot', () => {
    cy.visit('/work')
    cy.screenshot()

    if (Cypress.env('PERCY') === true) {
      cy.percySnapshot()
    }
  })
})
