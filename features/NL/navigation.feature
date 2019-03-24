Feature: Homepage


  Scenario: search
    Given I navigate to "nl-nl/" page
    When I filter by make "BMW" model "4"
    Then I see items of make "BMW" model "4"

