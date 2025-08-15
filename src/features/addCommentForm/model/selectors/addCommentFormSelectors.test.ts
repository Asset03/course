import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getAddCommentFormText,
    getAddCommentFormError,
} from './addCommentFormSelectors';

describe('getAddCommentFormSelectors.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Hello World!',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            'Hello World!',
        );
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
