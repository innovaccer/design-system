const introductionURLs = ['http://localhost:8000/introduction/get-started/designers/', 'http://localhost:8000/introduction/get-started/developers/'];
// , 'http://localhost:8000/introduction/what\'s-new/'

describe('Cypress Test for table of contents of introduction page', () => {
  it('check if all links direct to the content', () => {
    introductionURLs.forEach((url) => {
      cy.visit(url);
    
      cy.wait(1000);

      cy.get('.right-nav-container > ul > li > div > a').each((page) => {
        cy.request(page.prop('href'));
        // console.log(`${page.text()}`);
        // cy.get('.Heading.Heading--default.mr-4').click( {multiple: true} );
        cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
        // cy.get('.Heading.Heading--default.mr-4').should('be.visible');
      });

      cy.wait(1000);
      
      cy.get('.right-nav-container > ul > li > ul > li > div > a').each((page) => {
        cy.request(page.prop('href'));
        cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
      });
    });
  });
});


describe('Cypress Test for left nav of introduction page', () => {
  it('visit introduction page', () => {
    introductionURLs.forEach((url) => {
      cy.visit(url);
    });
  });

  it('check if page exist for all links', () => {
    cy.get('a').each((page) => {
      cy.request(page.prop('href'));
    });
  });
});

describe('Cypress Test for images of introduction page', () => {
  it('check if images of page are loading', function () {
    introductionURLs.forEach((url) => {
      cy.visit(url);

      cy.get('img').each(($img) => {
        cy.wrap($img).scrollIntoView().should('be.visible');
      });
    });
  });
});
