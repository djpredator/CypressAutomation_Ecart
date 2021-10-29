describe('My Second Test Suite', function () {
    it('My First Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
// Window:alert
cy.on('window:alert',(str)=>
{
    // Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm',(str)=>
{
    // Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

// page open inn new page
    cy.get('#opentab').invoke('removeAttr','target').click()

    cy.url().should('include','rahulshettyacademy')
// go back
    cy.go('back')
    })

}) 

