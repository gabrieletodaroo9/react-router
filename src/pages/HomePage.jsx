import BestSeller from "../components/BestSeller";
import Jumbotron from "../components/Jumbotron";

export default function HomePage({ data }) {

    const arrModif = data.slice(0, 4)

    return (
        <>
            <main className="bg-light">
                <Jumbotron />
                <div className="container p-4">
                    <BestSeller arrModif={arrModif} />
                </div>
            </main>


        </>
    )
}