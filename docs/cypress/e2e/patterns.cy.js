const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
const patternsURL = hostURL + '/patterns/overview/all-patterns/';
const statusURL = hostURL + '/patterns/overview/status/'

describe('Cypress Test of patterns page', () => {
  const navLink = [];
  before(() => {
    cy.visit(patternsURL);
    cy.leftnavTraverse(navLink);
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      if (!page.includes('overview')) {
        cy.tableOfContent();
      }
    });
  });

  it('check if live preview is loading', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      if (!page.includes('overview')) {
        cy.livePreview();
      }
    });
  });

  it('check if tabs exsits and they are loading', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });

  it('check for all the links and search bar of overview page', () => {
    navLink.forEach((page) => {
      if (page.includes('overview')) {
        cy.visit(page);
        cy.linkVisit();
        cy.searchBar();
      }
    });
  });

  it('check navigation of status table', () => {
    cy.visit(statusURL);
    cy.statusTable();
  });
});
