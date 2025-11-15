import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {

    return (
        <>
            <footer className="bg-first">
                <div className="container">
                    <div className="row py-5 text-light fs-5">
                        <div className="col-12 col-md-6">
                            <Logo isHeader={false} />
                            <p className="ps-6 mt-5 fw-bold ">Ti guidiamo attraverso la vasta selezione dei migliori prodotti sul mercato. Concentrati solo sul piacere dello shopping; al resto pensiamo noi.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bg-first">
                                <div className="text-light text-center">
                                    <p className=" mb-3">Il nostro team è tra i migliori nel settore!</p>
                                    <img src="https://images.ctfassets.net/pdf29us7flmy/VC26zIItrakn8Xp435ICR/96da289096ff3440126112e75e43dc70/GettyImages-966267126-optimized.png?w=720&q=100&fm=jpg" alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}