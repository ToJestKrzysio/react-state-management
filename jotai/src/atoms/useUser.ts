import { atom, useAtom } from "jotai";
import { UserData } from "../types";


export const userAtom = atom<UserData | null>(null)

export function useUser() {
    const [user, setUser] = useAtom(userAtom)

    return {user, setUser}
}
