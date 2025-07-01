declare global {
  namespace Cypress {
    interface Chainable {
      stubPostHog(): void;
    }
  }
}

// This command blocks all requests to any PostHog domain
Cypress.Commands.add('stubPostHog', () => {
  cy.intercept('POST', '**.posthog.com/**', {
    statusCode: 200,
    body: {},
  });

  cy.intercept('GET', '**.posthog.com/**', {
    statusCode: 200,
    body: {},
  });
});
