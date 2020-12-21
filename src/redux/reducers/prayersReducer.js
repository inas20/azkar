import {SAVE_TIME_ZONE} from '../actions/actionTypes';

const INITIAL_STATE = {
    timings:{}, 
    timeZone: {},
    hijri :{}
  };
  
export default prayersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {        
        case SAVE_TIME_ZONE:  
            return{
                ...state,
                timings: action.zoneTime?.timings,
                timeZone: action.zoneTime?.timezone,
                hijri: action.zoneTime?.hijri
            }
        default:
            return state;
    }
}