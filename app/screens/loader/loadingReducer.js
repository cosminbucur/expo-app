// TODO: loading reducer

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOADER_TRIGGER':
    return true;
  case 'LOADER_SUCCESS':
    return false;
  default:
    return state;
  }
};
