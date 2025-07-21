class LoginPage{
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('input[data-testid="login-email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[data-testid="login-password"]').type(password);
  }

  clickLogin() {
    cy.get('button[data-testid="login-submit"]').click();
  }
}

export default new LoginPage();
