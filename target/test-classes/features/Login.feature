Feature: Login Feature Scenario to Sauce lab

  Background: 
    Given I have launched the application

  @sanity
  Scenario: This scenario is to define the success path
    When I enter the correct username as "standard_user" and correct Password as "secret_sauce"
    And I click on the Login Button
    Then I should land on the home page
     @regression
  Scenario Outline: This scenario is to define the failure path
    When I enter the username as "<UserName>" and Password as "<Password>"
    And I click on the Login Button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | UserName | Password |
      | abc_xyz  | Abc_efg  |
      | pqr_xyz  | Ert_pqr  |