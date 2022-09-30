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
    // URLs.forEach((url) => {
        cy.wait(3000);
        // cy.visit(url);
        cy.get('[data-test=Docs-Toc--Link]').each((page) => {
            cy.get('.Heading.Heading--default.mr-4').contains(`${page.text()}`);
        });
    });
// })

Cypress.Commands.add('imagesCheck', () => {
    // URLs.forEach((url) => {
        // cy.visit(url);
        cy.viewport('macbook-15');
        cy.wait(3000)

        cy.get('img').each(($img) => {
            cy.wrap($img).scrollIntoView().should('be.visible');
        });
    });
// })

Cypress.Commands.add('tileClick', () => {
    // URLs.forEach((url) => {
        // cy.visit(url);
        cy.wait(1000);
        cy.get('.Tile').click({
            multiple: true,
        });
    });
// })

Cypress.Commands.add('linkCheck', () => {
    // URLs.forEach((url) => {
        // cy.visit(url);
        cy.wait(1000);
        
        cy.get('[data-test=DesignSystem-Row]').find('a').each((page) => {
            cy.request(page.prop('href'));
        })
    })
// })
