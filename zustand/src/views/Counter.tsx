import useStore from "../store.ts";

export default function Counter() {
    const { count, increment, decrement, setCount } = useStore();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-white">
            <h1 className="text-xl mb-3">Current count is</h1>
            <span className="text-8xl mb-10">{count}</span>
            <div className="grid grid-cols-3 w-[600px] gap-x-10">
                <button
                    type="button"
                    onClick={increment}
                    className="w-full text-center rounded bg-green-800 px-5 py-2 text-2xl transition ease-in-out hover:bg-green-700 hover:text-gray-300"
                >
                    Increment
                </button>
                <button
                    type="button"
                    onClick={decrement}
                    className="w-full text-center rounded bg-yellow-800 px-5 py-2 text-2xl transition ease-in-out hover:bg-yellow-700 hover:text-gray-300"
                >
                    Decrement
                </button>
                <button
                    type="button"
                    onClick={() => setCount(0)}
                    className="w-full text-center rounded bg-red-800 px-5 py-2 text-2xl transition ease-in-out hover:bg-red-700 hover:text-gray-300"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
