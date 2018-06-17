describe('All page', function() {
  beforeEach(function () {
    cy.visit('/all');
  })

  context('Displaying', function () {
    it('Displays a table with women data', function() {
      cy.get('.woman-details').should('have.length', 3);
    })
  })

  context('Paginating', function () {
    it('Change page when clicking on "page 2"', function() {
      cy.get('.ui-paginator-pages').find('a').should('have.length', 2);
      cy.get('.ui-paginator-pages a').first().should('contain', '1').and('have.class', 'ui-state-active');
      cy.get('.ui-paginator-pages a').last().should('contain', '2').and('not.have.class', 'ui-state-active');

      // When
      cy.get('.ui-paginator-pages a').last().click();

      // Then
      cy.get('.woman-details').should('have.length', 2);
      cy.get('.ui-paginator-pages a').first().and('not.have.class', 'ui-state-active');
      cy.get('.ui-paginator-pages a').last().and('have.class', 'ui-state-active');
    })

    it('Change page when clicking on "next page"', function() {

      // When
      cy.get('a.ui-paginator-next').click();

      // Then
      cy.get('.woman-details').should('have.length', 2);
      cy.get('.ui-paginator-pages a').first().and('not.have.class', 'ui-state-active');
      cy.get('.ui-paginator-pages a').last().and('have.class', 'ui-state-active');
    })

    it('Change page when clicking on "last page"', function() {

      // When
      cy.get('a.ui-paginator-last').click();

      // Then
      cy.get('.woman-details').should('have.length', 2);
      cy.get('.ui-paginator-pages a').first().and('not.have.class', 'ui-state-active');
      cy.get('.ui-paginator-pages a').last().and('have.class', 'ui-state-active');
    })
  })

  context('Sorting', function () {
    it('Sort the table by lastname in alphabetical order', function() {
      // Given
      cy.get('.sort-container').should('contain', 'Sort By');

      // When
      cy.get('.sort-container').find('p-dropdown').click();

      // Then
      cy.get('.sort-container li').first().should('contain', 'Sort by lastname');
      cy.get('.sort-container li').last().should('contain', 'Sort by firstname');

      // When
      cy.get('li').first().click();

      // Then
      cy.get('.sort-container').should('contain', 'Sort by lastname');
      cy.get('.sort-container').should('contain', 'Sort by lastname');
      cy.get('.woman-details').first().should(function (details) {
        expect(details.find('h2')).to.contain('Margaret Hamilton');
        expect(details.find('p')).to.contain('Margaret Hamilton');
        expect(details.find('img')).to.have.attr('src', 'assets/women-images/Margaret_Hamilton.jpg');
      })
    })
  })

  context('Filtering', function () {
    it('Filters the table with "lace"', function() {
      // Given
      cy.get('.filter-container').find('input')
        .should('have.attr', 'placeholder', 'Search')
        .should('have.value', '');

      // When
      cy.get('.filter-container').find('input').click()
        .type('lace')

      // Then
        .should('have.value', 'lace');
      cy.get('.woman-details').should('have.length', 1);
      cy.get('.woman-details').first().should(function (details) {
        expect(details.find('h2')).to.contain('Ada Lovelace');
        expect(details.find('p')).to.contain('Ada, Countess of Lovelace');
        expect(details.find('img')).to.have.attr('src', 'assets/women-images/Ada_Lovelace.jpg');
      })
    })

    it('Filters the table, gets no value and erase afterwards', function() {
      // When
      cy.get('.filter-container').find('input').click().type('kjyhgdfds');

      // Then
      cy.get('.woman-details').should('have.length', 0);
      cy.get('.ui-dataview-content').should('contain', 'No amazing woman with this name, sorry!');

      // When
      cy.get('.filter-container').find('input').clear()

      // Then
        .should('have.value', '');
      cy.get('.woman-details').should('have.length', 3);
    })
  })
})
