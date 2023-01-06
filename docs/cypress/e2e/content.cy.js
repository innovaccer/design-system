// const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
let hostURL;
if (process.env.NODE_ENV === 'development') hostURL = 'https://design-dev.innovaccer.com';
else hostURL = 'https://design.innovaccer.com';
const contentURL = hostURL + '/content/voice-and-tone-guidelines/tabs/voice-and-tone/';

describe('Cypress Test of content page', () => {
  const navLink = [];
  before(() => {
    cy.visit(contentURL);
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
});
