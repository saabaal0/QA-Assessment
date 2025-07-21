class DashboardPage {
  visit() {
    cy.visit('/notes/app');
  }

  getAddNoteButton() {
    return cy.get('button[data-testid="add-new-note"]');
  }

  getCategoryTab(category) {
    return cy.get(`input[data-testid="category-${category}"]`);
  }

  getNoteCardByTitle(title) {
    return cy.contains('[data-testid="note-card-title"]', title).parent();
  }

  getProfileButton() {
    return cy.get('[data-testid="profile"]');
  }

  getLogoutButton() {
    return cy.get('[data-testid="logout"]');
  }

  getSearchInput() {
    return cy.get('[data-testid="search-input"]');
  }
  getSearchButton() {
    return cy.get('[data-testid="search-btn"]');
  }

  getNoteStatus(title) {
    return this.getNoteCardByTitle(title).find('[data-testid="toggle-note-switch"]');
  }

  getNoteActionButton(title, action) {
    return this.getNoteCardByTitle(title).contains(action);
  }
  confirmDelete(){
    return cy.get('[data-testid="note-delete-confirm"]')
  }
  search(noteTitle){
    return this.getSearchInput().type(noteTitle);
  }
}

export default new DashboardPage();
