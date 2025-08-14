describe('User go to Articles page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('articles loaded', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
