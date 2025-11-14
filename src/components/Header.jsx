import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container py-2">
                <NavLink className="navbar-brand fs-4" to="/">Routing </NavLink>
                <div className="navbar-nav fs-4 gap-4">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/contacts">Chi Siamo</NavLink>
                    <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                </div>
            </div>
        </nav>
    )
}