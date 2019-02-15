describe('/about', () => {
  it('Visits the /about and take a screenshot', () => {
    cy.visit('/about')

    if (process.env.CI === 'true') {
      cy.percySnapshot()
    } else {
      cy.screenshot()
    }
  })
})
