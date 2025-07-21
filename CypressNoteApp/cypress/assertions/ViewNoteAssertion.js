class ViewNoteAssertions {
  assertNoteTitle(expectedTitle) {
    cy.get('[data-testid="note-card-title"]')
      .should("be.visible")
      .and("include.text", expectedTitle);
  }
}

export default new ViewNoteAssertions();
