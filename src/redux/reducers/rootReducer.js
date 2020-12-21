import {combineReducers} from "redux";

import quranReducer from "./quranReducer";
import uiReducer from "./uiReducer";
import prayersReducer from "./prayersReducer";

export const rootReducer = combineReducers({
    quran: quranReducer,
    ui: uiReducer,
    prayers: prayersReducer
});