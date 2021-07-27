//This import is used to give you recommendations on cypress methods
/// <reference types="cypress"/>

describe('first suite', () => {

    it('first test', () => {

        cy.visit('/');
        cy.contains('Watch 2-Min Demo Video').click();
        cy.get('[name="txtNome"]');

        // //Tagname
        // cy.get('tagname');
        // //ID
        // cy.get('#id');
        // //Class
        // cy.get('.class');
        // //Attribute name
        // cy.get('[attribute-name]');
        // //Attribute value
        // cy.get('[attribute-name=value]');
        // //Class value
        // cy.get('[class="class-1 class-2"]');
        // //Tag name and attribute with value
        // cy.get('input[placeholder="Email"]');
        // //By two different attributes
        // cy.get('[placeholder="Email][type="email]');
        // //By tag name, attribute with value, ID and class name
        // cy.get('input[placeholder="Email"]#id.class-name');
        // //Most recommended way by cypress
        // cy.get('[data-cy="cy-attribute"]');
    })

})