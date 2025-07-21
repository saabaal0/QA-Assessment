class LoginAssertion {
  assertSuccessfulLogin() {
    cy.get('[data-testid="logout"]').should("be.visible");
    cy.get('[data-testid="home"]').should("be.visible");
  }

  assertEmptyLogin() {
    cy.get('[data-testid="login-submit"]').click();
    cy.get('.invalid-feedback').should("be.visible");
  }
  assertFailedLogin() {
    cy.get('[data-testid="alert-message"]').should("be.visible").and("contain", "Incorrect email address or password");
  }
  assertInvalidEmail() {
    cy.get('.invalid-feedback').should("be.visible")
  }
}
export default new LoginAssertion();
