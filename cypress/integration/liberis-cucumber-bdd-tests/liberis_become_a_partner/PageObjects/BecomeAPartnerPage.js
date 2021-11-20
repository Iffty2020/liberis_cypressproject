class BecomeAPartnerPage{

static openBecomeAPartnerPage()
{
    cy.visit('/become-a-partner')
}
static verifyBecomeAPartnerPageOpened()
{
    cy.contains('div.inner-content', 'Type of partner').should('be.visible')
}

static verifyImABrokerRadioBtn()
{
    cy.get('[for="I\'m a Broker"]').should('have.text','I\'m a Broker').should('be.visible')
    cy.get('[for="I\'m an ISO"]').should('have.text','I\'m an ISO').should('be.visible')
    cy.get('[for="I\'m a Strategic Partner"]').should('have.text','I\'m a Strategic Partner').should('be.visible')
}

static verifyImAnIsoRadioBtn()
{
    cy.get('[for="I\'m an ISO"]').should('have.text','I\'m an ISO').should('be.visible')
}

static verifyImAStrategicPartnerRadioBtn()
{
    cy.get('[for="I\'m a Strategic Partner"]').should('have.text','I\'m a Strategic Partner').should('be.visible')
}

static RadioBtnSectionDemoBtn()
{
    cy.get('.btn.btn--medium.js-partner-hero-button').contains('Get a demo').click()
}

static verifyRadioBtnValidationMessage()
{
    cy.get('.ph-error-inner').should('have.text','Please select a type of partner').should('be.visible')
}
}

export default BecomeAPartnerPage;