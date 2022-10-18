declare namespace Cypress {
    interface Chainable {
        linkVisit(): Chainable<Element>
        tileToggle(): Chainable<Element>
        imageRender(): Chainable<Element>
        tableOfContent(): Chainable<Element>
        leftnavTraverse(arr: Array<string>): Chainable<Element>
    }
}