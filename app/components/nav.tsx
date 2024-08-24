import { NavLink } from "@remix-run/react"

export default function Nav() {
    return (
        <nav className="
            bg-white
            flex justify-center
            fixed top-0
            w-full border-b
            z-20"
        >
            <NavLink to="/" className="font-semibold p-2 hover:text-indigo-600">
                About
            </NavLink>
            <NavLink to="/logos" className="font-semibold p-2 hover:text-indigo-600">
                Logos
            </NavLink>
            <NavLink to="/posters" className="font-semibold p-2 hover:text-indigo-600">
                Posters
            </NavLink>
            <NavLink to="/productshots" className="font-semibold p-2 hover:text-indigo-600">
                Product Images
            </NavLink>
        </nav>
    )
}