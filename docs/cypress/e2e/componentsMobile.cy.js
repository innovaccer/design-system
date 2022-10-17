const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
const componentURL = hostURL + '/mobile/components/overview/all-components/';
const statusURL = hostURL + '/mobile/components/overview/status/';

describe('Cypress Test of component mobile page', () => {
  const navLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for all the links it redirects', () => {
    navLink.slice(0,11).forEach((page) => {
      cy.visit(page);
      cy.linkVisit();
    });
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.slice(1,11).forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check for web and mobile tile of foundation page', () => {
    navLink.slice(0,11).forEach((page) => {
      cy.visit(page);
      cy.tileToggle();
    });
  });

  it('check if tabs exists and they are loading', () => {
    navLink.slice(0,11).forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });

  it('check for search bar of overview page', () => {
    cy.visit(componentURL);
    cy.searchBar('abc', 'Buttons');
  });

  it('check navigation of status table', () => {
    cy.visit(statusURL);
    cy.statusTable();
  });

});

describe('Cypress Test of component mobile page', () => {
  const navLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for all the links it redirects', () => {
    navLink.slice(11).forEach((page) => {
      cy.visit(page);
      cy.linkVisit();
    });
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.slice(11).forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check for web and mobile tile of foundation page', () => {
    navLink.slice(11).forEach((page) => {
      cy.visit(page);
      cy.tileToggle();
    });
  });

  it('check if tabs exists and they are loading', () => {
    navLink.slice(11).forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });
});