import BrandSlider from "../ui/BrandSlider.tsx";
import BrandSliderMobile from "../ui/BrandSliderMobile.tsx";

interface BrandsProps {
    id: string
    name: string
    image: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const brands: BrandsProps[] = [
    {id: "1", name: "Apple", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg"},
    {id: "2", name: "Samsung", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/samsung.svg"},
    {id: "3", name: "Google", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"},
    {id: "4", name: "Microsoft", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg"},
    {id: "5", name: "Amazon", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg"},
    {id: "6", name: "Netflix", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg"},
    {id: "7", name: "Nike", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nike.svg"},
    {id: "8", name: "Adidas", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adidas.svg"},
    {id: "9", name: "Sony", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sony.svg"},
    {id: "10", name: "LG", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/lg.svg"},
    {id: "11", name: "HP", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hp.svg"},
    {id: "12", name: "Dell", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dell.svg"},
    {id: "13", name: "Intel", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intel.svg"},
    {id: "14", name: "Nvidia", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nvidia.svg"},
    {id: "15", name: "Spotify", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg"},
    {id: "16", name: "YouTube", image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg"},
];


export default function TopBrands() {
    return (
        <section className="w-full px-4">
            {/* Desktop */}
            <div className="hidden lg:block">
                <BrandSlider brands={brands} slidesPerView={6}/>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <BrandSliderMobile brands={brands}/>
            </div>
        </section>
    );
}