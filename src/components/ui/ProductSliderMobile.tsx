import React from "react";
import SwiperSlider from "./SwiperSlider.tsx";

export interface TopProduct {
    id: string | number;
    title: string;
    image: string;
    rank: number | string;
}

interface ProductSliderMobileProps {
    products?: TopProduct[];
    title?: string;
}

const ProductSliderMobile: React.FC<ProductSliderMobileProps> = ({
                                                                     products = [],
                                                                     title = "پرفروش‌ترین کالاها",
                                                                 }) => {
    if (!products.length) return null;

    const grouped: TopProduct[][] = [];
    for (let i = 0; i < products.length; i += 3) {
        grouped.push(products.slice(i, i + 3));
    }

    return (
        <div className="pr-4" dir="rtl">
            {/* آیکون و متن بالای لیست */}
            <div className="flex items-center mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-yellow-600"
                >
                    <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
                </svg>
                <h2 className="text-lg font-bold">{title}</h2>
            </div>

            {/* لیست محصولات */}
            <SwiperSlider
                items={grouped}
                slidesPerView={1.5}
                spaceBetween={8}
                hideNavigationOnMobile
                renderItem={(group) => (
                    <div className="flex flex-col gap-2">
                        {group.map((product) => (
                            <div key={product.id} className="flex flex-row items-center border border-gray-300 rounded-md overflow-hidden gap-2">
                                {/* عکس */}
                                <div className="w-[72px] aspect-square flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-auto object-contain"
                                    />
                                </div>

                                {/* رتبه */}
                                <div className="flex-shrink-0 flex items-center justify-center px-1 gap-1">
                                    <span className="bg-red-500 text-white rounded-full w-[22px] aspect-square flex items-center justify-center text-xs font-bold">
                                        {product.rank}
                                    </span>

                                    {/* عنوان */}
                                    <div className="flex-1 px-1 text-right text-xs line-clamp-2 leading-4">{product.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            />
        </div>
    );
};

export default ProductSliderMobile;