describe('My First Test', function () {
    it('Visits the TYP Marketing Site', function () {
        cy.visit('localhost:3000')
    })
})

describe('My Second Test', function () {
    it('finds the content "About"', function () {
        cy.visit('localhost:3000')
        cy.contains('About').click();
    })
})

describe('My Third Test', function () {
    it("Clicking About navigates to a new URL", function () {
        cy.visit('localhost:3000')
        cy.contains('About').click()
        //should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/about')
    })
})