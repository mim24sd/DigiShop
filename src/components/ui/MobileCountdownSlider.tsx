import React, { useMemo } from "react";
import SwiperSlider from "./SwiperSlider";
import ProductCard from "./base/ProductCard";
// حتما AmazingHeader و تایپ DiscountedProduct را اینجا Import کن
// import { AmazingHeader } from "./AmazingHeader";

interface MobileCountdownSliderProps {
    products: DiscountedProduct[];
    remainingSeconds: number;
    backgroundColor?: string;
    images?: string[];
}

export default function MobileCountdownSlider({
                                                  products,
                                                  remainingSeconds,
                                                  backgroundColor = "#e0334e", // رنگ پیش‌فرض: قرمز
                                                  images = [], // تصاویر دیفالت رو در صورت نیاز اینجا ایمپورت و ست کن
                                              }: MobileCountdownSliderProps) {

    // آماده‌سازی آیتم‌ها برای اسلایدر
    const mobileItems = useMemo(() => {
        return products.map((product) => ({
            id: product.id,
            type: "product" as const,
            product,
        }));
    }, [products]);

    return (
        <div className="w-full sm:mx-auto max-w-[1360px]">
            <section
                dir="rtl"
                className="w-full overflow-hidden rounded-2xl py-4"
                style={{ backgroundColor }} // استفاده از استایل اینلاین برای رنگ داینامیک
            >
                {/* هدر موبایل */}
                <div className="px-4 pb-4">
                    <AmazingHeader
                        images={images}
                        remainingSeconds={remainingSeconds}
                        className="rounded-xl"
                    />
                </div>

                {/* اسلایدر موبایل */}
                <SwiperSlider
                    items={mobileItems}
                    slidesPerView={2.2}
                    spaceBetween={8}
                    renderItem={(item, index) => {
                        const isFirst = index === 0;
                        const isLast = index === mobileItems.length - 1;

                        if (item.type !== "product") return null;

                        return (
                            <div
                                key={item.id}
                                className={`flex h-[240px] w-full items-center justify-center bg-white
                                ${isFirst ? "rounded-br-lg rounded-tr-lg" : ""}
                                ${isLast ? "rounded-bl-lg rounded-tl-lg" : ""}`}
                            >
                                <ProductCard product={item.product} />
                            </div>
                        );
                    }}
                />
            </section>
        </div>
    );
}