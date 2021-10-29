describe('My First Test Suite', function () {
    it('My First Case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('GoDigital')
        })


        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text()
            if (textVeg.includes("Cashews")) {
                $e1.find('button').click()
            }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
// this is to print inn logs
        cy.get('.brand').then(function(logoelement)
        {
cy.log(logoelement.text())
        })
   
    })

})

