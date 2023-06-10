import {createContext, useContext} from "react"

interface CountContext {
    count: number;
    setCount: (newCount: number) => void;
}

export const countContext = createContext<CountContext | null>(null)

interface useCountContextReturn {
    count: number;
    setCount: (newCount: number) => void;
    increment: () => void;
    decrement: () => void;
}

export function useCountContext(): useCountContextReturn {
    const context = useContext(countContext);

    if (context === null) {
        throw new Error("countContext cannot be null.")
    }

    return {
        count: context.count,
        setCount: context.setCount,
        increment: () => context.setCount(context.count + 1),
        decrement: () => context.setCount(context.count - 1),
    }
}

export const CountContextProvider = countContext.Provider
