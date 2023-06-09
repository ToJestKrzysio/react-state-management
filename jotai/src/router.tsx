import {createBrowserRouter, Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import {Counter, Form, Home} from "./views";


function Root() {
    return (
        <div className="flex h-screen w-screen flex-col bg-gray-900">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default createBrowserRouter([
    {
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/counter/",
                element: <Counter />,
            },
            {
                path: "/form/",
                element: <Form />
            }
        ]
    }
])
