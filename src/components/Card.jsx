export default function Card({ obj }) {

    return (
        <div className="col-6 col-lg-3">
            <div className="card h-100">
                <div className="img-container p-3">
                    <img src={obj.image} className="card-img-top " alt="..." />
                </div>
                <div className="card-body">
                    <p className="card-text">{obj.price}</p>
                    <hr />
                    <h5 className="card-title">{obj.title}</h5>
                    <hr />
                    <p className="card-text">{obj.description} </p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link text-black">Scopri di più</a>
                </div>
            </div>
        </div>
    )
}