import React from "react";
import SwiperSlider from "./SwiperSlider.tsx";

export interface TopProduct {
    id: string;
    title: string;
    image: string;
    rank: number | string;
}

interface ProductSliderProps {
    products?: TopProduct[];
    title?: string;
}

interface ProductRowProps {
    product: TopProduct;
}

interface ProductColumnProps {
    group?: TopProduct[];
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
    return (
        <div className="grid grid-cols-[72px_36px_1fr] items-center px-3 py-4">
            <div className="flex h-[72px] w-[72px] items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply"
                />
            </div>

            <div className="flex items-center justify-center">
                <span className="text-xl font-black leading-none text-cyan-500">
                    {product.rank}
                </span>
            </div>

            <div className="flex h-full items-center border-b border-gray-200">
                <h3 className="line-clamp-2 text-right text-[12px] font-bold leading-6 text-gray-700">
                    {product.title}
                </h3>
            </div>
        </div>
    );
};

const ProductColumn: React.FC<ProductColumnProps> = ({ group = [] }) => {
    return (
        <div className="h-full px-2">
            {group.map((product) => (
                <ProductRow key={product.id} product={product} />
            ))}
        </div>
    );
};

export const ProductSlider: React.FC<ProductSliderProps> = ({
                                                                products = [],
                                                                title = "پرفروش‌ترین کالاها",
                                                            }) => {
    const groupedProducts: TopProduct[][] = [];

    for (let i = 0; i < products.length; i += 3) {
        groupedProducts.push(products.slice(i, i + 3));
    }

    if (!products.length) {
        return null;
    }

    return (
        <div
            dir="rtl"
            className="group/container relative w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
        >
            <div className="relative mb-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-flame"
                        aria-hidden="true"
                        color="#f9a825"
                    >
                        <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
                    </svg>

                    <h2 className="text-[16px] font-extrabold text-gray-800 sm:text-[18px]">
                        {title}
                    </h2>
                </div>
            </div>

            <SwiperSlider
                items={groupedProducts}
                slidesPerView={4}
                slidesPerGroup={1}
                renderItem={(item) => <ProductColumn group={item} />}
            />
        </div>
    );
};

export default ProductSlider;