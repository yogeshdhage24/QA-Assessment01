/// <reference types="cypress"/>
var character = "Luke Skywalker";
//Grouping the test
describe('StartWar Test Suite', () => {
  beforeEach(() => {
    //Website is kept beforeEach so its useful for the run the test scenario separtly
    cy.visit('/')
  })
  it('TestCase#1: Navigation to the Star War Website is Successful', () => {
    cy.get('[data-testid="searchType-people"]').first().check();
    cy.get('[data-testid="SearchType-peopleLabel"]').first().should("contain.text", "People");
  });

  it('TestCase#2: Test for a Valid Character (Person Name)', () => {
    // Type the character's name into the search bar
    //Luke Skywalker
    cy.get('[data-testid="SearchType-query"]').type(character);
    //Click on Search button
    cy.get('[data-testid=SearchType-Search]').click();
    cy.wait(4500);
    cy.get('[testID="SearchText-col-sm-2"]').should('have.text', 'Gender:');
    cy.get(':nth-child(2) > .col-sm-10').should('be.visible');
    //Gender display on page as output
    cy.get('[testID="SearchText-Birth year"]').should('have.text', 'Birth year:');
    cy.get('[testID="SearchText-Birth year1"]').should('be.visible');
   /// Birth Year display on page as output
    cy.get('[testID="SearchText-Eye color"]').should('have.text', 'Eye color:');
    cy.get('[testID="SearchText-Eye color"]').should('be.visible');
    //Eye color display on page as output
    cy.get('[testID="SearchText-Skin color"]').should('have.text', 'Skin color:');
    cy.get('[testID="SearchText-Skin color"]').should('be.visible');
    //Skin color display on page as output
    cy.get('[testID="SearchText-col-sm-2"]').should('be.visible');
    cy.log(' Able to Search valid charcter is successfully and able see the Gender, Birth year, Eye color,skin color');
  });


  //Test for invalid character
  it('TestCase#3:Test for Invalid Character', () => {

    cy.get('[data-testid=SearchType-query]').clear();
    //Enter the Invalid Character
    cy.get('[data-testid="SearchType-query"]').type("Test");
    //Click on Search button
    cy.get('[data-testid=SearchType-Search]').click();
    //Verify the message "Not Found"
    cy.get('.col > :nth-child(5)').should('have.text', 'Not found.');
    cy.log('Test for invalid character is successful');
  });

  it('TestCase#4:Test for valid Planet search', () => {
    cy.get('#planets').click();
    //Click on search button using the Enter key
    cy.get('[data-testid=SearchType-query]').type('Alderaan{Enter}');
    // cy.get('[data-testid=SearchType-Search]').click();
    cy.wait(1000);
    cy.get('.card-subtitle').contains('Alderaan');
    //Check the population label and value
    cy.get(':nth-child(2) > .col-sm-2').should('have.text', 'Population:');
    cy.get(':nth-child(2) > .col-sm-10').should('be.visible');
    cy.get(':nth-child(3) > .col-sm-2').should('have.text', 'Climate:');
    cy.get(':nth-child(3) > .col-sm-10').should('be.visible');
    cy.get(':nth-child(4) > .col-sm-2').should('have.text', 'Gravity:');
    cy.get(':nth-child(4) > .col-sm-10').should('be.visible');
    cy.log('Able to search planet and able to see Population,Climate,and Gravity of planet');

  })
  it('TestCase#5: Test for Invalid Planet search', () => {
    cy.get('#planets').click();
    //Click on search button using the Enter key
    cy.get('[data-testid=SearchType-query]').type('NO Planet{Enter}');
    // cy.get('[data-testid=SearchType-Search]').click();
    cy.wait(1000);
    //Check the  label 'Not Found'
    cy.get('.col > :nth-child(5)').should('have.text', 'Not found.')
    cy.log('Able to see expected result')
  });

  it('TestCase#6: Clear the “Search form” and hit the Search button and result should be empty', () => {
    cy.get('#planets').click();
    //Click on search button using the Enter key
    cy.get('[data-testid=SearchType-query]').type('Alderaan{Enter}');
    // cy.get('[data-testid=SearchType-Search]').click();
    cy.wait(1000);
    //Clear the data 
    cy.get('[data-testid=SearchType-query]').clear();
    //Click on Search button
    cy.get('[data-testid=SearchType-Search]').click();
        // //record the results 
        // cy.get('app-planet > .card > .card-body').should('have.text', '');

    //Check the empty result
    cy.get('app-planet > .card > .card-body').should('not.be.visible');
    cy.wait(2000);
    cy.log('Unable to see expected result');
  });

  it('TestCase#7: Saerch the planet and switch to the People and hit the saerch button', () => {
    cy.get('#planets').click();
    //Click on search button using the Enter key
    cy.get('[data-testid=SearchType-query]').type('Alderaan{Enter}');
    // cy.get('[data-testid=SearchType-Search]').click();
    cy.wait(1000);
    //Click on People radio button after populating the palnet result
    cy.get(':nth-child(1) > .form-check').click();

    //Click on Search button
    cy.get('[data-testid=SearchType-Search]').click();
    // Verify the result
    cy.wait(2000)
    cy.get('.col > :nth-child(5)').contains('Not found.')
    cy.get('.col > :nth-child(5)').should('have.text','Not found.')
    cy.log('Able to see "Not found." text in result')
  })

})