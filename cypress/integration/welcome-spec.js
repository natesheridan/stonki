describe("homepage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("User should see their name visible", () => {
        cy.get('.welcome-title').first()
            .should("contain", "John Doe")
    })
    it("User should see a table of with a featured stocks title", () => {
        cy.get('.table-wrapper').first()
            .should("contain", "Featured Stocks");
    })
    it("Both tables on welcome view should have a total length of 23 rows", () => {
        cy.get('tr')
            .should("have.length", "19");
    })
    it("First stock in table should be GOOG, and user should click symbol and see single page", () => {
        cy.get('.t-symbol').first()
            .click();
        cy.get('h2').first()
            .should("contain", "Alphabet")
    })


})