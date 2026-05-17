import React, { JSX, useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import SwiperSlider from "./SwiperSlider";
import ProductCard from "./base/ProductCard";

import amazingTypo from "../../assets/images/amazing/AmazingTypo.svg";
import amazingShortTypo from "../../assets/images/amazing/AmazingShortTypo.svg";
import AmazingLogo from "../../assets/images/amazing/AmazingLogo.svg";
import type {DiscountedProduct} from "./ProductCardList.tsx";

interface CountdownProductSliderMobileProps {
    products: DiscountedProduct[];
    images?: string[];
    timerBackgroundColor?: string;
    initialSeconds?: number;
    allItemsLabel?: string;
    linkHref?: string;
}

interface AmazingPromoContentProps {
    images: string[];
    remainingSeconds: number;
    timerBackgroundColor: string;
    allItemsLabel: string;
    linkHref: string;
}

const TimeUtils = {
    pad: (num: number) => num.toString().padStart(2, "0"),
    toPersianNumber: (num: string | number) =>
        num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d, 10)]),

    getTimeUnits: (totalSeconds: number) => ({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    }),
};

const TimeUnit = ({
                      value,
                      timerBackgroundColor,
                  }: {
    value: string;
    timerBackgroundColor: string;
}) => (
    <span
        className="aspect-square min-w-[26px] max-w-[26px] content-center rounded-md text-center font-bold text-black"
        style={{ backgroundColor: timerBackgroundColor }}
    >
        {TimeUtils.toPersianNumber(value)}
    </span>
);

const TimerDisplay = ({
                          seconds,
                          timerBackgroundColor,
                      }: {
    seconds: number;
    timerBackgroundColor: string;
}) => {
    const { hours, minutes, seconds: secs } = TimeUtils.getTimeUnits(seconds);

    return (
        <div dir="ltr" className="flex gap-1">
            <TimeUnit
                value={TimeUtils.pad(hours)}
                timerBackgroundColor={timerBackgroundColor}
            />
            <span className="text-white">:</span>
            <TimeUnit
                value={TimeUtils.pad(minutes)}
                timerBackgroundColor={timerBackgroundColor}
            />
            <span className="text-white">:</span>
            <TimeUnit
                value={TimeUtils.pad(secs)}
                timerBackgroundColor={timerBackgroundColor}
            />
        </div>
    );
};

const AmazingPromoContent: React.FC<AmazingPromoContentProps> = ({
                                                                     images,
                                                                     remainingSeconds,
                                                                     timerBackgroundColor,
                                                                     allItemsLabel,
                                                                     linkHref,
                                                                 }) => {
    return (
        <a href={linkHref} className="block w-full">
            <div className="flex w-full items-center justify-between text-white">
                <div className="flex items-center gap-3">
                    <img
                        alt="amazing image"
                        src={images[1]}
                        className="w-[24px] shrink-0"
                    />
                    <img
                        alt="amazing typo"
                        src={images[2]}
                        className="h-[20px] shrink-0"
                    />
                    <div className="text-sm font-bold">
                        <TimerDisplay
                            seconds={remainingSeconds}
                            timerBackgroundColor={timerBackgroundColor}
                        />
                    </div>
                </div>

                <span className="flex items-center text-sm font-medium">
                    {allItemsLabel}
                    <ChevronLeft size={16} />
                </span>
            </div>
        </a>
    );
};

const useCountdown = (initialSeconds: number) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        setSeconds(initialSeconds);
    }, [initialSeconds]);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    return seconds;
};

const AMAZING_IMAGES_DEFAULT = [amazingTypo, AmazingLogo, amazingShortTypo];

export default function CountdownProductSliderMobile({
                                                         products,
                                                         images = AMAZING_IMAGES_DEFAULT,
                                                         timerBackgroundColor = "#ffffff",
                                                         initialSeconds = 14 * 3600 + 12 * 60 + 7,
                                                         allItemsLabel = "همه",
                                                         linkHref = "/public",
                                                     }: CountdownProductSliderMobileProps): JSX.Element {
    const remainingSeconds = useCountdown(initialSeconds);

    return (
        <div className="w-full px-0">
            <section
                dir="rtl"
                className="w-full overflow-hidden bg-[#e0334e] py-4 lg:hidden"
            >
                <div className="px-4 pb-4">
                    <AmazingPromoContent
                        images={images}
                        remainingSeconds={remainingSeconds}
                        timerBackgroundColor={timerBackgroundColor}
                        allItemsLabel={allItemsLabel}
                        linkHref={linkHref}
                    />
                </div>

                <SwiperSlider
                    items={products}
                    slidesPerView="auto"
                    spaceBetween={0}
                    slidesOffsetBefore={12}
                    slidesOffsetAfter={12}
                    renderItem={(product, index) => {
                        const isFirst = index === 0;
                        const isLast = index === products.length - 1;

                        return (
                            <div className="px-1" key={product.id}>
                                <div
                                    className={`flex h-[240px] w-[130px] items-center justify-center bg-white
                                    ${isFirst ? "rounded-br-lg rounded-tr-lg" : ""}
                                    ${isLast ? "rounded-bl-lg rounded-tl-lg" : ""}`}
                                >
                                    <ProductCard product={product} />
                                </div>
                            </div>
                        );
                    }}
                />
            </section>
        </div>
    );
}