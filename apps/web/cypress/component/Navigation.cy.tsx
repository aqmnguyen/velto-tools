import Navigation from '@/components/Navigation';

describe('Navigation Component', () => {
  it('renders all desktop links', () => {
    cy.viewport(1024, 768);
    cy.mount(<Navigation />);

    cy.get('a[href="/"]').contains('ICS File').should('be.visible');
    cy.get('a[href="/vcard"]').contains('VCard').should('be.visible');
    cy.get('a[href="/qrcode"]').contains('QR Code').should('be.visible');
    cy.get('a[href="/barcode"]').contains('Barcode').should('be.visible');
  });

  it('toggles mobile menu', () => {
    cy.viewport(375, 667);
    cy.mount(<Navigation />);
    cy.get('.mobile-menu-toggle').click();

    cy.get('.mobile-menu a[href="/"]')
      .contains('ICS File')
      .should('be.visible');
    cy.get('.mobile-menu a[href="/vcard"]')
      .contains('VCard')
      .should('be.visible');
    cy.get('.mobile-menu a[href="/qrcode"]')
      .contains('QR Code')
      .should('be.visible');
    cy.get('.mobile-menu a[href="/barcode"]')
      .contains('Barcode')
      .should('be.visible');
  });
});
