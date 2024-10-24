describe("Test the harvest report default values", ()=>{
    beforeEach(()=> {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
    it("Check the page header", ()=> {
        cy.get("[data-cy=page-header]")
        .should("have.text","Harvest Report")
    })
    it("Check the start and end date", ()=>{
        cy.get("[data-cy= start-date]")
        .type('2020-05-05').should('have.value', '2020-05-05')
        cy.get("[data-cy= end-date]")
        .type('2020-05-15').should('have.value', '2020-05-15')
    })
})