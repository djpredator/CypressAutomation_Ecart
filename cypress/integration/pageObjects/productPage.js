class productPage {

 clickCheckout(){
   return cy.get(':nth-child(4) > :nth-child(5) > .btn')
 }
 getCountry(){
   return cy.get('#country')
 }
 getSugestions()
 {
   return cy.get('.suggestions > :nth-child(1) > li > a')
 }
}
export default productPage;