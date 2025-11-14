import Card from "../components/Card";

export default function BestSeller({ arrModif }) {

    return (
        <>
            <h2 className="text-center fw-bold">I nostri BestSeller <span><i class="bi bi-fire text-danger"></i></span></h2>
            <div className="row p-4 mb-4 g-4">
                {
                    arrModif.map(obj =>
                        <Card obj={obj} />
                    )
                }
            </div>
        </>
    )
}   