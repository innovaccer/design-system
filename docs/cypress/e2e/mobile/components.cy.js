const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
const componentURL = hostURL + '/mobile/components/overview/all-components/';
const statusURL = hostURL + '/mobile/components/overview/status/';


describe('Cypress Test of component mobile page', () => {
  const navLink = [];
  const subNavLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
    cy.splitArray(navLink, subNavLink);
  });

  it('check for the overview page', () => {
    cy.visit(componentURL);
    cy.searchBar('abc', 'Buttons');
    cy.linkVisit();
    cy.tileToggle();
  });

  it('check navigation of status table', () => {
    cy.visit(statusURL);
    cy.statusTable();
  });
  
  Cypress._.times(3, (i) => {
    it('check for all the links it redirects', () => {
      subNavLink[i].forEach((page) => {
        cy.visit(page);
        cy.linkVisit();
      });
    });

    it('check if all links of table of contents direct to the content', () => {
      subNavLink[i].forEach((page) => {
        cy.visit(page);
        cy.tableOfContent();
      });
    });

    it('check for web and mobile tile of component mobile page', () => {
      subNavLink[i].forEach((page) => {
        cy.visit(page);
        cy.tileToggle();
      });
    });

    it('check if tabs exists and they are loading', () => {
      subNavLink[i].forEach((page) => {
        cy.visit(page);
        cy.tabsVisit();
      });
    });

  });
});
