import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    map: [],
    targetSpot: {x: 0, y: 0},
    heroSpot: {x: 0, y: 0},
    intervalId: null,
}

const levelMapSlice = createSlice({
    name: "currentMap",
    initialState,
    reducers: {
        createMap(state) {
            state.map = Array.from({length: 20}, (_, i) =>
                Array.from({length: 20}, (_, j) => ({
                    x: i,
                    y: j,
                    player: null,
                    enemy: null,
                }))
            );
        },

        setHeroStartPosition(state) {
            state.heroSpot = { x: 0, y: 0 };
            state.map[0][0].player = true;
        },

        setTargetSpot(state, action) {
            state.targetSpot = action.payload;
        },

        setIntervalId(state, action) {
            state.intervalId = action.payload;
        },

        clearIntervalId(state) {
            state.intervalId = null;
        },

        moveHeroStep(state) {

            const heroSpot = state.heroSpot;
            const targetSpot = state.targetSpot;

            state.map[heroSpot.x][heroSpot.y].player = null;

            if (heroSpot.x < targetSpot.x) heroSpot.x += 1;
            else if (heroSpot.x > targetSpot.x) heroSpot.x -= 1;

            if (heroSpot.y < targetSpot.y) heroSpot.y += 1;
            else if (heroSpot.y > targetSpot.y) heroSpot.y -= 1;

            state.map[heroSpot.x][heroSpot.y].player = true;
        }
    },
});


export const {createMap,
    setHeroStartPosition,
    moveHeroStep,
    setTargetSpot,
    setIntervalId,
    clearIntervalId } = levelMapSlice.actions
export default levelMapSlice.reducer