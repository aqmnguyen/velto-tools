import IconComponent from '@/components/Icon';

describe('Icon Component', () => {
  it('renders an icon', () => {
    cy.mount(
      <IconComponent
        className='mb-3 text-success-500'
        icon='mdi:calendar-outline'
        width={56}
      />
    );
    cy.get('svg').should('be.visible');
  });
});
