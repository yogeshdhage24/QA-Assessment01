Feature: Search for character

        Scenario Outline: Search for a valid character
                Given navigate to the Website
                Then  Select the radio button People
                When the user searches for a valid character, such as "<people>"
                Then the user should see the character's gender, birth year, eye color, and skin color in the search results
                Examples:
                        | people         |
                        | Luke Skywalker |
                        | Leia Organa    |
                        | r2             |

        Scenario: Search for an invalid character
                Given the user is on the home page
                When the user searches for an invalid character, such as "foobar"
                Then the user should see "Not found" in the search results
