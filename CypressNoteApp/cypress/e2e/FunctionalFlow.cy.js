import Dashboard from "../pages/Dashboard";
import createNote from "../pages/CreateNote";
import DashboardAssertion from "../assertions/DashboardAssertion";
import EditNoteAssertion from "../assertions/EditNoteAssertion";

describe("FunctionalFlow", function () {
  before(function () {
    cy.fixture("notes").as("notesData");
    cy.fixture("loginUser").then((data) => {
      const user = data.existingUser;
      cy.Login(user.email, user.password);
    });
  });

  it("A complete functional flow", function () {
    const note = this.notesData.noteDataWork;
    Dashboard.getAddNoteButton().click();
    createNote.selectCategory(note.category);
    createNote.fillTitle(note.title);
    createNote.fillDescription(note.description);
    if (note.status === "completed") {
      createNote.toggleCompleted();
    }
    createNote.clickCreate();

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
    Dashboard.getNoteStatus(note.title).click();
    Dashboard.getNoteActionButton(note.title, "Delete").click();
    Dashboard.confirmDelete().click();
    Dashboard.getLogoutButton().click();
    DashboardAssertion.assertLogout();
  });
});
