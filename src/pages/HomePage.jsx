import { Link } from "react-router-dom";

export default function HomePage() {


    return (
        <>

            <div class="jumbotron p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Qui trovi tutti i prodotti che desideri!</h1>
                    <p class="col-md-8 fs-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem maxime ea debitis dignissimos, repudiandae nulla dicta, eius totam accusamus nemo assumenda, fuga ex deserunt facere optio. Reiciendis, quas cupiditate.
                    </p>
                    <button class="btn btn-primary btn-lg" type="button">
                        <Link to="/products">Scopri i prodotti!</Link>
                    </button>
                </div>
            </div>



        </>
    )
}