describe('Routing', () => {
    describe('User not authorized', () => {
        it('Go to Main Page', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Go to Profile Page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Go to Forbiddne Page', () => {
            cy.visit('/acscas');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });
    describe('User authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Go to Profile Page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Go to Articles Page', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
