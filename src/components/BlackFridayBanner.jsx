import { Link } from "react-router-dom";

export default function BlackFridayBanner() {
    return (
        <>
            <div className="bg-first text-white">
                <div className="bf-banner container-fluid container-lg d-flex justify-content-between align-items-center py-5 ">
                    <div>
                        <h1 className="fw-bold me-5">
                            <span className="text-danger">BLACK </span>FRIDAY <span className="text-danger">WEEK</span>
                        </h1>
                    </div>
                    <div>
                        <p className="fs-2 fw-bold rotate">
                            FINO AL <span className="text-danger pe-5">70%</span>
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-danger rounded-pill px-1 py-3">
                            <Link to="/products" className="text-black fw-bold fs-5">SCOPRI LE OFFERTE</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}