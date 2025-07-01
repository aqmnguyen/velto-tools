import ProfileAvatar from '@/components/VirtualCard/ProfileAvatar';

describe('ProfileAvatar Component', () => {
  beforeEach(() => {
    cy.intercept('POST', '/api/upload', { statusCode: 200 }).as('upload');
    cy.mount(<ProfileAvatar />);
  });

  it('renders a profile avatar', () => {
    cy.get('img').should('be.visible');
  });
});
