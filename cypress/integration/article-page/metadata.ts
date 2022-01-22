describe("Page contains correct metadata", () => {
	beforeEach(() => {
		cy.visit("/article/jakich-technologii-uzylem-do-budowy-bloga-w-2021");
	});
	it("should have correct title", () => {
		cy.window()
			.title()
			.should(
				"contain",
				"Jakich technologii użyłem do budowy bloga w 2021"
			);
	});
	it("should have correct metadata", () => {
		cy.document()
			.get("head meta[property='og:title']")
			.should(
				"have.attr",
				"content",
				"Jakich technologii użyłem do budowy bloga w 2021"
			);
	});
});

export {};
