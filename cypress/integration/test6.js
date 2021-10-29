describe('My Second Test Suite', function () {
    it('My First Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.mouse-hover-content').invoke('show')
        // handeling Invisible element
        cy.contains('Top').click({force:true})
cy.url().should('include','top')
    })

})

