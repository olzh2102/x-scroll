describe("basic scroll", () => {
    it('should', () => {
        cy.visit('/basic')

        cy.get('[data-testid="inner"]').find('div').first().as('innerScrollContainer')
        cy.get('[data-testid="inner"]').parent().as('outerScrollContainer')

        cy.get('@innerScrollContainer').scrollTo('bottom')
        cy.get('@innerScrollContainer').contains('inner last')

        cy.get('@outerScrollContainer').scrollTo('bottom')
        cy.get('@outerScrollContainer').contains('outer last')
    })
})