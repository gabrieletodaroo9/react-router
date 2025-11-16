import { Link } from "react-router-dom";

export default function BlackFridayBanner() {
    return (
        <>
            <div className="bg-dark text-white">
                <div className="container d-flex justify-content-between align-items-center py-5 px-5 ">
                    <div>
                        <h1 className="fw-bold">
                            <span className="text-danger">BLACK </span>FRIDAY <span className="text-danger">WEEK</span>
                        </h1>
                    </div>
                    <div>
                        <p className="fs-2 fw-bold rotate">
                            FINO AL <span className="text-danger">70%</span>
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-danger rounded-pill px-3 py-4">
                            <Link to="/products" className="text-black fw-bold fs-4">SCOPRI LE OFFERTE</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}