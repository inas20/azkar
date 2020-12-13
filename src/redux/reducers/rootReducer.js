import quranReducer from "./quranReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    quran: quranReducer,
});