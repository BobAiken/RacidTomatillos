describe('All movies view flows', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: "example.json"})
        cy.visit('http://localhost:3000/RacidTomatillos');
      });
    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
      });
    it('Should be able to visit the page and render the correct elements', () => {
          cy.contains('Rancid Tomatillos')
    });
    it('should it have a collection of movies', () => {
         cy.get('div[class="posters-container"]')
         .children().should('be.visible')
    })
    // it('Should show an error message when get request fails', () => {
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: "errorResponse.json"})
    // cy.visit('http://localhost:3000/RacidTomatillos')
    
    // })
    // it('should show an error message when movies cant be displayed', () => {
    //     cy.intercept({method: 'Get', url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'}, {statusCode: 500, body: "500 Internal Server Error" })
    //     .get('div')
    //     .contains("500 Internal Server Error")
    // })
})