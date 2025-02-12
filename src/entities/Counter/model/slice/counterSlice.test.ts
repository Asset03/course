import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('', () => {
        expect(
            counterReducer(undefined, counterActions.decrement()),
        ).toEqual({ value: -1 });
    });
});
