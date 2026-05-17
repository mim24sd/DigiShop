import React from 'react';
import type { ProductSliderSection } from './FeatureCardListMobile';

const FeatureCard: React.FC<{ section: ProductSliderSection }> = ({ section }) => {
    const { title, subtitle, products, link } = section;
    const images = products.slice(0, 4).map((p) => p.image);

    return (
        <div className="flex flex-col p-4">
            {/* Header Section */}
            <div className="text-right mb-4">
                <h3 className="text-gray-800 text-md font-bold leading-7">{title}</h3>
                <p className="text-gray-400 text-[11px]">{subtitle}</p>
            </div>

            {/* 2x2 Image Grid with Inner Lines Only */}
            <div className="grid grid-cols-2 gap-[1px] bg-gray-200">
                {images.map((img, index) => (
                    <div key={index} className="aspect-square flex items-center justify-center p-4 bg-white">
                        <img
                            src={img}
                            alt={`${title}-${index}`}
                            className="object-contain w-full h-full mix-blend-multiply"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Footer Link */}
            <a href={link} className="mt-4 flex items-center justify-center gap-1 text-cyan-500 text-xs font-medium hover:text-cyan-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
                <span>مشاهده</span>
            </a>
        </div>
    );
};

const FeatureCardList: React.FC<{ data: ProductSliderSection[] }> = ({ data }) => {
    return (
        /* استفاده از divide-x-reverse برای ایجاد خط در حالت RTL
           و border برای دور کل مجموعه
        */
        <div
            className="grid grid-cols-4 dir-rtl border border-gray-200 rounded-xl overflow-hidden bg-white divide-x divide-gray-200"
            dir="rtl"
        >
            {data.map((item) => (
                <FeatureCard key={item.id} section={item}/>
            ))}
        </div>
    );
};

export default FeatureCardList;