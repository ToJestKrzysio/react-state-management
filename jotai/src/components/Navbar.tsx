import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-x-6 px-5 py-2 text-xl text-white">
            <Link to="/" className="transition ease-in-out hover:text-gray-600">Home</Link>
            <Link to="/counter/" className="transition ease-in-out hover:text-gray-600">Counter</Link>
            <Link to="/form/" className="transition ease-in-out hover:text-gray-600">Form</Link>
        </nav>
    )
}
