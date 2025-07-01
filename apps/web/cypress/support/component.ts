import './commands';
import '../../styles/globals.css';
import { mount } from 'cypress/react';

Cypress.Commands.add('mount', mount);

// Optionally add types for autocompletion
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
