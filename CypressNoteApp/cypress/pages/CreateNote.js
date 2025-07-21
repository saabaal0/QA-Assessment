class AddNotePage {
   getCategoryDropdown() {
    return cy.get('[data-testid="note-category"]'); 
  }

   getCompletedCheckbox() {
    return cy.get('[data-testid="note-completed"]'); 
  }

   getTitleInput() {
    return cy.get('[data-testid="note-title"]'); 
  }

   getDescriptionInput() {
    return cy.get('[data-testid="note-description"]'); 
  }

   getCreateButton() {
    return cy.get('button[data-testid="note-submit"]');
  }

   getCancelButton() {
    return cy.get('button[data-testid="note-cancel"]');
  }

   selectCategory(category) {
    this.getCategoryDropdown().select(category);
  }

   fillTitle(title) {
    this.getTitleInput().clear().type(title);
  }

   fillDescription(description) {
    this.getDescriptionInput().clear().type(description);
  }

   toggleCompleted() {
    this.getCompletedCheckbox().click();
  }

   clickCreate() {
    this.getCreateButton().click();
  }

   clickCancel() {
    this.getCancelButton().click();
  }
}

export default new AddNotePage();
