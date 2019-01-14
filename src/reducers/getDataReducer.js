import { GET_DATA } from "../actions/getData";

const initialState = {
  data: null
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: "Sample"
      };
    default:
      return state;
  }
}
