const contentURLs = [
  'http://localhost:8000/content/voice-and-tone-guidelines/tabs/voice-and-tone/',
  'http://localhost:8000/content/voice-and-tone-guidelines/tabs/usage/',
  'http://localhost:8000/content/house-rules/tabs/basics',
  'http://localhost:8000/content/house-rules/tabs/punctuations/',
  'http://localhost:8000/content/house-rules/tabs/grammer/',
  'http://localhost:8000/content/house-rules/tabs/date,-time-&-numbers/',
  'http://localhost:8000/content/button-guidelines/tabs/confusing-buttons/',
  'http://localhost:8000/content/button-guidelines/tabs/button-glossary/',
  'http://localhost:8000/content/email-guidelines/',
  'http://localhost:8000/content/error-messages/',
  'http://localhost:8000/content/empty-states/',
  'http://localhost:8000/content/placeholder-text/',
  'http://localhost:8000/content/rules',
];
const tocURLs = [
  'http://localhost:8000/content/button-guidelines/tabs/confusing-buttons/',
  'http://localhost:8000/content/placeholder-text/',
  'http://localhost:8000/content/house-rules/tabs/punctuations/',
  'http://localhost:8000/content/house-rules/tabs/grammer/',
  'http://localhost:8000/content/button-guidelines/tabs/button-glossary/',
];

describe('Cypress Test for table of contents of content page', () => {
  it('check if all links direct to the content', () => {
    contentURLs.forEach((url) => {
      cy.visit(url);

      cy.wait(1000);

      cy.get('.right-nav-container > ul > li > div > a').each((page) => {
        cy.request(page.prop('href'));
        cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
      });
    });
  });
});

describe('Cypress Test for table of contents with nested element of content page', () => {
  it('check if all links direct to the content', () => {
    tocURLs.forEach((url) => {
      cy.visit(url);
      cy.wait(1000);

      cy.get('.right-nav-container > ul > li > ul > li > div > a').each((page) => {
        cy.request(page.prop('href'));
        cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
      });
    });
  });
});

describe('Cypress Test for left nav of content page', () => {
  it('visit content page', () => {
    contentURLs.forEach((url) => {
      cy.visit(url);
    });
  });

  it('check if page exist for all links', () => {
    cy.get('a').each((page) => {
      cy.request(page.prop('href'));
    });
  });
});

describe('Cypress Test for images of content page', () => {
  it('check if images of page are loading', function () {
    contentURLs.forEach((url) => {
      cy.visit(url);

      cy.get('img').each(($img) => {
        cy.wrap($img).scrollIntoView().should('be.visible');
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    });
  });
});
