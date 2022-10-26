Feature: Homepage Feature Scenario

  Background: 
    Given I have launched the application
   When I enter the username "standard_user" and passowrd "secret_sauce"
     And I click on the Login Button

  @sanity
  Scenario: This scenario is to add the products to the cart
    When I click on Add to Cart on product "Sauce Labs Backpack"
    Then Basket item number should be 1
