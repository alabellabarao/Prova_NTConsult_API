/// <reference types="cypress"/>

describe('Cadastra', () => {

    it('Cadastrar', () => {
        const body =  {
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          }
           cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                failOnStatusCode: false,
                body: body
            }).as ('postResultado')

            cy.get('@postResultado').then((response) =>{
                expect(response.status).equal(201)
                expect(response.body).to.have.property('id')
                expect(response.body.title).not.to.equal("cebola")
                expect(response.body.body).to.equal(body.body)

            })
    })
 })
