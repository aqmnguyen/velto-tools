describe('Calendar Page', () => {
  beforeEach(() => {
    cy.visit('/vcard');
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
  });

  it('should load the vcard page with correct title and description', () => {
    cy.get('#vcard p').eq(0).should('contain', 'Create a Virtual Contact Card');
    cy.get('#vcard p')
      .eq(1)
      .should(
        'contain',
        'You can create and download a Virtual Contact Card (vCard / vcf) for yourself or another person.'
      );
  });

  it('should allow submission of the form with valid data', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@example.com';
    const company = 'Example Inc.';
    const tel = '1234567890';
    const fax = '1234567890';
    const jTitle = 'Software Engineer';
    const street = '123 Main St';
    const city = 'Anytown';
    const zipCode = '12345';
    const state = 'CA';
    const country = 'USA';

    // Fill out the form
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="company"]').type(company);
    cy.get('input[name="tel"]').type(tel);
    cy.get('input[name="fax"]').type(fax);
    cy.get('input[name="jTitle"]').type(jTitle);
    cy.get('input[name="street"]').type(street);
    cy.get('input[name="city"]').type(city);
    cy.get('input[name="zipCode"]').type(zipCode);
    cy.get('input[name="state"]').type(state);
    cy.get('input[name="country"]').type(country);
    cy.get('form button[type="submit"]').click();

    // Verify the data is entered
    cy.get('input[name="firstName"]').should('have.value', firstName);
    cy.get('input[name="lastName"]').should('have.value', lastName);
    cy.get('input[name="email"]').should('have.value', email);
    cy.get('input[name="company"]').should('have.value', company);
    cy.get('input[name="tel"]').should('have.value', tel);
    cy.get('input[name="fax"]').should('have.value', fax);
    cy.get('input[name="jTitle"]').should('have.value', jTitle);
    cy.get('input[name="street"]').should('have.value', street);
    cy.get('input[name="city"]').should('have.value', city);
    cy.get('input[name="zipCode"]').should('have.value', zipCode);
    cy.get('input[name="state"]').should('have.value', state);
    cy.get('input[name="country"]').should('have.value', country);

    cy.get('@windowOpen').should('have.been.called');
  });

  it('should stop form submission if required fields are not filled out', () => {
    cy.get('form button[type="submit"]').click();

    cy.get('input[name="firstName"]').should('have.class', '!text-danger');
    cy.get('input[name="lastName"]').should('have.class', '!text-danger');
    cy.get('input[name="tel"]').should('have.class', '!text-danger');
    cy.get('@windowOpen').should('not.have.been.called');
  });
});
