import deepFreeze from 'deep-freeze';

import alertWordsReducer from '../alertWordsReducer';
import { REALM_INIT, INIT_ALERT_WORDS } from '../../actionConstants';

describe('alertWordsReducer', () => {
  describe('REALM_INIT', () => {
    test('when `alert_words` data is provided init state with it', () => {
      const initialState = deepFreeze([]);
      const action = deepFreeze({
        type: REALM_INIT,
        data: {
          alert_words: ['word', '@mobile-core', 'alert'],
        },
      });
      const expectedState = ['word', '@mobile-core', 'alert'];

      const actualState = alertWordsReducer(initialState, action);

      expect(actualState).toEqual(expectedState);
    });

    test('when no `alert_words` data is given do not mutate state', () => {
      const initialState = deepFreeze(['word']);
      const action = deepFreeze({
        type: REALM_INIT,
        data: {},
      });

      const actualState = alertWordsReducer(initialState, action);

      expect(actualState).toBe(initialState);
    });
  });

  describe('INIT_ALERT_WORDS', () => {
    test('on first call adds new data', () => {
      const initialState = deepFreeze([]);
      const action = deepFreeze({
        type: INIT_ALERT_WORDS,
        alertWords: ['word', '@mobile-core', 'alert'],
      });
      const expectedState = ['word', '@mobile-core', 'alert'];

      const actualState = alertWordsReducer(initialState, action);

      expect(actualState).toEqual(expectedState);
    });

    test('subsequent calls replace existing data', () => {
      const initialState = deepFreeze(['word', '@mobile-core', 'alert']);
      const action = deepFreeze({
        type: INIT_ALERT_WORDS,
        alertWords: ['word', '@mobile-core', 'new alert'],
      });
      const expectedState = ['word', '@mobile-core', 'new alert'];

      const actualState = alertWordsReducer(initialState, action);

      expect(actualState).toEqual(expectedState);
    });
  });
});
