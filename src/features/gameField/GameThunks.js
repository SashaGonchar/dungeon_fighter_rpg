import {moveHeroStep, setIntervalId, clearIntervalId, setEnemyPosition} from "./gameSlice.js";

export const startHeroMove = () => (dispatch, getState) => {
    const state = getState().currentMap;

    if (state.intervalId) return;

    const id = setInterval(() => {
        dispatch(moveHeroStep());
        dispatch(setEnemyPosition());
        const { heroSpot, targetSpot } = getState().currentMap;


        if (heroSpot.x === targetSpot.x && heroSpot.y === targetSpot.y) {
            dispatch(stopHeroMove());
        }
    }, 300);

    dispatch(setIntervalId(id));

};

export const stopHeroMove = () => (dispatch, getState) => {
    const { intervalId } = getState().currentMap;
    if (intervalId) {
        clearInterval(intervalId);
        dispatch(clearIntervalId());
    }
};