import { StateCreator, create } from "zustand";

interface CountSlice {
    count: number
    setCount: (count: number) => void;
    increment: () => void;
    decrement: () => void;
}

const createCountSlice: StateCreator<CountSlice, [], []> = (set) => ({
    count: 0,
    setCount: (newCount) => set({count: newCount}),
    increment: () => set(({count}) => ({count: count + 1})),
    decrement: () => set(({count}) => ({count: count - 1})),
})

export const useStore = create<CountSlice>()((...a) => ({
    ...createCountSlice(...a),
}))
export default useStore;
