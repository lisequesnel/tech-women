given(`I visit {word} page`, (pageName) => {
  cy.visit(`/${pageName}`);
});

when('I open the app', () => {
  cy.visit('');
});

when('I click on {string}', (label) => {
  cy.contains(label).click();
});

when('I sort women by {word}', (sortField) => {
  cy.get('.sort-container').find('p-dropdown').click();
  cy.get('li').contains(sortField).click();
});

when('I search the word {string}', (stringToSearch) => {
  cy.get('.filter-container').find('input').click().type(stringToSearch);
});

then(`I am on {word} page`, (pageName) => {
  cy.location('pathname').should('eq', `/${pageName}`);
});

then(`I see the details of {int} woman/women`, (number) => {
  if (cy.location('pathname') === '/all') {
    cy.get('.woman-details').should('have.length', number);
  } else {
    cy.get('.woman-card h2').should('not.be.empty');
    cy.get('.woman-card p').should('not.be.empty');
  }
});

then('these women are {string} and {string}', (womanName1, womanName2) => {
  cy.get('.woman-details').eq(0).find('h2').should('contain', womanName1);
  cy.get('.woman-details').eq(1).find('h2').should('contain', womanName2);
});
