import quranReducer from "./quranReducer";
import {combineReducers} from "redux";
import uiReducer from "./uiReducer";

export const rootReducer = combineReducers({
    quran: quranReducer,
    ui: uiReducer
});