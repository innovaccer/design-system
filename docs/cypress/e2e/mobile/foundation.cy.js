// const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
let hostURL;
if (process.env.NODE_ENV === 'development') hostURL = 'https://design-dev.innovaccer.com';
else hostURL = 'https://design.innovaccer.com';
const foundationURL = hostURL + '/mobile/foundations/layout/';

describe('Cypress Test of foundations mobile page', () => {
  const navLink = [];
  before(() => {
    cy.visit(foundationURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for all the links it redirects', () => {
    navLink.forEach((page) => {
      cy.visit(page);
      cy.linkVisit();
    });
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
