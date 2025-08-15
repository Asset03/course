import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'IT IT IT world!',
    img: 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
    views: 0,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asva' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asva' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
