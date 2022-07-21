const componentsURLs = [
    'http://localhost:8000/components/overview/all-components/',
    // 'http://localhost:8000/patterns/overview/all-patterns/',
  ];
  
  const usageURLs = [
    'http://localhost:8000/components/overview/status/',
    'http://localhost:8000/patterns/overview/status/',
  ];
  
  describe('Test for Docs patterns and components overview page', () => {
    it('All components', () => {
      componentsURLs.forEach((url) => {
        cy.visit(url);
  
        cy.get('.d-flex.flex-wrap > div > a').each((page) => {
          cy.request(page.prop('href'));
        });
  
        const searchQuery = 'chips';
        cy.get('.Col > div > .Input.Input--regular > input[name="input"]').type(`${searchQuery}{enter}`);
  
        const falseQuery = 'abc';
        cy.get('.Col > div > .Input.Input--regular > input[name="input"]').clear().type(`${falseQuery}{enter}`);
        cy.get('.EmptyState > img');
        cy.get('.EmptyState > h4').contains(`No results found for '${falseQuery}'`);
      });
    });
  
    it('Usage', () => {
      usageURLs.forEach((url) => {
        cy.visit(url);
        cy.get('.Grid-body > div > div > div > div > div > a').each((page) => {
          cy.request(page.prop('href'));
        });
      });
    });
  });