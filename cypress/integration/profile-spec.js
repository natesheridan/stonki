import {users} from "./../../src/util/userDumbData"
describe("profile", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/profile")
        let userFavorites = users[123041].portfolio.map(stock => stock.symbol)
    })
  
    it("Should see one table with a header that contains portfolio", () => {
        cy.get('h2').first()
        .should("contain", "User Portfolio")
    })
    it("Should show the users portfolio stocks", () => {
        cy.get('h2').first()
        .should("contain", "User Portfolio")
    })
    it("Should scale the table accordingly based on portfolio length", () => {
        cy.get('h2').first()
        .should("contain", "User Portfolio")
    })
    it("Should have an extra column/row if inside of the porfolio", () => {
        cy.get('h2').first()
        .should("contain", "User Portfolio")
    })
  })