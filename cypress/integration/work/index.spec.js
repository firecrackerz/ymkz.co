describe('/work', () => {
  it('Visits the /work and take a screenshot', () => {
    cy.visit('/work')

    if (process.env.CI === 'true') {
      cy.percySnapshot()
    } else {
      cy.screenshot()
    }
  })
})
