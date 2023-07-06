export const state = () => ({
  fromLocation: {},
  // 其他的 state
});

export const mutations = {
  setFromLocation(state, location) {
    state.fromLocation = location;
  },
  // 其他的 mutations
};
