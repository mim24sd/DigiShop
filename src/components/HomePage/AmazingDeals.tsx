import CountdownProductSlider from "../ui/CountdownProductSlider.tsx";
import { dealsProducts } from "../../data/dealsProducts";

export default function AmazingDeals() {
    return (
        <section>
            <CountdownProductSlider products={dealsProducts}/>
        </section>
    )
}
