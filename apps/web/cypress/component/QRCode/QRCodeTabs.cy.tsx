import QRCodeTabs from '@/components/QRCode/QRCodeTabs';

describe('QRCodeTabs Component', () => {
  beforeEach(() => {
    cy.mount(<QRCodeTabs />);
  });

  it('should render the QRCodeSiteForm component', () => {
    cy.get('#qr-code-site-form').should('exist');
  });

  it('should render the QRCodeTextForm component', () => {
    cy.get('button[data-key="static-text-qr-code"]').click();
    cy.get('#qr-code-text-form').should('exist');
  });

  it('should render the QRCodeWifiForm component', () => {
    cy.get('button[data-key="wifi-qr-code"]').click();
    cy.get('#qr-code-wifi-form').should('exist');
  });
});
