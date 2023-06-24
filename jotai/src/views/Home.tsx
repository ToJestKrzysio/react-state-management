import { useCount } from "../atoms/useCount";

export default function Home() {
    const { count, increment } = useCount();

    return <div className="flex h-full w-full flex-col items-center justify-center text-white">
        <h1 className="text-xl mb-3">Current count is</h1>
        <span className="text-8xl mb-10">{count}</span>
        <button
            type={"button"}
            onClick={increment}
            className="rounded bg-green-800 px-5 py-2 text-2xl transition ease-in-out hover:bg-green-700 hover:text-gray-300"
        >
            Increment
        </button>
    </div>
}
