describe("Newsletter form should validate and work properly", () => {
	it("should show error message if email isnt valid", () => {
		cy.visit("/");
		cy.scrollTo("bottom");
		const newsletterInput = cy.get("[data-cy=newsletter-input]");
		newsletterInput.type("notanemail");
		cy.get("[data-cy=newsletter-submit]").click();
		cy.get("[data-cy=newsletter-error]").should("be.visible");
	});
	it("should show thank you message if email was correct", () => {
		cy.intercept(
			{
				method: "POST",
				url: "/api/newsletter",
			},
			{ message: "Email added to newsletter" }
		).as("newsletter");
		cy.scrollTo("bottom");
		const newsletterInput = cy.get("[data-cy=newsletter-input]");
		newsletterInput.clear();
		newsletterInput.type("testemail@email.com");
		cy.get("[data-cy=newsletter-submit]").click();
		cy.get("[data-cy=newsletter-submit]").should("contain.text", "Dzięki");
	});
});

export {};
