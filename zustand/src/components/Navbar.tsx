import { Link } from "react-router-dom";
import useStore from "../store.ts";

export default function Navbar() {
    const { user } = useStore();


    return (
        <nav className="flex justify-between w-full px-5 py-2 text-xl text-white">
            <div className="inline-flex gap-x-6">
                <Link to="/" className="transition ease-in-out hover:text-gray-600">Home</Link>
                <Link to="/counter/" className="transition ease-in-out hover:text-gray-600">Counter</Link>
                <Link to="/form/" className="transition ease-in-out hover:text-gray-600">Form</Link>
            </div>
            <div>
                {user ? `${user.firstName}, ${user.age}` : "Stranger"}
            </div>
        </nav>
    )
}
