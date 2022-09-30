declare namespace Cypress {
    interface Chainable {
        linkCheck(): Chainable<Element>
        tileClick(): Chainable<Element>
        imagesCheck(): Chainable<Element>
        tableOfContent(): Chainable<Element>
    }
}