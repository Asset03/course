let profileId = '';

describe('User Go to Profile Page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Profile success loaded', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Name4');
    });

    it('Profile edit', () => {
        cy.updateProfile('new', 'lastname');
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'lastname');
    });
});
