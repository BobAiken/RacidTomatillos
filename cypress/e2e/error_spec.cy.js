describe('Error view flow',()=>{

  beforeEach(()=>{
    cy.visit('http://localhost:3000/RacidTomat')
  })

  it('Should render the correct elements', () => {
    cy.contains('404 Not Found')
    .get('button[class="error"]')
    .contains('Go Home')
  })

  it('Should be able to go home', ()=>{
    cy.get('button[class="error"]')
    .click()
    .get('h1')

  })


})