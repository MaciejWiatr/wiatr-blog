describe("Redirects work properly", () => {
	it("should correctly redirect to article page and go back", () => {
		cy.visit("/");
		cy.get("[data-cy*=article-link]").click();
		cy.url().should("include", "/article");
		cy.get("[data-cy=home-link]").click();
		cy.url().should("include", "/");
	});
});

export {};
