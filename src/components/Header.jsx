import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg text-white bg-first">
            <div className="container py-2">
                <Logo isHeader={true} />
                <div className="d-flex text-white fs-5 gap-4">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/contacts">Chi Siamo</NavLink>
                    <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                </div>


            </div>
        </nav>
    )
}