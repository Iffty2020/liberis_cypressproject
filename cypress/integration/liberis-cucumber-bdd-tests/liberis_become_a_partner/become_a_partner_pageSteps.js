/// <reference types = "Cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import HomePage from './PageObjects/HomePage';
import BecomeAPartnerPage from './PageObjects/BecomeAPartnerPage';

Given('a user opens the Liberis homepage', () =>
{ 
    HomePage.openHomepage()
})

Given('the user is on the become a partner page', () =>
{
     BecomeAPartnerPage.openBecomeAPartnerPage()
     BecomeAPartnerPage.verifyBecomeAPartnerPageOpened()
})

When('the Get a demo button is clicked', () =>
{
    HomePage.clickDemoButton()
})

When('Get a demo button is clicked', () =>
{
    BecomeAPartnerPage.RadioBtnSectionDemoBtn()
})

Then('the user should land on the become a partner page', () =>
{
    BecomeAPartnerPage.verifyBecomeAPartnerPageOpened()
})

And('the 3 types of partners radio button options should be visible', () =>
{
    BecomeAPartnerPage.verifyImABrokerRadioBtn()
    BecomeAPartnerPage.verifyImAnIsoRadioBtn()
    BecomeAPartnerPage.verifyImAStrategicPartnerRadioBtn()
})

Then('the user should be alerted with a validation message', () =>
{
    BecomeAPartnerPage.verifyRadioBtnValidationMessage()
})
