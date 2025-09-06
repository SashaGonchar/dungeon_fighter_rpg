import {useDispatch} from "react-redux";
import {createMap, setEnemyPosition, setHeroStartPosition} from "./gameSlice.js";

function GameControlPanel() {
    const dispatch = useDispatch();


    return (
        <div>
            <button className="h-10 w-20 bg-orange-400"
                    onClick={() => dispatch(createMap())}>
                Start new Game
            </button>
            <button className="h-10 w-20 bg-orange-400"
                    onClick={() => dispatch(setHeroStartPosition())}>
                Create hero
            </button>
            <button className="h-10 w-20 bg-orange-400"
                    onClick={() => dispatch(setEnemyPosition())}>
                Create enemy
            </button>
        </div>
    )
}

export default GameControlPanel;