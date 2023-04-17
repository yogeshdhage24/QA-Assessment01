Feature: Planet Search
As an user
I want to be able to search for a planet
So that I can see its population, climate, and gravity

Scenario: Valid Planet Search
Given that I am on the planet search page
When I search for a valid planet
Then I should be able to see its population, climate, and gravity

Scenario: Invalid Planet Search
Given that I am on the planet search page
When I search for an invalid planet
Then I should see "Not found" in the search results.