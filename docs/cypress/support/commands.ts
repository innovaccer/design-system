/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('tableOfContent', () => {
    cy.wait(3000);
    cy.get('[data-test=Docs-Toc--Link]').each((page) => {
        cy.get('[data-test=DesignSystem-Heading]').contains(`${page.text()}`);
    });
});

Cypress.Commands.add('imageRender', () => {
    cy.viewport('macbook-15');
    cy.wait(3000)

    cy.get('img').each(($img) => {
        cy.wrap($img).scrollIntoView().should('be.visible').should('have.attr', 'alt');
    });
});
Cypress.Commands.add('tileToggle', () => {
    cy.wait(1000);
    cy.get('.Tile').click({
        multiple: true,
    });
});

Cypress.Commands.add('linkVisit', () => {
    cy.wait(1000);
    cy.get('[data-test=Docs-Main--Row]').find('a').not(':contains("started")').each((page) => {
        cy.request(page.prop('href'));
    })
})


Cypress.Commands.add('leftnavTraverse', (arr) => {
    cy.get('[data-test=DesignSystem-VerticalNav--Item]').each((navLink) => arr.push(navLink.prop('href')))
})