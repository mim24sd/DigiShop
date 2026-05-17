import React from 'react';
import ProductCard from "./base/ProductCard.tsx";

export interface DiscountedProduct {
    id: string;
    title: string;
    image: string;
    currentPrice: string;
    originalPrice: string;
    discountPercentage: string;
}

export const ProductCardList: React.FC<{ products: DiscountedProduct[] }> = ({products}) => {
    return (
        <div dir="rtl" className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <div className="w-full border border-gray-200 rounded-2xl overflow-hidden" dir="rtl">

                {/* Header */}
                <div className="flex items-center justify-center gap-2 py-3 lg:py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" color="#ef4056"
                         className="lucide lucide-ticket-percent-icon lucide-ticket-percent">
                        <path
                            d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                        <path d="M9 9h.01"/>
                        <path d="m15 9-6 6"/>
                        <path d="M15 15h.01"/>
                    </svg>
                    <h2 className="text-xl font-bold text-gray-800">
                        منتخب محصولات تخفیف و حراج
                    </h2>
                </div>

                {/* 👇 این لایه padding داره */}
                <div className="p-4 bg-white">

                    {/* 👇 این لایه فقط برای خط‌هاست */}
                    <div className="bg-gray-200 overflow-hidden rounded-xl">

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px]">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white">
                                    <ProductCard product={product}/>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};