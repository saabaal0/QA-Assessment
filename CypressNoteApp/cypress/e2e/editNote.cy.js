import EditNoteAssertion from "../assertions/EditNoteAssertion";
import createNote from "../pages/CreateNote";
import Dashboard from "../pages/Dashboard";

describe("Edit Note Functionality", () => {
  beforeEach(function () {
    cy.fixture("notes").as("notesData");
    cy.fixture("loginUser").then((data) => {
      const user = data.existingUser;
      cy.Login(user.email, user.password);
    });
  });

  it("Edit an existing note successfully", function () {
    const note = this.notesData.noteDataWork;
    const noteEdit = this.notesData.noteEdit;

    EditNoteAssertion.assertNoteExists(note.title);
    Dashboard.getNoteActionButton(note.title, "Edit").click();
    createNote.selectCategory(noteEdit.category);
    createNote.fillTitle(note.title);
    createNote.fillDescription(noteEdit.description);
    if (noteEdit.status === "completed") {
      createNote.toggleCompleted();
    }
    createNote.clickCreate();
    EditNoteAssertion.assertSuccessfulEdit(noteEdit);
  });
  
});
