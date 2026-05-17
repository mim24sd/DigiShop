import React, {JSX, useEffect, useMemo, useState} from "react";
import {ChevronLeft} from "lucide-react";
import SwiperSlider from "./SwiperSlider";
import ProductCard from "./base/ProductCard";

import amazingTypo from "../../assets/images/amazing/AmazingTypo.svg";
import amazingShortTypo from "../../assets/images/amazing/AmazingShortTypo.svg";
import AmazingLogo from "../../assets/images/amazing/AmazingLogo.svg";
import type {DiscountedProduct} from "./ProductCardList.tsx";

// --- Types ---
type SliderItem =
    | { id: string; type: "featured"; image: string }
    | { id: string; type: "product"; product: DiscountedProduct };

interface CountdownProductSliderProps {
    products: DiscountedProduct[];
    images?: string[];
    timer:string;
    bgColor:string;
}

interface AmazingPromoContentProps {
    images: string[];
    remainingSeconds: number;
    desktop?: boolean;
}

// --- Utils ---
const TimeUtils = {
    pad: (num: number) => num.toString().padStart(2, "0"),
    toPersianNumber: (num: string | number) =>
        num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]),

    getTimeUnits: (totalSeconds: number) => ({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    }),
};

// --- Sub-Components ---
const TimeUnit = ({value}: { value: string }) => (
    <span
        className="bg-white text-bold text-black rounded-md max-w-[26px] min-w-[26px] aspect-square text-center content-center">
    {TimeUtils.toPersianNumber(value)}
  </span>
);

const TimerDisplay = ({seconds}: { seconds: number }) => {
    const {hours, minutes, seconds: secs} = TimeUtils.getTimeUnits(seconds);

    return (
        <div dir="ltr" className="flex gap-1">
            <TimeUnit value={TimeUtils.pad(hours)}/>
            <span className="text-white">:</span>
            <TimeUnit value={TimeUtils.pad(minutes)}/>
            <span className="text-white">:</span>
            <TimeUnit value={TimeUtils.pad(secs)}/>
        </div>
    );
};

const AmazingPromoContent = ({
                                 images,
                                 remainingSeconds,
                                 desktop = false,
                             }: AmazingPromoContentProps) => {
    const content = desktop ? (
        // Desktop View
        <div
            className="flex h-[260px] w-full flex-col items-center justify-between rounded-2xl px-2 text-white">
            <img alt="amazing typo" src={images[0]} className="aspect-square w-[88px]"/>
            <div className="rounded-xl text-lg">
                <TimerDisplay seconds={remainingSeconds}/>
            </div>
            <img alt="amazing image" src={images[1]} className="aspect-square w-[80px]"/>
            <span className="flex items-center text-sm font-medium">
        مشاهده همه <ChevronLeft size={16}/>
      </span>
        </div>
    ) : (
        // Mobile View
        <div className="flex items-center justify-between text-white w-full">
            <div className="flex items-center gap-3">
                <img alt="amazing image" src={images[1]} className="w-[24px] shrink-0"/>
                <img alt="amazing typo" src={images[2]} className="h-[20px] shrink-0"/>
                <div className="text-sm font-bold">
                    <TimerDisplay seconds={remainingSeconds}/>
                </div>
            </div>
            <span className="flex items-center text-sm font-medium">
        همه <ChevronLeft size={16}/>
      </span>
        </div>
    );

    return <a href="/public">{content}</a>;
};

// --- Custom Hook ---
const useCountdown = (initialSeconds: number) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return seconds;
};
// --- Main Component ---
const AMAZING_IMAGES_DEFAULT = [amazingTypo, AmazingLogo, amazingShortTypo];

export default function CountdownProductSlider({
                                                   products,
                                                   bgColor = "#e0334e",
                                                   timer,
                                                   images = AMAZING_IMAGES_DEFAULT,
                                               }: CountdownProductSliderProps): JSX.Element {
    const remainingSeconds = useCountdown(14 * 3600 + 12 * 60 + 7);

    const desktopItems = useMemo<SliderItem[]>(() => [
        {id: "featured", type: "featured", image: ""},
        ...products.map((p) => ({id: p.id, type: "product" as const, product: p})),
    ], [products]);

    const mobileItems = useMemo<SliderItem[]>(() =>
            products.map((p) => ({id: p.id, type: "product" as const, product: p})),
        [products]);

    return (
        <div className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <section dir="rtl" className='w-full overflow-hidden rounded-0 lg:rounded-2xl py-4' style={{ background: bgColor }}>

                {/* Mobile Header */}
                <div className="px-4 pb-4 lg:hidden">
                    <AmazingPromoContent images={images} remainingSeconds={remainingSeconds}/>
                </div>

                {/* Desktop Slider */}
                <div className="hidden lg:block">
                    <SwiperSlider
                        items={desktopItems}
                        slidesPerView={8}
                        spaceBetween={12}
                        slidesOffsetAfter={12}
                        renderItem={(item, index) => {
                            if (item.type === "featured") {
                                return <AmazingPromoContent images={images} remainingSeconds={remainingSeconds}
                                                            desktop/>;
                            }

                            const isSecond = index === 1;
                            const isLast = index === desktopItems.length - 1;

                            return (
                                <div
                                    key={item.id}
                                    className={`flex h-[260px] w-full items-center justify-center bg-white
                  ${isSecond ? "rounded-br-lg rounded-tr-lg" : ""}
                  ${isLast ? "rounded-bl-lg rounded-tl-lg" : ""}`}
                                >
                                    <ProductCard product={item.product}/>
                                </div>
                            );
                        }}
                    />
                </div>

                {/* Mobile Slider */}
                <div className="lg:hidden">
                    <SwiperSlider
                        items={mobileItems}
                        slidesPerView="auto"
                        spaceBetween={0}
                        slidesOffsetBefore={12}
                        slidesOffsetAfter={12}
                        hideNavigationOnMobile
                        renderItem={(item, index) => {
                            const isFirst = index === 0;
                            const isLast = index === mobileItems.length - 1;

                            return (
                                <div className="px-1" key={item.id}>
                                    <div className={`flex h-[240px] w-[130px] items-center justify-center bg-white
                    ${isFirst ? "rounded-br-lg rounded-tr-lg" : ""}
                    ${isLast ? "rounded-bl-lg rounded-tl-lg" : ""}`}
                                    >
                                        <ProductCard product={item.product}/>
                                    </div>
                                </div>
                            );
                        }}
                    />
                </div>
            </section>
        </div>
    );
}