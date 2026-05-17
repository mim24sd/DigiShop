import AmazingOfferBanner from "../ui/AmazingOfferBanner";
import CountdownProductSlider from "../ui/CountdownProductSlider.tsx";
import {sampleProducts} from "./AmazingDeals.tsx";

export default function SupermarketAmazingOffers() {
    return (
        <>
            <div className="hidden lg:block">
                <AmazingOfferBanner/>
            </div>
            <div className="block lg:hidden">
                <CountdownProductSlider products={sampleProducts} timer="11:14:45" bgColor="linear-gradient(225deg, rgb(107, 185, 39) 0%, rgb(157, 196, 77) 100%)" />
            </div>
        </>
    );
}