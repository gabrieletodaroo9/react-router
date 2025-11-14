import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}