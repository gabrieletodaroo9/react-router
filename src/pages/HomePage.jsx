import BannerUCL from "../components/BannerUCL";
import BestSeller from "../components/BestSeller";
import Jumbotron from "../components/Jumbotron";
import BlackFridayBanner from "../components/BlackFridayBanner";
import adsBanner1 from "../assets/ads-banner1.png"
import adsBanner2 from "../assets/ads-banner2.png"
import adsBanner4 from "../assets/ads-banner4.jpg"

export default function HomePage({ bestSellers }) {

    return (
        <>
            <main className="bg-second position-relative">
                <div className="position-absolute ads-banner">
                    <img src={adsBanner1} alt="" />
                </div>
                <div className="position-absolute ads-banner2">
                    <img src={adsBanner2} alt="" />
                </div>
                <Jumbotron topShadow={false} />
                <div className="d-none ads-banner4">
                    <img src={adsBanner4} alt="" />
                </div>

                <BestSeller bestSellers={bestSellers} />
                <BlackFridayBanner />
                <BannerUCL />

            </main>


        </>
    )
}