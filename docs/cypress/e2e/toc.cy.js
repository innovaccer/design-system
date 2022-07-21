const tocURLs = [
    'http://localhost:8000/introduction/get-started/designers/',
  ];
  
  describe('Cypress Test for Docs table of contents', () => {
    it('check if all links direct to the content', () => {
      tocURLs.forEach((url) => {
        cy.visit(url);
  
        cy.get('.right-nav-container > ul > li > div > a').each((page) => {
          cy.request(page.prop('href'));
          cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
        });
  
        cy.get('.right-nav-container > ul > li > ul > li > div > a').each((page) => {
          cy.request(page.prop('href'));
          cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
        });
  
        cy.get('.right-nav-container > ul > li > ul > li > ul > li > div > a').each((page) => {
          cy.request(page.prop('href'));
          cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
        });
      });
    });
  });
  