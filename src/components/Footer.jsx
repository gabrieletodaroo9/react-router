import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {

    return (
        <>
            <footer className="bg-dark">
                <div className="container">
                    <div className="row py-5 text-light">
                        <div className="col-6 col-md-4 pe-5">
                            <Logo isHeader={false} />
                            <p className="ps-6 mt-5 fw-bold ">Ti guidiamo attraverso la vasta selezione dei migliori prodotti sul mercato. Concentrati solo sul piacere dello shopping; al resto pensiamo noi.
                            </p>
                        </div>
                        <div className="col-6 col-md-2">
                            <ul className="list-unstyled text-center">
                                <h4 className="mb-3 fw-bold fs-3 ">Menu</h4>
                                <li>
                                    <Link className="text-light" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-light" to="/contacts">Chi Siamo</Link>
                                </li>
                                <li>
                                    <Link className="text-light" to="/products">Prodotti</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card bg-dark align-items-center">
                                <div className="text-light">
                                    <p className="text-center mb-3">Il nostro team è tra i migliori nel settore!</p>
                                    <img src="https://images.ctfassets.net/pdf29us7flmy/VC26zIItrakn8Xp435ICR/96da289096ff3440126112e75e43dc70/GettyImages-966267126-optimized.png?w=720&q=100&fm=jpg" alt="" className="card-img-top" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}