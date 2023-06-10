import {createBrowserRouter, Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Counter, Form, Home} from "./views";
import {CountContextProvider} from "./context/useCount";
import {UserContextProvider} from "./context/useUser";
import {useState} from "react";
import {UserData} from "./types";


function Root() {
    const [count, setCount] = useState<number>(0)
    const [user, setUser] = useState<UserData | null>(null)

    return (
        <UserContextProvider value={{user, setUser}} >
            <CountContextProvider value={{count, setCount}}>
                <div className="flex h-screen w-screen flex-col bg-gray-900">
                    <Navbar/>
                    <Outlet/>
                </div>
            </CountContextProvider>
        </UserContextProvider>
    )
}

export default createBrowserRouter([
    {
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/counter/",
                element: <Counter/>,
            },
            {
                path: "/form/",
                element: <Form/>
            }
        ]
    }
])
