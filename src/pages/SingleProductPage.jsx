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
            <h1>id:{currentProduct.id}</h1>
            <img src={currentProduct.image} alt="" />
            <h2>{currentProduct.title}</h2>
            <p>{currentProduct.description}</p>
            <Link to='/' className="btn btn-dark">Torna alla sezione prodotti</Link>
        </>
    )
}