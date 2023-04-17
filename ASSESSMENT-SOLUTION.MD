
# Automation Scripts option Selected:

  using mocha and cypress (describe and IT block)

# Installation:

  NODE JS, Cypress, Visual Studio, MOCHA

# Framework Setup:

1. Open the project in Visual Studio

2. Open the Terminal run the command npm init for initialization

3. Run the command npm install cypress for cypress installation

4. Check the cypress folder and make sure necessary folders got created i.e. support, integration, node module etc.

5. Create your test scenarios under the e2e folder.

6. Run the command npm start for Star War website compilation

7. Open new Terminal and run the command npm cypress open

8. Cypress popup will open and select the E2E Testing module

9. Then it will navigate to the browser selection window, select the chrome browser

10. Create new spec file and save as SearchTestSpec.cy.js

11. Then go back to the IDE and open the file SaerchTestSpec.cy.js

12. Write your Test case code using the Cypress Mocha and save it

13. Then run the script using command npm start and npm cypress open

14. Check the Test Execution result




# Test Execution

 1. Open the Terminal

 2. Run the angular application using the command 'npm  start'

 3. Confirm Star War application got compiled successfully

 4. Open another Terminal and run the command 'npx cypress open'

 5. You will see the your test execution file in cypress application

 6. Click on Saerch.spec.js(when cypress version use a 3) or SearchTestspec.cy.js (when use the cypress Version -12+)file to run test scenarios

 7. Search.spec.js executes in chromium headless browser and SearchTestspec.cy.js open in chrome browser

 7. Capture the Test execution results




# Actual results:

 1. Total 7 Test cases created based on provided user story

    Test Case#1   Search for Valid character (person) and validate the Gender, Skin colour etc

    Test Case#2   Search for non Valid character and validate the “Not found” in the results.

    Test Case#3   Search for Valid planet and validate the “Population”, “Climate” and “Gravity”.

    Test Case#4   Search for Invalid planet and validate  “Not found” in the results.

    Test Case#5   Search for either a character or a planet and you get one or more results for it, clear the

                  “Search form” and hit the Search button again, you should then get an empty result

    Test Case#6   User searched for a full planet name and  got results, if  switch to People and search for

                  the same thing (that has no matching people based on a partial name),  should get a “Not found” in the results.

    Test Case#7   Search for results by clicking the “Search” button or by pressing “enter” on the search field


  3. Snippet added for test reports support to show test execution status.




    Test  Results: 6 Test cases passed and 1 failed out of 7 Test cases. Test cases written in Search.spec.js and SearchTestspec.cy.js file.
