const hostURL = process.env.HOST_URL || 'http://localhost:8000/foundations/principles/';

describe('Cypress Test of foundations page', () => {
  it('visit docs main page', () => {
    cy.visit(hostURL);
  });

  it('check for all the links it redirects', () => {
    cy.get('[data-test=DesignSystem-VerticalNav--Item]').each((navLink) => {
      navLink.click();
      cy.visit(navLink[0].href);
      cy.linkCheck();
    });
  });

  it('check if all links of toc direct to the content', () => {
    cy.get('[data-test=DesignSystem-VerticalNav--Item]').each((navLink) => {
      navLink.click();
      cy.visit(navLink[0].href);
      cy.tableOfContent();
    });
  });

  it('check if images of page are loading', () => {
    cy.get('[data-test=DesignSystem-VerticalNav--Item]').each((navLink) => {
      navLink.click();
      cy.visit(navLink[0].href);
      cy.imagesCheck();
    });
  });

  it('check for web and mobile tile of foundation page', () => {
    cy.get('[data-test=DesignSystem-VerticalNav--Item]').each((navLink) => {
      navLink.click();
      cy.visit(navLink[0].href);
      cy.tileClick();
    });
  });
  // cy.get('[data-test=DesignSystem-VerticalNav--Item]').each(navLink => {
  // it('check for all the links it redirects', () => {
  //   cy.visit(hostURL);
  //   // cy.get('[data-test=DesignSystem-VerticalNav--Item]').each(navLink => {
  //     navLink.click();
  //     console.log(navLink[0].href);
  //     cy.visit(navLink[0].href);
  //     cy.tableOfContent();
  //     cy.imagesCheck();
  //     cy.tileClick();
  //     cy.linkCheck();
  //   });
  // });
});
