import { GET_CHAPTER_VERSES, GET_QURAN_CHAPTERS } from "../actions/actionTypes";

const INITIAL_STATE = {
    chapters: [],
    verses:[],
  };
  
export default quranReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {        
        case GET_QURAN_CHAPTERS:  
            return{
            ...state,
            chapters: action.chapters
            }
        case GET_CHAPTER_VERSES:
            const {
                verses,
            } = state;
            verses.push(action.verses);
            // Finally, update the redux state
            const newState = { verses };
        
            return newState;
        default:
            return state
    }
};