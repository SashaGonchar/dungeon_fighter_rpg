import {configureStore} from "@reduxjs/toolkit";
import gameSlice from "../features/gameField/gameSlice.js";

export const store = configureStore({
    reducer:{
        currentMap:gameSlice,
    },
})