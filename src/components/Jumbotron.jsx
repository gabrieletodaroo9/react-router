import { Link } from "react-router-dom";

export default function Jumbotron({ topShadow }) {


    return (
        <div class={"jumbotron p-5 bg-light rounded-3"} style={topShadow ? { boxShadow: '0 -10px 10px 13px rgba(0, 0, 0, 0.05)' } : { boxShadow: '0 10px 10px 13px rgba(0, 0, 0, 0.05)' }
        }>
            <div class="container-fluid py-2 flex-column d-flex justify-content-around align-items-center">
                <h1 class="display-5 fw-bold">Qui trovi tutti i prodotti che desideri!</h1>
                <p class="col-md-8 fs-4 text-center mb-3">
                    Il nostro vero prodotto è la fiducia. Dalla selezione all'acquisto, fino alla consegna alla tua porta, lavoriamo per rendere ogni click su Amazonando una garanzia di qualità, sicurezza e soddisfazione.
                </p>
                <button class="btn btn-primary btn-lg p-4 rounded-pill" type="button">
                    <Link to="/products">Scopri i prodotti!</Link>
                </button>
            </div>
        </div >
    )
}