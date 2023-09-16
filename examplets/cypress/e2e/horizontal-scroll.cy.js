describe("Horizontal scroll", () => {
    it('should', () => {
        cy.visit('/')
        cy.scrollTo(0, 500)
    })
})