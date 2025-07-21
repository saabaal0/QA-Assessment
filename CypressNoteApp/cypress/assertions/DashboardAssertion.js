import { assert } from "console";

class DashboardAssertion {
  assertLogout() {
    cy.get('[data-testid="logout"]').should("not.exist");
    cy.get('[data-testid="open-login-view"]').should("be.visible");
  }
  assertAddNoteButtonVisible() {
    cy.get('button[data-testid="add-new-note"]').should("be.visible");
  }
  assertCategoryTabsVisible() {
    const categories = ["all", "home", "work", "personal"];
    categories.forEach((category) => {
      cy.get(`[data-testid="category-${category}"]`).should("be.visible");
    });
  }
  assertProfileButtonVisible() {
    cy.get('[data-testid="profile"]').should("be.visible");
  }
  assertLogoutButtonVisible() {
    cy.get('[data-testid="logout"]').should("be.visible");
  }
  assertNoteDeletion(noteTitle) {
    cy.get('[data-testid="note-card-title"]').should("not.contain", noteTitle);
  }
  assertNoteStatusToggled(noteTitle) {
    cy.get('[data-testid="note-card-title"]').contains(noteTitle).should('have.css', 'background-color', 'rgba(40, 46, 41, 0.6)');
    cy.get('[data-testid="toggle-note-switch"]').should("be.checked");
  }
}
export default new DashboardAssertion();
