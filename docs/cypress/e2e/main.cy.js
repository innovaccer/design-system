// const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
let hostURL;
if (process.env.NODE_ENV === 'development') hostURL = 'https://design-dev.innovaccer.com';
else hostURL = 'https://design.innovaccer.com';

describe('Tests for search bar functionality', () => {
    it('visit docs main page', () => {
        cy.visit(hostURL);
    })

    it('focus on search bar',() => {
        cy.get('input[name="input"]').type(`{enter}`)
        cy.get('.Popover.Search-result').contains('Tip: Press ’cmd + k’ to quickly start searching.')
    })

    it('invalid search',() => {
        let falseQuery = 'abc'
        cy.get('input[name="input"]').type(`${falseQuery}{enter}`)
        cy.get('.Popover.Search-result').contains(`No results found for '${falseQuery}'`)
    })    

    it('valid search',() => {
        let searchQuery = 'button'
        cy.get('input[name="input"]').clear().type(`${searchQuery}{enter}`)
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