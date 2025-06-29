describe('Barcode', () => {
  beforeEach(() => {
    cy.visit('/barcode');
  });

  it('should load the barcode page with correct title and description', () => {
    cy.get('#barcode p').eq(0).should('contain', 'Generate a Barcode');
    cy.get('#barcode p')
      .eq(1)
      .should('contain', 'You can generate a Barcode in various formats.');
  });

  it('should generate a barcode 128 when code is present', () => {
    cy.get('input[name="code"]').clear().type('1234567890');
    cy.get('svg').should('be.visible');
  });

  it('should generate a barcode 39 when code is present', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="code39"]').click();
    cy.get('input[name="code"]').clear().type('1234567890');
    cy.get('svg').should('be.visible');
  });

  it('should generate a barcode ean13 when code is present', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="ean13"]').click();
    cy.get('input[name="code"]').clear().type('0799439112766');
    cy.get('svg').should('be.visible');
  });

  it('should not generate a ean13 when code is not valid', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="ean13"]').click();
    cy.get('input[name="code"]').clear().type('1234567890');

    cy.get('svg').should('have.class', 'hidden');
    cy.get('p.error-invalid').should('be.visible');
  });

  it('should generate a barcode ean8 when code is present', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="ean8"]').click();
    cy.get('input[name="code"]').clear().type('0783838');
    cy.get('svg').should('be.visible');
  });

  it('should not generate a barcode ean8 when code is not valid', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="ean8"]').click();
    cy.get('input[name="code"]').clear().type('1234567890');
    cy.get('svg').should('have.class', 'hidden');
    cy.get('p.error-invalid').should('be.visible');
  });

  it('should generate a barcode upc when code is present', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="upc"]').click();
    cy.get('input[name="code"]').clear().type('012345678905');
    cy.get('svg').should('be.visible');
  });

  it('should not generate a barcode ean8 when code is not valid', () => {
    cy.get('.format-select button').click();
    cy.get('[data-key="upc"]').click();
    cy.get('input[name="code"]').clear().type('1234');
    cy.get('svg').should('have.class', 'hidden');
    cy.get('p.error-invalid').should('be.visible');
  });

  it('should show error message when code is not present', () => {
    cy.get('input[name="code"]').clear();
    cy.get('p.error-empty').should('be.visible');
  });
});
