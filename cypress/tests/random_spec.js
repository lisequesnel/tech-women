describe('Random page', function() {
  beforeEach(function () {
    cy.visit('');
  })

  context('Navigation', function () {
    it('Redirect to random page', function() {
      cy.location('pathname').should('eq', '/random');
    })

    it('Displays toolbar and redirect to some pages', function() {
      cy.get('.app-title').should('contain', 'TECH WOMEN');
      cy.get('.tab-bar-buttons').find('a').should('have.length', 2);
      cy.get('.tab-bar-buttons a').first().should('contain', 'RANDOM');
      cy.get('.tab-bar-buttons a').last().should('contain', 'ALL');

      cy.get('.tab-bar-buttons a').last().click();
      cy.location('pathname').should('eq', '/all');

      cy.get('.tab-bar-buttons a').first().click();
      cy.location('pathname').should('eq', '/random');
    })
  })

  context('Dislaying', function () {
    it('Displays a card with woman data', function() {
      cy.get('.woman-card h2').should('not.be.empty');
      cy.get('.woman-card p').should('not.be.empty');
    })
  })

})
