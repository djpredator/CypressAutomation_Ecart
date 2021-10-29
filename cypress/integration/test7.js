describe('My Second Test Suite', function () {
    it('My First Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then(function(e1)
        {
            const url = e1.prop('href')
            
        
        })
        
    
        
    })

})

