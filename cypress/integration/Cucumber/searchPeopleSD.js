
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
// have to import these, so that cypress can recognise cucumber keywords


describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
})


Given('navigate to the Website', () => {
    // Navigate to the home page
    cy.visit('/');
  });

  Then('Select the radio button People', () => {
    // Select the  radio button people
    cy.get('label[@class="form-check-label" and @for="people"]').first().check();
  });
  
  When('the user searches for a valid character, such as {string}', (character) => {
    // Type the character's name into the search bar
    cy.get('input[id="query"]').type(character);
    //Click on Search button
    cy.get('button[class="btn btn-primary mb-2"]').cotaains('Search').click();
  });
  
  Then('the user should see the character\'s gender, birth year, eye color, and skin color in the search results', () => {
    // Assert that the search results contain the expected information for the character
    cy.get('.search-results').contains('Gender:').should('be.visible');
    cy.get('.search-results').contains('Birth Year:').should('be.visible');
    cy.get('.search-results').contains('Eye Color:').should('be.visible');
    cy.get('.search-results').contains('Skin Color:').should('be.visible');
  });
  

  Given('the user is on the home page', () => {
    // Navigate to the home page using Cypress
    cy.visit('http://localhost:4200/');
  });
  
  When('the user searches for an invalid character, such as {string}', (character) => {
    // Type the character's name into the search bar and press enter
   // cy.get('input[name="search"]').type(character).type('{enter}');
    cy.get('input[id="query"]').type(character).type('{enter}');

  });
  
  Then('the user should see "Not found" in the search results', () => {
    // Assert that the search results contain the "Not found" message
    cy.get('.search-results').contains('Not found').should('be.visible');
  });
  
