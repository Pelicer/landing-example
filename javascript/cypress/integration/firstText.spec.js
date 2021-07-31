//This import is used to give you recommendations on cypress methods
/// <reference types="cypress"/>

describe('first suite', () => {

    it('first test', () => {
        cy.visit('/');
        cy.contains('Watch 2-Min Demo Video').click();
        cy.get('[name="txtNome"]');
    })

})