describe("Home page interactions", () => {
	it("should navigate to home page", () => {
		cy.visit("/");
	});
	it("should show scrollup button when scrolled", () => {
		cy.visit("/");
		cy.scrollTo(0, 300);
		const scrollup = cy.get("[data-cy=scroll-up-button]");
		scrollup.should("be.visible");
		scrollup.click();
		cy.window().its("scrollY").should("be.eq", 0);
	});
	it("should show rickroll", () => {
		cy.scrollTo("bottom");
		cy.get("[data-cy=rickroll]").should("be.visible");
	});
});

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
		cy.visit("/");
		cy.scrollTo("bottom");
		const newsletterInput = cy.get("[data-cy=newsletter-input]");
		newsletterInput.type("testemail@email.com");
		cy.get("[data-cy=newsletter-submit]").click();
		cy.get("[data-cy=newsletter-submit]").should("contain.text", "Dzięki");
	});
});

describe("Redirects work properly", () => {
	it("should correctly redirect to article page and go back", () => {
		cy.visit("/");
		cy.get("[data-cy*=article-link]").click();
		cy.url().should("include", "/article");
		cy.get("[data-cy=home-link]").click();
		cy.url().should("include", "/");
	});
});
