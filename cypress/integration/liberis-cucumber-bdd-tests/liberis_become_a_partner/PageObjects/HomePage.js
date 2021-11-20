class HomePage{

    static openHomepage(){
       cy.visit('/')
    }

    static clickDemoButton(){
       cy.get('.btn').contains('Get a Demo').click()
    }

}

export default HomePage;