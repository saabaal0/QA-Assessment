import DashboardAssertion from '../assertions/DashboardAssertion';
import Dashboard from '../pages/Dashboard';

describe('Dashboard Page', () => {
  beforeEach(function() {
    cy.fixture("notes").as('notesData');
     cy.fixture("loginUser").then((data) => {
    const user = data.existingUser;
    cy.Login(user.email, user.password);
  });
});

  it('should display the Add Note button, Category tabs, Profile and Logout buttons', () => {
    DashboardAssertion.assertAddNoteButtonVisible();
    DashboardAssertion.assertCategoryTabsVisible();     
    DashboardAssertion.assertProfileButtonVisible();
    DashboardAssertion.assertLogoutButtonVisible();
  });

  it('Successful Logout', () => {
    Dashboard.getLogoutButton().click();
    DashboardAssertion.assertLogout();
  });

  it('Delete a note successfully', function() {
    const noteTitle= this.notesData.noteDataHome;
    Dashboard.getNoteActionButton(noteTitle.title, 'Delete').click();
    Dashboard.confirmDelete().click();
    DashboardAssertion.assertNoteDeletion(noteTitle);
  })

  it('should search for a note', function() {
    const noteTitle = this.notesData.noteDataHome;
    Dashboard.search(noteTitle.title);
    Dashboard.getSearchButton().click();     
  });

  it.only('should toggle note status', function() {
    const noteTitle = this.notesData.noteDataHome;
    Dashboard.getNoteStatus(noteTitle.title).first().click();
    //DashboardAssertion.assertNoteStatusToggled(noteTitle.title);
  });
});
