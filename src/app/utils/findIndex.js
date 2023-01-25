export function findIndex(state, id) {
  const index = state.findIndex((s) => s.id === id);
  return index;
}
