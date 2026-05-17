import SwiperSlider from "./SwiperSlider.tsx";

interface BrandItem {
    id: string;
    name: string;
    image: string;
}

interface BrandSliderProps {
    brands?: BrandItem[];
    title?: string;
    slidesPerView?: number;
    hideNavigationOnMobile?: boolean;
}

const BrandSlider = ({
                         brands = [],
                         title = "محبوب‌ترین برندها",
                         slidesPerView = 6,
                         hideNavigationOnMobile = false,
                     }: BrandSliderProps) => {

    return (
        <div dir="rtl" className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <div
                dir="rtl"
                className="group/container relative w-full rounded-2xl border border-gray-200 bg-white p-4"
            >
                <div className="mb-6 flex items-center justify-center">
                    <h2 className="text-[16px] font-extrabold text-gray-800 sm:text-[18px]">
                        {title}
                    </h2>
                </div>

                <SwiperSlider
                    items={brands}
                    slidesPerView={slidesPerView}
                    slidesPerGroup={1}
                    hideNavigationOnMobile={hideNavigationOnMobile}
                    renderItem={(brand, index) => (
                        <div className={`flex h-[120px] items-center justify-center ${index < brands.length - 1 ? "border-l border-gray-200" : ""}`}>
                            <img
                                src={brand.image}
                                alt={`brand-${brand.id}`}
                                loading="lazy"
                                className="h-12 w-12 object-contain"
                            />
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default BrandSlider;