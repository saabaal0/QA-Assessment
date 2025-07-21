import createNote from '../pages/CreateNote';
import Dashboard from '../pages/Dashboard';

describe('Create Note Functionality', () => {
    beforeEach(function () {
    cy.fixture("notes").as('notesData');
    cy.fixture("loginUser").then((data) => {
        const user = data.existingUser;
        cy.Login(user.email, user.password);
    });
  });

  it('Create a new note successfully', function() {
    const note = this.notesData.noteDataWork;
    Dashboard.getAddNoteButton().click();
    createNote.selectCategory(note.category);
    createNote.fillTitle(note.title);
    createNote.fillDescription(note.description);
    if(note.status === 'completed') {
        createNote.toggleCompleted();
    }
    createNote.clickCreate();
  });
  
  

});