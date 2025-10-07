const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';

describe('Tests for search bar functionality', () => {
    it('visit docs main page', () => {
        cy.visit(hostURL)
    })

    it('focus on search bar',() => {
        cy.visit(hostURL)
        cy.wait(3000)
        cy.get('.DocSearch-Button').type(`{enter}`);
        cy.get('.DocSearch-Modal').should('exist');
    })
})

describe('Tests for nav bar and footer', () => {
    it('visit docs main page', () => {
        cy.visit(hostURL)
    })

    it('check if page exist for all links',() => {
        cy.visit(hostURL)
        cy.wait(3000)
        cy.get('a').each(page => {
            const href = page.prop('href');
            // Only test internal links (relative paths or same domain)
            if (href && (href.startsWith('/') || href.includes(window.location.hostname))) {
                cy.request(href)
            }
        })
    })
})