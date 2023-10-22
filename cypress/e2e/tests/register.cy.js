import { registerPage } from "../../pages/registerPage"
const registerObj=new registerPage()
import registerData from '../../fixtures/registerData.json'

describe ('registration', ()=>{

    it('register flow', ()=>{
        registerObj.openURL();
        registerObj.enterFirstName(registerData.fName)
        registerObj.enterlastName(registerData.lastname)
        registerObj.enterEmail(registerData.email)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPass(registerData.confirmPassword)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.checkBoxSubscribe()
        registerObj.clickOnConitnue()
        cy.get(registerObj.weblocators.successMessage).should('have.text', registerData.message);

        
    })
})