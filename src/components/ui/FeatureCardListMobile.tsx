import React from "react";
import {ChevronLeft} from "lucide-react";

export interface ProductItem {
    id: string;
    title: string;
    image: string;
    discount?: string;
    oldPrice?: string;
    price: string;
}

export interface ProductSliderSection {
    id: string;
    title: string;
    subtitle: string;
    link: string;
    products: ProductItem[];
}

interface FeatureCardListProps {
    data: ProductSliderSection[];
}

const ProductCard: React.FC<{ product: ProductItem }> = ({product}) => {
    return (
        <div className="min-w-[140px] overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            {/* Image */}
            <div className="flex w-[138px] h-[140px] items-center justify-center bg-zinc-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain mix-blend-multiply"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className=" flex flex-col p-2 gap-2 h-[96px] justify-between">
                {/* Title */}
                <h3 className=" text-xs leading-5 text-zinc-800">
                    {product.title}
                </h3>
                <div>
                    {/* Discount + Old Price */}
                    {(product.discount || product.oldPrice) && (
                        <div className=" flex items-center gap-2">
                            {product.discount && (
                                <span className="rounded-xl bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white">
                                {product.discount}
                            </span>
                            )}
                            {product.oldPrice && (
                                <span className="text-[11px] font-semibold text-zinc-400 line-through">
                                {product.oldPrice}
                            </span>
                            )}
                        </div>
                    )}

                    {/* Final Price */}
                    <div className="flex items-end gap-1">
                        <span className="text-base font-extrabold leading-none text-indigo-950">
                        {product.price}
                    </span>
                        <span className="text-[11px] font-bold text-zinc-700">تومان</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionBlock: React.FC<{ section: ProductSliderSection }> = ({section}) => {
    const {title, subtitle, link, products} = section;

    return (
        <section className="w-full" dir="rtl">
            {/* Header */}
            <div className="mb-7 flex items-start justify-between">
                <div>
                    <h2 className="text-sm font-bold text-zinc-900">
                        {title}
                    </h2>
                    <p className="mt-2 text-xs text-zinc-500">
                        {subtitle}
                    </p>
                </div>
                <a href={link} className="flex items-center text-sm  text-slate-700">
                    مشاهده همه
                    <ChevronLeft className="h-4 w-4"/>
                </a>
            </div>

            {/* Products */}
            <div className="flex gap-4 overflow-x-auto pb-2">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
};

const FeatureCardListMobile: React.FC<FeatureCardListProps> = ({data}) => (
    <div className="flex flex-col gap-10">
        {data.map((section) => (
            <SectionBlock key={section.id} section={section}/>
        ))}
    </div>
);

export default FeatureCardListMobile;