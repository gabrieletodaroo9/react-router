import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container py-2">
                <div className="navbar-nav fs-5 gap-4">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/contacts">Chi Siamo</NavLink>
                    <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                </div>
                <NavLink className="navbar-brand fs-3" to="/">AMAZONANDO </NavLink>

            </div>
        </nav>
    )
}