describe('My Second Test Suite', function () {
    it('My First Case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
// Table accessing
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Python")) {
            // access next element of a table element
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText= price.text()
                    expect(priceText).to.equal('25')
                })
            }
           
            

        }
        )

    })

})

