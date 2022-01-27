describe("Redirects work properly", () => {
	it("should correctly redirect to article page and go back", () => {
		cy.visit("/");
		cy.get("[data-cy=article-link-ckyok8sg0174w0c995mvrz2wq]").click();
		cy.url().should("include", "/article");
		cy.get("[data-cy=home-link]").click();
		cy.url().should("include", "/");
	});
});

export {};
