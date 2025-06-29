import BarcodeGenerator from '@/components/Barcode/BarcodeGenerator';

describe('BarcodeGenerator Component', () => {
  it('renders the BarcodeGenerator component', () => {
    cy.mount(<BarcodeGenerator code='1234567890' format='code128' />);
    cy.get('svg').should('be.visible');
  });

  it('should generate a barcode 39 when code is present', () => {
    cy.mount(<BarcodeGenerator code='1234567890' format='code39' />);
    cy.get('svg').should('be.visible');
  });

  it('should generate a barcode ean13 when code is present', () => {
    cy.mount(<BarcodeGenerator code='0799439112766' format='ean13' />);
    cy.get('svg').should('be.visible');
  });

  it('should not generate a ean13 when code is not valid', () => {
    cy.mount(<BarcodeGenerator code='1234567890' format='ean13' />);

    cy.get('svg').should('have.class', 'hidden');
    cy.get('p.error-invalid').should('be.visible');
  });

  it('should generate a barcode ean8 when code is present', () => {
    cy.mount(<BarcodeGenerator code='0783838' format='ean8' />);
    cy.get('svg').should('be.visible');
  });

  it('should not generate a barcode ean8 when code is not valid', () => {
    cy.mount(<BarcodeGenerator code='1234567890' format='ean8' />);
    cy.get('svg').should('have.class', 'hidden');
    cy.get('p.error-invalid').should('be.visible');
  });

  it('should generate a barcode upc when code is present', () => {
    cy.mount(<BarcodeGenerator code='012345678905' format='upc' />);
    cy.get('svg').should('be.visible');
  });

  it('should not generate a barcode ean8 when code is not valid', () => {
    cy.mount(<BarcodeGenerator code='1234' format='upc' />);
    cy.get('svg').should('have.class', 'hidden');
    cy.get('p.error-invalid').should('be.visible');
  });

  it('should show error message when code is not present', () => {
    cy.mount(<BarcodeGenerator code='' format='code128' />);
    cy.get('p.error-empty').should('be.visible');
  });
});
