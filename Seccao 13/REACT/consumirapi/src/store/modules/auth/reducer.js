import * as types from '../types';
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCES: {
      const newState = { ...state};
      newState.isLoggedIn = true;
      newState.token = action.token;
      newState.user = action.user;
      
      return state;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState};
      return initialState;
    }

    case types.LOGIN_REQUEST: {
      console.log('Reducer', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
