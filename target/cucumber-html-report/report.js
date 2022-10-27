$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/HomePage.feature");
formatter.feature({
  "name": "Homepage Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"standard_user\" and passowrd \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.HomePageStepdef.i_enter_the_username_and_passowrd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to add the products to the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I click on Add to Cart on product \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.HomePageStepdef.i_click_on_Add_to_Cart_on_product(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Basket item number should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomePageStepdef.basket_item_number_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario to Sauce lab",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the success path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the correct username as \"standard_user\" and correct Password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_correct_username_as_and_correct_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"\u003cUserName\u003e\" and Password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "abc_xyz",
        "Abc_efg"
      ]
    },
    {
      "cells": [
        "pqr_xyz",
        "Ert_pqr"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"abc_xyz\" and Password as \"Abc_efg\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_username_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is to define the failure path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"pqr_xyz\" and Password as \"Ert_pqr\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_enter_the_username_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepdef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});