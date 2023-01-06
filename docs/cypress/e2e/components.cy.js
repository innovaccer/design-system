// const hostURL = Cypress.env('HOST_URL') || 'http://localhost:8000';
let hostURL;
if (process.env.NODE_ENV === 'development') hostURL = 'https://design-dev.innovaccer.com';
else hostURL = 'https://design.innovaccer.com';
const componentURL = hostURL + '/components/overview/all-components/';
const statusURL = hostURL + '/components/overview/status/';

describe('Cypress Test of component page', () => {
  const navLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for the overview page', () => {
    cy.visit(componentURL);
    cy.searchBar('abc', 'Buttons');
    cy.linkVisit();
    cy.tileToggle();
  });

  it('check navigation of status table', () => {
    cy.visit(statusURL);
    cy.statusTable();
  });

  it('check for all the links it redirects', () => {
    navLink.slice(1, 10).forEach((page) => {
      if (!page.includes('breadcrumbs')) {
        cy.visit(page);
        cy.linkVisit();
      }
    });
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.slice(1, 10).forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check if live preview is loading', () => {
    navLink.slice(1, 10).forEach((page) => {
      cy.visit(page);
      cy.livePreview();
    });
  });

  it('check if tabs exsits and they are loading', () => {
    navLink.slice(1, 10).forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });
});

describe('Cypress Test of component page', () => {
  const navLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for all the links it redirects', () => {
    navLink.slice(10, 20).forEach((page) => {
      cy.visit(page);
      cy.linkVisit();
    });
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.slice(10, 20).forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check if live preview is loading', () => {
    navLink.slice(10, 20).forEach((page) => {
      if (!page.includes('dropdown')) {
        cy.visit(page);
        cy.livePreview();
      }
    });
  });

  it('check if tabs exsits and they are loading', () => {
    navLink.slice(10, 20).forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });
});

describe('Cypress Test of component page', () => {
  const navLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for all the links it redirects', () => {
    navLink.slice(20, 30).forEach((page) => {
      if (!page.includes('pageHeaders')) {
        cy.visit(page);
        cy.linkVisit();
      }
    });
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.slice(20, 30).forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check if live preview is loading', () => {
    navLink.slice(20, 30).forEach((page) => {
      cy.visit(page);
      cy.livePreview();
    });
  });

  it('check if tabs exsits and they are loading', () => {
    navLink.slice(20, 30).forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });
});

describe('Cypress Test of component page', () => {
  const navLink = [];
  before(() => {
    cy.visit(componentURL);
    cy.leftnavTraverse(navLink);
  });

  it('check for all the links it redirects', () => {
    navLink.slice(30).forEach((page) => {
      cy.visit(page);
      cy.linkVisit();
    });
  });

  it('check if all links of table of contents direct to the content', () => {
    navLink.slice(30).forEach((page) => {
      cy.visit(page);
      cy.tableOfContent();
    });
  });

  it('check if live preview is loading', () => {
    navLink.slice(30).forEach((page) => {
      cy.visit(page);
      cy.livePreview();
    });
  });

  it('check if tabs exsits and they are loading', () => {
    navLink.slice(30).forEach((page) => {
      cy.visit(page);
      cy.tabsVisit();
    });
  });
});
