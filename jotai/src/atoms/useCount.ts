import { atom, useAtom } from "jotai"

export const countAtom = atom(0);

export function useCount() {
    const [count, setCount] =  useAtom(countAtom)

    return {
        count,
        setCount,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
    }
}
