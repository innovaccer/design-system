declare namespace Cypress {
    interface Chainable {
        linkVisit(): Chainable<Element>
        tileToggle(): Chainable<Element>
        imageRender(): Chainable<Element>
        tableOfContent(): Chainable<Element>
        leftnavTraverse(arr: Array<string>): Chainable<Element>
        tabsVisit(): Chainable<Element>
        livePreview(): Chainable<Element>
        statusTable(): Chainable<Element>
        searchBar(falseQuery: string, searchQuery: string): Chainable<Element>
    }
}