import BannerUCL from "../components/BannerUCL";
import BestSeller from "../components/BestSeller";
import Jumbotron from "../components/Jumbotron";
import BlackFridayBanner from "../components/BlackFridayBanner";

export default function HomePage({ bestSellers }) {

    return (
        <>
            <main className="bg-second">

                <Jumbotron topShadow={false} />
                <BestSeller bestSellers={bestSellers} />
                <BlackFridayBanner />
                <BannerUCL />

            </main>


        </>
    )
}