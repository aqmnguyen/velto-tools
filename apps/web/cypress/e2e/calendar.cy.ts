describe('Calendar Page', () => {
  beforeEach(() => {
    // Mock external URLs and API calls
    cy.intercept('GET', 'https://calendar.google.com/calendar/render*', {
      statusCode: 200,
      body: '<html><body>Mock Google Calendar</body></html>',
    }).as('googleCalendar');

    cy.intercept('GET', '/api/ics*', {
      statusCode: 200,
      headers: {
        'content-type': 'text/calendar',
      },
      body: 'BEGIN:VCALENDAR\nVERSION:2.0\nEND:VCALENDAR',
    }).as('icsApi');

    // Mock window.open to prevent new tabs/windows
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.visit('/');
  });

  it('should load the calendar page with correct title and description', () => {
    cy.get('#add-to-calendar p')
      .eq(0)
      .should('contain', 'Create a Calender Invitation');
    cy.get('#add-to-calendar p')
      .eq(1)
      .should(
        'contain',
        'You can download an ICS file or generate a GCal link'
      );
  });

  it('should allow filling out the form with valid data', () => {
    const eventTitle = 'Coffee Meeting';
    const eventDetails = 'Discuss project updates';
    const eventLocation = 'Starbucks Downtown';

    // Fill out the form
    cy.get('input[name="title"]').type(eventTitle);
    cy.get('input[name="details"]').type(eventDetails);
    cy.get('input[name="location"]').type(eventLocation);

    // Verify the data is entered
    cy.get('input[name="title"]').should('have.value', eventTitle);
    cy.get('input[name="details"]').should('have.value', eventDetails);
    cy.get('input[name="location"]').should('have.value', eventLocation);
  });

  it('should maintain form state when navigating between fields', () => {
    const testTitle = 'Test Event';
    const testDetails = 'Test Details';

    // Fill out some fields
    cy.get('input[name="title"]').type(testTitle);
    cy.get('input[name="details"]').type(testDetails);

    // Navigate to another field and back
    cy.get('input[name="location"]').click();
    cy.get('input[name="title"]').click();

    // Verify data is still there
    cy.get('input[name="title"]').should('have.value', testTitle);
    cy.get('input[name="details"]').should('have.value', testDetails);
  });

  // TODO: Add tests for the form validation

  // TODO: Add tests for the Google Calendar button
  // TODO: Add tests for the ICS button
});
