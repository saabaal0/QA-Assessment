import { get } from "http";

class ViewNote{
    getNoteTitle() {
        return cy.get('[data-testid="note-card-title"]');
    }
    getviewNoteButton() {
        return cy.get('[data-testid="note-view"]');
    }
    getEditNoteButton() {
        return cy.get('[data-testid="note-edit"]');
    }
    getDeleteNoteButton() {
        return cy.get('[data-testid="note-delete"]');
    }
   toggleNoteStatus() {
        return cy.get('[data-testid="toggle-note-switch"]');
    }
}

export default new ViewNote(); 
