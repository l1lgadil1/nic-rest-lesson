export const setState = (data) => {
  return { type: 'SET_STATE', payload: data };
};

export const deleteAll = () => {
  return { type: 'DELETE_STATE' };
};
