import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {

    return (
        <>
            <footer className="bg-first">
                <div className="container">
                    <div className="row py-5 text-light fs-5">
                        <div className="col-12 col-md-8">
                            <Logo isHeader={false} />
                            <p className="ps-4 fs-4 mt-4 fw-bold ">Ti guidiamo attraverso la vasta selezione dei migliori prodotti sul mercato. Concentrati solo sul piacere dello shopping; al resto pensiamo noi.
                            </p>


                        </div>
                        <div className="col-12 col-md-4 ps-5">
                            <div className="bg-first">
                                <h2 className="fw-bold mb-3">Menu</h2>
                                <ul className="list-unstyled text-white">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/contacts">Chi Siamo</Link></li>
                                    <li><Link to="/products">Prodotti</Link></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}