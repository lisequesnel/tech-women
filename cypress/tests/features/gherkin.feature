Feature: Tech women app

  I want to open the app and see random page,
  and then go to all page, sort and filter table

  Scenario: Navigating through app
    When I open the app
    Then I am on random page
    And I see the details of 1 woman

    When I click on "ALL"
    Then I am on all page
    Then I see the details of 3 women

  Scenario: Searching for a woman
    Given I visit all page
    When I sort women by firstname
    And I search the word "mar"
    Then I see the details of 2 women
    And these women are "Margaret Hamilton" and "Marissa Mayer"
