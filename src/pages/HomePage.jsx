import BestSeller from "../components/BestSeller";
import Jumbotron from "../components/Jumbotron";

export default function HomePage({ data }) {

    const arrModif = data.slice(0, 4)

    return (
        <>
            <main className="bg-light">
                <Jumbotron topShadow={false} />
                <div className="container p-5">
                    <BestSeller arrModif={arrModif} />
                </div>
            </main>


        </>
    )
}