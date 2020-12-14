import { UI_START_LOADING, UI_STOP_LOADING } from "../actions/actionTypes";

const INITIAL_STATE = {
    isLoading: false
  };
  
export default uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {        
        case UI_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case UI_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state
    }
};