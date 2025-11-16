import BestSeller from "../components/BestSeller";
import Jumbotron from "../components/Jumbotron";

export default function HomePage({ bestSellers }) {

    return (
        <>
            <main className="bg-second">
                <Jumbotron topShadow={false} />
                <div className="container p-5">
                    <BestSeller bestSellers={bestSellers} />
                </div>
            </main>


        </>
    )
}