import { kea } from 'kea';

export default kea({
  actions: () => ({
    increment: (amount) => ({ amount }),
    decrement: (amount) => ({ amount }),
    reset: true,
  }),
  reducers: ({ actions }) => ({
    counter: [
      0,
      {
        [actions.increment]: (state, { amount }) => state + amount,
        [actions.decrement]: (state, { amount }) => state - amount,
        [actions.reset]: () => 0,
      },
    ],
  }),
});
