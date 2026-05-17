import { Star } from 'lucide-react';
import SwiperSlider from "./SwiperSlider.tsx";

interface BrandItem {
    id: string;
    image: string;
    name: string; // اضافه کردن نام برند
}

interface BrandSliderProps {
    brands?: BrandItem[];
    title?: string;
}

const BrandSliderMobile = ({
                         brands = [],
                         title = "محبوب‌ترین برندها",
                     }: BrandSliderProps) => {
    return (
        <div dir="rtl" className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <div
                dir="rtl"
                className="group/container relative w-full p-4"
            >
                <div className="mb-4 flex items-center justify-start">
                    <h2 className="flex items-center gap-1 text-[14px] font-bold text-gray-800">
                        <Star size={18} className="text-gray-800"/>
                        {title}
                    </h2>
                </div>

                <SwiperSlider
                    items={brands}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    spaceBetween={8}
                    hideNavigationOnMobile
                    renderItem={(brand) => (
                        <div className="inline-flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-200 flex items-center justify-center p-2">
                                <img
                                    src={brand.image}
                                    alt={`brand-${brand.id}`}
                                    loading="lazy"
                                    className="h-[78px] aspect-square object-contain"
                                />
                            </div>
                            <div className="bg-white text-center px-2 py-1 text-sm font-medium w-full">
                                {brand.name}
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default BrandSliderMobile;