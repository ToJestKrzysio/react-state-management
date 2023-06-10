import {createContext, Dispatch, useContext} from "react"
import {UserData} from "../types.ts";

interface UserContext {
    user: UserData | null;
    setUser: Dispatch<UserData>
}

export const userContext = createContext<UserContext | null>(null)

export function useUserContext(): UserContext {
    const context = useContext(userContext);

    if (context === null) {
        throw new Error("userContext cannot be null.")
    }

    return context
}

export const UserContextProvider = userContext.Provider
