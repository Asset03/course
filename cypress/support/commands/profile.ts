export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asva' },
        body: {
            id: '4',
            first: 'Name4',
            lastname: 'Surname4',
            age: 465,
            currency: 'USD',
            country: 'Kazahstan',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://i.ytimg.com/vi/lc0gis09VZs/maxresdefault.jpg',
        },
    });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
