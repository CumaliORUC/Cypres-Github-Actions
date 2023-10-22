export class homePage {

    weblocators={
        loginEmail:"input[id=input-email]",
        loginPassword:"input[id=input-password]",
        loginButton:"[type=submit]",
        myAccount:"My Account",
        myAccountLocate:"h2"
    }
    
    openHomePage(){
        cy.visit(Cypress.env('BaseUrl'))
    }
    enterLoginEmail(email) {
        cy.get(this.weblocators.loginEmail).type(email)
    }
    enterLoginPassword(password) {
        cy.get(this.weblocators.loginPassword).type(password)
    }
    clickOnLoginButton() {
        cy.get(this.weblocators.loginButton).click()
    }
    verifySuccessLogin(){ 
    cy.contains(this.weblocators.myAccount).should('exist')
    }

}