import Card from "../components/Card";

export default function BestSeller({ arrModif }) {

    return (
        <>
            <h2 className="text-center fw-bold">I più venduti</h2>
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