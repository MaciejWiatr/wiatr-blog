describe("Home page interactions", () => {
	it("should navigate to home page", () => {
		cy.visit("/");
	});
	it("should show scrollup button when scrolled", () => {
		cy.scrollTo(0, 300);
		const scrollup = cy.get("[data-cy=scroll-up-button]");
		scrollup.should("be.visible");
	});
	it("should scroll to document top if scrollup clicked", () => {
		cy.scrollTo(0, 300);
		cy.get("[data-cy=scroll-up-button]").click();
		cy.window().its("scrollY").should("be.eq", 0);
	});
	it("should show rickroll", () => {
		cy.scrollTo("bottom");
		cy.get("[data-cy=rickroll]").should("be.visible");
	});
});

export {};
