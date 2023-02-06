describe('All movies view flows', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
      });
      it('Should be able to visit the page and render the correct elements', () => {
          cy.contains('Rancid Tomatillos')
    });
    it('should it have a collection of movies', () => {
         cy.get('div[class="posters-container"]')
         .children().should('have.length', 40)
    })
})