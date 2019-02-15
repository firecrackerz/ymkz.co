describe('/', () => {
  it('Visits the / and take a screenshot', () => {
    cy.visit('/')

    if (process.env.CI === 'true') {
      cy.percySnapshot()
    } else {
      cy.screenshot()
    }
  })
})
