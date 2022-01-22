describe("Reactions should work properly", () => {
	beforeEach(() => {
		cy.visit("/article/jakich-technologii-uzylem-do-budowy-bloga-w-2021");
	});
	it("Should send correct request on reaction", () => {
		cy.intercept("/api/article/reaction", {
			message: "Reaction created",
		}).as("reactionPost");
		cy.get("[data-cy=reaction-Super]").click();
		cy.wait("@reactionPost").its("request.body").should("deep.include", {
			reactionName: "Super",
			articleId: "ckyok8sg0174w0c995mvrz2wq",
		});
	});
});

export {};
