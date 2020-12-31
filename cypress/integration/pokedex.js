describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('one can navigate from front page to a single Pokemon page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll')
    cy.contains('overgrow')
  })
})