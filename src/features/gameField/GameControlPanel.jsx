import {useDispatch} from "react-redux";
import {createMap} from "./gameSlice.js";

function GameControlPanel () {
    const dispatch = useDispatch();
    const level = 1

    return(
        <div>
            <button className="h-10 w-20 bg-orange-400"
                    onClick={()=> dispatch(createMap(level))}>
                Start new Game</button>
        </div>
    )
}

export default GameControlPanel;