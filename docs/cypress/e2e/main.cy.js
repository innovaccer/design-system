const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';

describe('Tests for search bar functionality', () => {
    it('visit docs main page', () => {
        cy.visit(hostURL)
    })

    it('focus on search bar',() => {
        cy.get('.DocSearch-Button').type(`{enter}`);
        cy.get('.DocSearch-Modal').should('exist');
    })
})

describe('Tests for nav bar and footer', () => {
    it('visit docs main page', () => {
        cy.visit(hostURL)
    })

    it('check if page exist for all links',() => {
        cy.get('a').each(page => {
            cy.request(page.prop('href'))
        })
    })
})