import Card from "../components/Card";

export default function BestSeller({ bestSellers }) {

    return (
        <>
            <h2 className="text-center text-first fs-1 fw-bold">I nostri BestSeller <span><i className="bi bi-fire text-danger"></i></span></h2>
            <div className="row p-4 mb-4 g-4">
                {
                    bestSellers.map(obj =>
                        <Card key={obj.id} obj={obj} />
                    )
                }
            </div>
        </>
    )
}   