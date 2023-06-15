import { StateCreator, create } from "zustand";
import { UserData } from "./types";

interface CountSlice {
    count: number;
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

interface UserSlice {
    user: UserData | null;
    setUser: (user: UserData) => void; 
}

const createUserSlice: StateCreator<UserSlice> = (set) => ({
    user: null,
    setUser: (newUser) => set({user: newUser})
})

export const useStore = create<CountSlice & UserSlice>()((...a) => ({
    ...createCountSlice(...a),
    ...createUserSlice(...a),
}))
export default useStore;
