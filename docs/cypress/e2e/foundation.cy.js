const foundationURLs = [
  'http://localhost:8000/foundations/principles/',
  'http://localhost:8000/foundations/colors/',
  'http://localhost:8000/foundations/logos/',
  'http://localhost:8000/foundations/layout/',
  'http://localhost:8000/foundations/typography/',
  'http://localhost:8000/foundations/interactions/',
  'http://localhost:8000/foundations/response-time/',
];

const tocURLs = [
  'http://localhost:8000/foundations/colors/',
  'http://localhost:8000/foundations/layout/',
  'http://localhost:8000/foundations/interactions/',
];

describe('Cypress Test for table of contents of foundations page', () => {
  it('check if all links direct to the content', () => {
    cy.tableOfContent({URLs: foundationURLs })
  });
});


// describe('Cypress Test for table of contents with nested element of foundations page', () => {
//   it('check if all links direct to the content', () => {
//     tocURLs.forEach((url) => {
//       cy.visit(url);
//       cy.wait(1000);

//       cy.get('.right-nav-container > ul > li > ul > li > div > a').each((page) => {
//         cy.request(page.prop('href'));
//         cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
//       });
//     });
//   });
// });

// describe('Cypress Test for left nav of foundation page', () => {
//   it('visit content page', () => {
//     foundationURLs.forEach((url) => {
//       cy.visit(url);
//     });
//   });

//   it('check if page exist for all links', () => {
//     cy.get('a').each((page) => {
//       cy.request(page.prop('href'));
//     });
//   });

//   describe('Test for Docs web and mobile tile of foundation page', () => {
//     it('Web and Mobile tile', () => {
//       foundationURLs.forEach((url) => {
//         cy.visit(url);

//         cy.get('.Tile').click({
//           multiple: true,
//         });
//       });
//     });
//   });
// });

describe('Cypress Test for images of content page', () => {
  it('check if images of page are loading', function () {
    cy.imagesCheck({URLs: foundationURLs })
  });
});
