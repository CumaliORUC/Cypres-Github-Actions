import { homePage } from "../../pages/homePage"
const homepage=new homePage()
import registerData  from "../../fixtures/registerData.json"


describe ('Home Page add to Card', ()=>{

it('Add to Card', ()=> {
    homepage.openHomePage()
    homepage.enterLoginEmail(registerData.email)
    homepage.enterLoginPassword(registerData.confirmPassword)
    homepage.clickOnLoginButton()
    homepage.verifySuccessLogin()
    })
})