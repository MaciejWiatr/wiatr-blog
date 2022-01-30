// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "@cypress/code-coverage/support";
// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
	cy.intercept("GET", "/api/article/comment/*", [
		{
			id: "abcdefgtmamgjpgi",
			articleId: "ckyok8sg0174w0c995mvrz2wq",
			comment: "Wow tests are great",
			userName: "Fellow tester",
			userId: "test@tester.com",
			created: "2022-01-30T15:52:48.385Z",
		},
		{
			id: "abcdefgtmamgjpgi",
			articleId: "ckyok8sg0174w0c995mvrz2wq",
			comment: "Cypress is amazing",
			userName: "Fellow tester",
			userId: "test@tester.com",
			created: "2022-01-30T15:36:06.361Z",
		},
		{
			id: "abcdefgtmamgjpgi",
			articleId: "ckyok8sg0174w0c995mvrz2wq",
			comment: "Bonjour messieurs",
			userName: "Fellow tester",
			userId: "test@tester.com",
			created: "2022-01-29T17:11:49.682Z",
		},
	]);
});
