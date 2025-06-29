import QRCodeGenerator from '@/components/QRCode/QRCodeGenerator';

describe('QRCodeGenerator Component', () => {
  it('renders the QR code for websites component', () => {
    cy.mount(
      <QRCodeGenerator
        type='website'
        data='https://www.google.com'
        width={200}
        height={200}
      />
    );

    cy.get('canvas').should('be.visible');
  });

  it('renders the QR code for static text component', () => {
    cy.mount(
      <QRCodeGenerator
        type='text'
        data='Hello, world!'
        width={200}
        height={200}
      />
    );

    cy.get('canvas').should('be.visible');
  });

  it('renders the QR code for wifi component', () => {
    cy.mount(
      <QRCodeGenerator
        type='wifi'
        data='WIFI:S:Test;T:WPA/WPA2;P:password;;'
        width={200}
        height={200}
      />
    );

    cy.get('canvas').should('be.visible');
  });

  it('doesnt render with missing data', () => {
    cy.mount(<QRCodeGenerator type='wifi' data='' width={200} height={200} />);

    cy.get('canvas').should('not.exist');
  });
});
