class RegisterPage {
  visit() {
    cy.visit('/register');
  }

  fillEmail(email) {
    cy.get('input[data-testid="register-email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[data-testid="register-password"]').type(password);
  }

  fillName(name) {
    cy.get('input[data-testid="register-name"]').type(name);
  }

  fillConfirmPassword(confirmPassword) {
    cy.get('input[data-testid="register-confirm-password"]').type(confirmPassword);
  }

  clickRegister() {
    cy.get('button[data-testid="register-submit"]').click();
  }

}

export default new RegisterPage();
