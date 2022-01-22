describe("Tag search work properly", () => {
	it("Should hide post if it doesnt include searched tag", () => {
		cy.visit("/");
		cy.get("[data-cy=tag-SQL]").click();
		cy.get("[data-cy=article-link-ckyok8sg0174w0c995mvrz2wq]").should(
			"not.exist"
		);
	});
	it("Should show post if it does include searched tag", () => {
		cy.get("[data-cy=tag-Blogowanie]").click();
		cy.get("[data-cy=article-link-ckyok8sg0174w0c995mvrz2wq]").should(
			"be.visible"
		);
	});
});

export {};
