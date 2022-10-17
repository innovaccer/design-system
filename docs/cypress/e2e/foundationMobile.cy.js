const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
const foundationURL = hostURL + '/mobile/foundations/layout/';

describe('Cypress Test of foundations mobile page', () => {
  const navLink = [];
  before(() => {
    cy.visit(foundationURL);
    cy.leftnavTraverse(navLink);
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check if images of page are loading', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.imageRender();
    });
  });

  it('check for web and mobile tile of foundation page', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.tileToggle();
    });
  });
});
