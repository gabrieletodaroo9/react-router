import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function SingleProductPage() {


    const [currentProduct, setCurrentProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (id > 20) {
                    navigate('/error')
                    return;
                }
                setCurrentProduct(res.data)


            })
            .catch(err => {
                console.log(err);

                navigate('/error')
            }
            )
    }, [id, navigate])

    return (
        <>
            <main>
                <div className="container py-5">
                    <div className="row g-5 py-5">
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-5">
                            <img className="w-100 img-single-product" src={currentProduct.image} alt="" />
                        </div>
                        <div className="col-12 col-lg-6 p-5 d-flex flex-column align-item-start justify-content-between">
                            <span className="fs-1 fw-bold">{currentProduct.price} €</span>
                            <h1>{currentProduct.title}</h1>
                            <hr />
                            <span>{currentProduct.category}</span>
                            <hr />
                            <span>{currentProduct.description}</span>
                            <hr />
                            <span className="pb-5">Quantità residua:{currentProduct.rating?.count}</span>
                            <button className="btn btn-success py-2 fw-bold">Aggiungi al carrello</button>
                            <Link to='/products' className="btn btn-dark py-2 fw-bold">Torna alla sezione prodotti</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}