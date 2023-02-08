describe('Individual view flows', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
      });
    it('Should onclick show use more information about a movie', () => {
        cy.get('div[class="posters-container"]')
        .contains("Black Adam").click()
        .get('div[class="backdrop"]')
        .children().should('have.length', 1)
        .children().should('have.length', 10)
    })
    it('should take us back home after home button click', () => {
        cy.get('div[class="posters-container"]')
        .contains("Black Adam").click()
        .get('button').click()
        .get('h1')
    })
    
})