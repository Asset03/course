import { AddCommentFormSchema } from '../types/addCommentForm';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from './addCommentFormSlice';

describe('addCommentFormSlice.test.ts', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('Hello World!'),
            ),
        ).toEqual({ text: 'Hello World!' });
    });
});
