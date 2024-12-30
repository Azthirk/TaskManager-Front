import { ApiState } from "../types/types";

const initialState: ApiState = {
    loading: false,
    info: null,
    error: null,
};
  
const apiReducer = (state = initialState, action: any): ApiState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, info: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
  
export default apiReducer;
  