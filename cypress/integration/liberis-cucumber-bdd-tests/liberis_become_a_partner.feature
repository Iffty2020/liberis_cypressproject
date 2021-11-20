Feature: Become a partner page functions of the website

    As a user,
    I want to be able to navigate to the become a partner page,
    So that I can use all the functionality of the page
       
Scenario: Navigate to 'Become a partner page'
Given a user opens the Liberis homepage
When the Get a demo button is clicked
Then the user should land on the become a partner page
And the 3 types of partners radio button options should be visible

Scenario: Unselected Partner Type Validation
Given the user is on the become a partner page
When Get a demo button is clicked
Then the user should be alerted with a validation message