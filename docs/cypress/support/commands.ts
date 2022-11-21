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
    if (page.text().length) {
      cy.request(page.prop('href'));
      const tocText = page.text().replace(/ +/g, ' ').replace("'", "’");
      cy.get('[data-test=DesignSystem-Heading]').contains(tocText);
    }
  });
});

Cypress.Commands.add('imageRender', () => {
  cy.viewport('macbook-15');
  cy.wait(3000);
  cy.get('img').each(($img) => {
    cy.wrap($img).scrollIntoView().should('be.visible').should('have.attr', 'alt');
  });
});

Cypress.Commands.add('tileToggle', () => {
  cy.wait(1000);
  cy.get('.Tile').click({
    multiple: true,
    force: true,
  });
});

Cypress.Commands.add('linkVisit', () => {
  cy.wait(1000);
  cy.get('[data-test=Docs-content-wrapper]').then((container) => {
    if (container.find('a').length) {
      cy.get('a').not(':contains("email")').each((page) => {
        if (page.prop('href').length) {
          cy.request(page.prop('href'));
        }
      });
    }
  });
});

Cypress.Commands.add('leftnavTraverse', (arr) => {
  cy.get('[data-test=Docs-Leftnav]')
    .find('a')
    .not(':contains("started")')
    .each((page) => {
      cy.request(page.prop('href'));
    });
  cy.get('[data-test=Docs-VerticalNav--Items]')
    .find('a')
    .not(':contains("started")')
    .each((navLink) => {
      arr.push(navLink.prop('href'));
    });
});

Cypress.Commands.add('livePreview', () => {
  cy.get('[data-test=Docs-Main--Row]').then((page) => {
    if (page.find('[data-test=Docs-liveProvider]').length) {
      cy.wait(3000);
      cy.get('[data-test=Docs-liveProvider]').find('[data-test=Docs-error-message]').should('not.exist');
    }
    cy.get('[data-test=Docs-content-wrapper]').find('[data-test=Docs-propTable-error]').should('not.exist');
  });
});

const fetchPath = (tabName: string, url: string) => {
  const tabSlug = tabName.toLowerCase().replace(/\s/g, '-');
  const pagePath = url.split('/');
  const pages = pagePath.slice(0, pagePath.length - 2);
  const path = `${pages.join('/')}/${tabSlug}/`;
  return path;
};

Cypress.Commands.add('tabsVisit', () => {
  cy.get('[data-test=Docs-Main--Row]').then((container) => {
    if (container.find('[data-test=DesignSystem-Tabs--Tab]').length > 1) {
      cy.get('[data-test=DesignSystem-Tabs--Tab]')
        .next()
        .each((page) => {
          const path = fetchPath(page[0].innerText, page[0].baseURI);
          cy.visit(path);
          cy.livePreview();
          cy.tableOfContent();
        });
    }
  });
});

Cypress.Commands.add('statusTable', () => {
  cy.get('[data-test=DesignSystem-Table-wrapper]')
    .find('a')
    .each((page) => {
      if (page.prop('href').length) {
        cy.request(page.prop('href'));
      }
    });
  cy.wait(1000);
  cy.get('[data-test=DesignSystem-Grid-cellGroup]').click({ multiple: true, force: true });
});

Cypress.Commands.add('searchBar', (falseQuery, searchQuery) => {
  cy.get('[data-test=Docs-content-wrapper]').find('input[name="input"]').type(`${falseQuery}{enter}`);
  cy.get('[data-test=DesignSystem-EmptyState]').contains(`No results found for '${falseQuery}'`);

  cy.get('[data-test=Docs-content-wrapper]').find('input[name="input"]').clear().type(`${searchQuery}{enter}`);
  cy.get('[data-test=Docs-Card-Heading]').contains(searchQuery);
});

Cypress.Commands.add('splitArray', (navLink, subNavLink) => {
  for (let i = 1; i < navLink.length; i += 10) {
    const subArr = navLink.slice(i, i + 10);
    subNavLink.push(subArr);
  }
});