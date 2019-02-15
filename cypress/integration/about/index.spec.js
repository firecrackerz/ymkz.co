describe('/about', () => {
  it('Visits the /about and take a screenshot', () => {
    cy.visit('/about')
    cy.screenshot()

    if (process.env.CI === true) {
      cy.percySnapshot()
    }
  })
})
