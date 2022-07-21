const buttonURLs = [
    'http://localhost:8000/foundations/principles/',
    'http://localhost:8000/components/overview/all-components/',
  ];
  
  describe('Test for Docs web and mobile interface', () => {
    it('Web and Mobile buttons', () => {
      buttonURLs.forEach((url) => {
        cy.visit(url);

        cy.get('button').click({
          multiple: true,
        });
      });
    });
  });
  