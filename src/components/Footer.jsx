import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <footer className="bg-dark">
                <div className="container">
                    <div className="row py-5 text-white">
                        <div className="col ">
                            <h3>AMAZONANDO</h3>
                            <p className="pe-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam quo delectus autem eius earum mollitia consequuntur ullam deserunt totam!
                            </p>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled">
                                <h4 className="mb-3 fw-bold fs-3">Menu</h4>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Chi Siamo</Link>
                                </li>
                                <li>
                                    <Link to="/products">Prodotti</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="card bg-dark">
                                <div className="card-header text-white">
                                    <cite>Il nostro team è tra i migliori nel settore!</cite>
                                </div>
                                <img src="https://images.ctfassets.net/pdf29us7flmy/VC26zIItrakn8Xp435ICR/96da289096ff3440126112e75e43dc70/GettyImages-966267126-optimized.png?w=720&q=100&fm=jpg" alt="" className="card-img-top rounded-5 pt-3" />


                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}