import {useDispatch, useSelector} from "react-redux";
import {setTargetSpot} from "./gameSlice.js";
import {startHeroMove} from "./GameThunks.js";


function MapGrid() {
    const map = useSelector((state) => state.currentMap.map);
    const dispatch = useDispatch();
    if (map.length === 0) return null;

    return (
        <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${map.length}, 30px)` }}
        >
            {map.map((row) =>
                row.map((cell) => (
                    <div
                        key={`${cell.x}-${cell.y}`}
                        className={`flex items-center justify-center w-8 h-8 border border-gray-400 text-xs cursor-pointer ${
                            cell.player ? "bg-blue-500" : "bg-white"   // 👈 теперь герой виден
                        }`}
                        onClick={()=>{
                            dispatch(setTargetSpot({ x: cell.x, y: cell.y }));
                            dispatch(startHeroMove());
                        }}
                    >
                    </div>
                ))
            )}
        </div>
    );
}

export default MapGrid;