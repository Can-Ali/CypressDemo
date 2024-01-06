describe('loginFunction', () => {
  it('User Login with Valid credentials', () => {
    cy.visit('/')
    cy.login("acan", "AcCollabrium!")
  })
})