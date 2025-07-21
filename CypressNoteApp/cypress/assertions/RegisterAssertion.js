class RegisterAssertions {
  assertSuccessMessage() {
    cy.contains('User account created successfully').should('be.visible');
  }

  assertErrorMessage() {
    cy.get('[data-testid="alert-message"]').should('be.visible')
      .and('include.text', 'account already exists');
  }
  assertValidationErrorMessage() {
     cy.get('.invalid-feedback').should('be.visible')
      
  }

}

export default new RegisterAssertions();
