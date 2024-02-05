describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to a pokemon page from the front page', function () {
    cy.visit('http://localhost:5000')

    const pokemonName = 'ivysaur'
    cy.get('.list-container')
      .find(`.list-item .list-item-name:contains(${pokemonName})`)
      .click()

    cy.url().should('to.match', new RegExp(pokemonName), 'i')

    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})