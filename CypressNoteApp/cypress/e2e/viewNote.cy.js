import Dashboard from '../pages/Dashboard';
import ViewNoteAssertion from '../assertions/ViewNoteAssertion';

describe('View Note Functionality', () => {
  beforeEach(function () {
    cy.fixture("notes").as('notesData');
    cy.fixture("loginUser").then((data) => {
      const user = data.existingUser;
      cy.Login(user.email, user.password);
    });
  });

  it('Should view note', function () {
    const note = this.notesData.noteDataHome;
    Dashboard.getNoteActionButton(note.title, 'View').first().click();
    ViewNoteAssertion.assertNoteTitle(note.title);
  });
    
});
