describe("Artilce views", () => {
	beforeEach(() => {
		cy.intercept("POST", "/api/article/view", { views: 10 }).as("views");
		cy.visit("/article/jakich-technologii-uzylem-do-budowy-bloga-w-2021");
	});
	it("Should show correct amount of views", () => {
		cy.get("[data-cy=views]").should("contain", "10");
	});
});
