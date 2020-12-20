import { GET_CHAPTER_VERSES, GET_QURAN_CHAPTERS, CLEAR_CHAPTER_VERSES, IS_PAGE_CHANGED } from "../actions/actionTypes";

const INITIAL_STATE = {
    chapters: [],
    verses:[],
    isPageChanged: false
  };
  
export default quranReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {        
        case GET_QURAN_CHAPTERS:  
            return{
            ...state,
            chapters: action.chapters
            }
        case GET_CHAPTER_VERSES:
            return{
                ...state,
                verses: [...state.verses, ...action.verses]
            }

        case CLEAR_CHAPTER_VERSES:
            return{
                ...state,
                verses: []
            }

        case IS_PAGE_CHANGED:
            return{
                ...state,
                isPageChanged: action.isPageChanged
            }
           
            // const {
            //     verses,
            // } = state;
            // verses.push(action.verses);
            // // Finally, update the redux state
            // const newState = { verses };
        
            //return newState;
        default:
            return state
    }
};