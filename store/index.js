export const state = () => ({
  fromLocation: {},
  toLocation: {},
  // 其他的 state
});

export const mutations = {
  setFromLocation(state, location) {
    state.fromLocation = location;
  },
  setToLocation(state, location) {
    state.toLocation = location;
  },
  // 其他的 mutations
};
