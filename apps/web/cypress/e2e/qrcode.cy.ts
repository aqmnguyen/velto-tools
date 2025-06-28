describe('QR Code - Website', () => {
  beforeEach(() => {
    cy.visit('/qrcode');
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
  });

  it('should load the qrcode page with correct title and description', () => {
    cy.get('#qrcode p').eq(0).should('contain', 'Generate a QR Code');
    cy.get('#qrcode p')
      .eq(1)
      .should(
        'contain',
        'You can generate a QR code for URLs, Wifi networks, and more.'
      );
  });

  it('should generate a QR code when website value is present', () => {
    cy.get('input[name="url"]').clear().type('https://www.google.com');
    cy.get('canvas').should('exist');
  });

  it('should not generate a QR code when website value is not present', () => {
    cy.get('input[name="url"]').clear();
    cy.get('body').click();

    cy.get('input[name="url"]').should('have.class', '!text-danger');
    cy.get('canvas').should('not.exist');
  });
});

describe.only('QR Code - Static', () => {
  beforeEach(() => {
    cy.visit('/qrcode');
    cy.wait(500);
    cy.get('button[data-key="static-text-qr-code"]').click();
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
  });

  it('should load the qrcode page with correct title and description', () => {
    cy.get('#qrcode p').eq(0).should('contain', 'Generate a QR Code');
    cy.get('#qrcode p')
      .eq(1)
      .should(
        'contain',
        'You can generate a QR code for URLs, Wifi networks, and more.'
      );
  });

  it('should generate a QR code when website value is present', () => {
    cy.get('input[name="text"]').clear().type('Hello world!');
    cy.get('canvas').should('exist');
  });

  it('should not generate a QR code when website value is not present', () => {
    cy.get('input[name="text"]').clear();
    cy.get('body').click();

    cy.get('input[name="text"]').should('have.class', '!text-danger');
    cy.get('canvas').should('not.exist');
  });
});
