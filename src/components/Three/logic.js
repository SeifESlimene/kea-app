import { kea } from 'kea';

export const logic = kea({
  actions: () => ({
    incrementRed: (amount) => ({ amount }),
    incrementBlue: (amount) => ({ amount }),
    incrementMagenta: (amount) => ({ amount }),
  }),
  reducers: ({ actions }) => ({
    red: [
      0,
      {
        [actions.incrementRed]: (state, { amount }) => state + amount,
        [actions.incrementMagenta]: (state, { amount }) => state + amount,
      },
    ],
    blue: [
      0,
      {
        [actions.incrementBlue]: (state, { amount }) => state + amount,
        [actions.incrementMagenta]: (state, { amount }) => state + amount,
      },
    ],
  }),
  selectors: ({ selectors }) => ({
    magenta: [() => [selectors.red, selectors.blue], (red, blue) => red + blue],
  }),
});
