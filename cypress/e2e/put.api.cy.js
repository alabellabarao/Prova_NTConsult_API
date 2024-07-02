/// <reference types="cypress"/>

describe('Alterar um dispositivo', () => {

    it('Alterar um dispositivo', () => {
        const body_cadastro = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }

         const body_put = {
            "name": "Celular Sansung A4 - Classic",
            "data": {
               "year": 2018,
               "price": 1888.99,
               "CPU model": "Intel Core i5",
               "Hard disk size": "5 TB"
            }
         }

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body_cadastro
        }).as('postResultado')

        cy.get('@postResultado').then((response_post) =>{
            expect(response_post.status).equal(200)
            expect(response_post.body.name).equal(body_cadastro.name)

            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_put
            }).as('putResultado')

            cy.get('@putResultado').then((response_put) =>{
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(body_put.name)
            })
        })
    })
})

