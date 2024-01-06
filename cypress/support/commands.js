// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/Login'); // Assuming your login page is at this URL
  
    cy.get('#field-1').clear().type(username);
    // cy.get('#password').type(password);
  
    cy.get('.ink').trigger("mouseover").should("be.visible").click({force:true});

    cy.get('#field-3').clear().type(password);

    cy.get(':nth-child(2) > .sc-iVFRtF > .ink').click({force:true}).wait(12000);

    cy.get('[data-di-id="di-id-16558305-96d792a4"]', {defaultTimeout:3000}).invoke("text").should("include", "Dashboard");


  });
  
