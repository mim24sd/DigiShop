import React from "react";
import SwiperSlider from "./SwiperSlider";

export interface CategoryItem {
    image: string;
    title: string;
}

type ImageCategoryProps = {
    title: string;
    items: CategoryItem[];
};

const ImageCategory: React.FC<ImageCategoryProps> = ({title = "دسته بندی ها", items}) => {
    const pairs: CategoryItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
        pairs.push(items.slice(i, i + 2));
    }

    return (
        <div dir="rtl" className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <div className="mb-4 flex items-center justify-start">
                <h2 className="flex items-center gap-0.5 text-[14px] font-bold text-gray-800">
                    {title}
                </h2>
            </div>
            <SwiperSlider
                items={pairs}
                slidesPerView={4}
                slidesPerGroup={1}
                spaceBetween={8}
                hideNavigationOnMobile
                breakpoints={{
                    480: {slidesPerView: 5, spaceBetween: 8},
                    640: {slidesPerView: 6, spaceBetween: 10},
                    768: {slidesPerView: 7, spaceBetween: 10},
                    1024: {slidesPerView: 7.5, spaceBetween: 12},
                }}
                renderItem={(pair) => (
                    <div className="flex flex-col gap-4 py-2">
                        {pair.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2 text-center cursor-pointer"
                            >
                                <div className="w-[72px] lg:w-[100px] aspect-square overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-xs font-bold text-gray-700 line-clamp-2 leading-5">
                                {item.title}
                            </span>
                            </div>
                        ))}
                    </div>
                )}
            />
        </div>
    );
};

export default ImageCategory;
