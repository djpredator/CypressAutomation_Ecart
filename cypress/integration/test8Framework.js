import HomePage from "./pageObjects/homePage"
import productPage from "./pageObjects/productPage"
/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
    before(function () {
        cy.fixture("example").then(function (data) {
            this.data = data
        })
    })

    it('My FirstTest case', function () {
        const homepage = new HomePage()
        const productpage = new productPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getEditBox().type(this.data.name)
       homepage.getGender().select(this.data.gender).should('have.value', 'Male')
        homepage.getTwoWayDataBinding().should('have.value', this.data.name)
        homepage.getEditBox().should('have.attr', 'minlength', '2')
        homepage.getEntreprenure().should('be.disabled')
        homepage.getShopTab().click()
        
        this.data.productName

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        var sum=0
        const total=0
homepage.getCheckout().click()
cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {

var eachPrice= $e1.text().replace(/₹./g,"")
sum = sum+Number (eachPrice)
cy.log(sum)
})
cy.get('h3 > strong').then(function(element)
{
    const amount = element.text()
    var res= amount.split(" ")
    res = res[1].trim()
    expect(Number)
    total==res
})
if(sum=== Number(total)){
    cy.log("Calculation Pass")
}
productpage.clickCheckout().click()
productpage.getCountry().type('Ind')
cy.wait(7000)
productpage.getSugestions().click()
cy.wait(2000)
cy.get('.checkbox > label').click()
cy.contains('Purchase').click()
cy.get('.alert').then(function(element)
{
    const actualText=element.text()
   expect(actualText.includes("Success")).to.be.true
})
    })
})