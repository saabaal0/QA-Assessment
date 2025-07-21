class EditNoteAssertion {
   assertNoteExists(noteTitle) {
     cy.get('[data-testid="note-card-title"]').should('contain', noteTitle);
   }

   assertSuccessfulEdit(noteEdit) {
    cy.get('[data-testid="note-card-description"]').should('contain', noteEdit.description);
   }
}

export default new EditNoteAssertion();
