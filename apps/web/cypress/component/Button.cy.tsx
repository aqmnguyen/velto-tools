import ButtonComponent from '@/components/Button';

describe('Button Component', () => {
  it('renders a button', () => {
    const text = 'Click me';
    cy.mount(
      <ButtonComponent className='bg-success-500' isIconOnly={false} size='lg'>
        {text}
      </ButtonComponent>
    );
    cy.get('button').should('be.visible').contains(text);
  });
});
