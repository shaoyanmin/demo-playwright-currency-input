
Feature: Currency Input Component
  As a user
  I want to input currency amounts
  So that I can enter monetary values in a formatted way

  Background:
    Given I am on the application page

  Scenario: Basic currency input and formatting
    When I click on the currency input field
    And I enter "1234" into the field
    And I click outside the field
    Then the form should display "1234"
    And the input field should show "$ 1,234"
    And no error message should be visible

  Scenario: Input field formatting behavior
    Given I am on the application page
    When I click on the currency input field
    Then the input field should be empty
    When I enter "5678" into the field
    Then the input field should show "5678"
    When I click outside the field
    Then the input field should show "$ 5,678"

  Scenario: Validation for NaN input
    When I click on the currency input field
    And I enter "abc" into the field
    And I click outside the field
    Then an error message "Value must be a number" should be visible

  Scenario: Validation for negative number input
    When I click on the currency input field
    And I enter "-100" into the field
    And I click outside the field
    Then an error message "Value must be positive" should be visible

  Scenario: Validation for empty input
    When I click on the currency input field
    And I leave the field empty
    And I click outside the field
    Then an error message "Value is required" should be visible
