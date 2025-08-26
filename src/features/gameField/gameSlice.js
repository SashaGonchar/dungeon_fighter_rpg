import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    map:[],
    level:1
}

const levelMapSlice = createSlice({
    name: "currentMap",
    initialState,
    reducers: {
        createMap(state, action) {
            const level = action.payload;
            const size = 20 + level;

            state.map = Array.from({ length: size }, (_, i) =>
                Array.from({ length: size }, (_, j) => ({
                    x: i,
                    y: j,
                    value: null,
                }))
            );
            state.level = level;
        },

        setCellValue(state, action) {
            const { x, y, value } = action.payload;
            if (state.map[x] && state.map[x][y]) {
                state.map[x][y].value = value;
            }
        },
    },
});


export const {createMap,setCellValue} = levelMapSlice.actions
export default levelMapSlice.reducer