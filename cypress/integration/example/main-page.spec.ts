/// <reference types="cypress" />

import { dataTestIds } from '../../support/commons';

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('MainPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain correct title', () => {
    cy.getByTestId(dataTestIds.mainTitle).contains('ToDos');
  });

  it('should display add button on double click', () => {
    // when
    cy.getByTestId(dataTestIds.mainPageContent).dblclick();

    // then
    cy.getByTestId(dataTestIds.addButton).should('exist');
  });

  it('should hide add button after another double click', () => {
    // when
    cy.getByTestId(dataTestIds.mainPageContent).dblclick();
    cy.getByTestId(dataTestIds.mainPageContent).dblclick();

    // thne
    cy.getByTestId(dataTestIds.addButton).should('not.exist');
  });

  it('should note after double click on add button', () => {
    // when
    cy.getByTestId(dataTestIds.mainPageContent).dblclick();
    cy.getByTestId(dataTestIds.addButton).dblclick();

    // then
    cy.getByTestId(dataTestIds.editableNote).should('exist');
  });
});
