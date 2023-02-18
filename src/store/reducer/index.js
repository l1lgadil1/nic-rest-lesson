const initialState = {
  arr: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        arr: action.payload,
      };
    case 'DELETE_STATE':
      return {
        ...state,
        arr: [],
      };
    default:
      return state;
  }
};

export default reducer;
