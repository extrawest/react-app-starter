import {
    UPDATE_START,
    UPDATE_FAILURE,
    UPDATE_SUCCESS
} from "../types";

const initialState = {
  data: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...action.payload,
        },
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
