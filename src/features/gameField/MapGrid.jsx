import { useSelector, useDispatch } from "react-redux";
import { setCellValue } from "./gameSlice.js";

function MapGrid() {
    const dispatch = useDispatch();
    const map = useSelector((state) => state.currentMap.map);

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
                            cell.value ? "bg-red-500" : "bg-white"
                        }`}
                        onClick={() =>
                            dispatch(
                                setCellValue({
                                    x: cell.x,
                                    y: cell.y,
                                    value: cell.value ? null : 1,
                                })
                            )
                        }
                    >
                        {cell.value || ""}
                    </div>
                ))
            )}
        </div>
    );
}

export default MapGrid;