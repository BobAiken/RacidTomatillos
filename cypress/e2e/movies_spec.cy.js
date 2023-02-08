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
    it('should get all movies when page loads', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 201})
    })
    // it('should show an error message when movies cant be displayed', () => {
    //     cy.intercept({method: 'Get', url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, {statusCode: 500, body: "500 Internal Server Error" })
    //     .get('div')
    //     .contains("500 Internal Server Error")
    // })
})