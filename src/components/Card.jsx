export default function Card({ obj }) {

    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 text-first">
                <div className="img-container p-3 position-relative">
                    <img src={obj.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body bg-third">
                    <span className="position-absolute card-text fw-bold text-dark fs-4 bg-second px-3 py-2 rounded-pill">{obj.price}$</span>
                    <h4 className="card-title text-first">{obj.title}</h4>
                    <hr />
                    <p className="card-text">{obj.description} </p>
                    <a href="#" className="card-link text-black">Scopri di più</a>
                </div>
            </div>
        </div>
    )
}