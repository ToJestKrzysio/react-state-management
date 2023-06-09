import {createBrowserRouter, Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Counter, Form, Home} from "./views";
import {CountContextProvider} from "./context/useCount.ts";
import {useState} from "react";


function Root() {
    const [count, setCount] = useState<number>(0)
    return (
        <CountContextProvider value={{count, setCount}}>
            <div className="flex h-screen w-screen flex-col bg-gray-900">
                <Navbar/>
                <Outlet/>
            </div>
        </CountContextProvider>

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
