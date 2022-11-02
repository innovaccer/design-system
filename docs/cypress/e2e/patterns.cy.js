const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
const patternsURL = hostURL + '/patterns/overview/all-patterns/';
const statusURL = hostURL + '/patterns/overview/status/';

describe('Cypress Test of patterns page', () => {
  const navLink = [];
  before(() => {
    cy.visit(patternsURL);
    cy.leftnavTraverse(navLink);
    });

  it('check if all links of table of contents direct to the content', () => {
    navLink.shift();
    navLink.forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check if live preview is loading', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.livePreview();
    });
  });

  it('check if tabs exists and they are loading', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });

  it('check for all the links of overview page', () => {
    cy.visit(patternsURL);
    cy.linkVisit();
  });

  it('check for search bar of overview page', () => {
    cy.visit(patternsURL);
    cy.searchBar('abc', 'Forms');
  });

  it('check navigation of status table', () => {
    cy.visit(statusURL);
    cy.statusTable();
  });
});
