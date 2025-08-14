import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('User not authorized', () => {
        it('Go to Main Page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to Profile Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to Forbiddne Page', () => {
            cy.visit('/acscas');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Go to Profile Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Go to Articles Page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
