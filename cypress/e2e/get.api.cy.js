/// <reference types="cypress"/>

describe('Pokemon', () => {

    it('Pokemon', () => {
        cy.request({
           method: 'DELETE',
           url: 'https://pokeapi.co/api/v2/berry/1',
           failOnStatusCode: false
        }).as('getResultado')
        
        cy.get('@getResultado')    
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.name).equal('cheri')
                expect(response.body.growth_time).equal(3)
                expect(response.body.max_harvest).equal(5)
                expect(response.body.natural_gift_power).equal(60)
                expect(response.body.size).equal(20)
                expect(response.body.smoothness).equal(25)
                expect(response.body.soil_dryness).equal(15)

        })
        
    })
})