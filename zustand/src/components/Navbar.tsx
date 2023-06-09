import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-x-4 text-white text-xl">
            <Link to="/" className="hover:text-gray-600 transition ease-in-out">Home</Link>
            <Link to="/counter/" className="hover:text-gray-600 transition ease-in-out">Counter</Link>
            <Link to="/form/" className="hover:text-gray-600 transition ease-in-out">Form</Link>
        </nav>
    )
}
