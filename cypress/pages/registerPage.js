export class registerPage {
    
    weblocators={
        register:'a.list-group-item',
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        eMail:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        confirmPassword:'#input-confirm',
        policyCheckbox:'input[type=checkbox]',
        continue:'input.btn.btn-primary',
        successMessage:'h1'
    }

    openURL() {
        cy.visit(Cypress.env('BaseURL'))
        cy.get(this.weblocators.register, {timeout:6000}).eq(1).click()
    }
 
    enterFirstName(FName) {

    cy.get(this.weblocators.firstName,{timeout:6000}).type("Hello")
    }

    enterlastName(lName){
        cy.get(this.weblocators.lastName).type(lName);
    }
    enterEmail(email) {
        cy.get(this.weblocators.eMail).type(email)
    }
    enterTelephone(phone){
        cy.get(this.weblocators.telephone).type(phone)
    }
    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
    }
    enterConfirmPass(confirmPassword) {
        cy.get(this.weblocators.confirmPassword).type(confirmPassword)
    }

    checkBoxSubscribe(){
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOnConitnue() {
        cy.get(this.weblocators.continue).click()
}
}