import { useRef, useState, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType, SwiperOptions } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

type SwiperSliderProps<T> = {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    slidesPerView?: number | "auto";
    slidesPerGroup?: number;
    spaceBetween?: number;
    slideClassName?: string;
    slidesOffsetBefore?: number;
    slidesOffsetAfter?: number;
    hideNavigationOnMobile?: boolean;
    breakpoints?: SwiperOptions["breakpoints"];
};

const SwiperSlider = <T,>({
                              items,
                              renderItem,
                              slidesPerView = 1,
                              slidesPerGroup = 1,
                              spaceBetween = 0,
                              slideClassName = "",
                              slidesOffsetBefore = 0,
                              slidesOffsetAfter = 0,
                              hideNavigationOnMobile = false,
                              breakpoints,
                          }: SwiperSliderProps<T>) => {
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);

    const [isAtBeginning, setIsAtBeginning] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const syncNavigationState = (swiper: SwiperType) => {
        setIsAtBeginning(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
    };

    const connectNavigation = (swiper: SwiperType) => {
        if (typeof swiper.params.navigation === "boolean" || !swiper.params.navigation) {
            return;
        }

        swiper.params.navigation.prevEl = prevButtonRef.current;
        swiper.params.navigation.nextEl = nextButtonRef.current;

        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
    };

    const computedBreakpoints: SwiperOptions["breakpoints"] = {
        ...breakpoints,
        1024: {
            ...(breakpoints?.[1024] ?? {}),
            allowTouchMove: false,
        },
    };

    return (
        <div className="relative w-full min-w-0">
            <Swiper
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerGroup}
                slidesOffsetBefore={slidesOffsetBefore}
                slidesOffsetAfter={slidesOffsetAfter}
                breakpoints={computedBreakpoints}
                navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (typeof swiper.params.navigation === "boolean" || !swiper.params.navigation) {
                        return;
                    }

                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                }}
                onInit={(swiper) => {
                    connectNavigation(swiper);
                    syncNavigationState(swiper);
                }}
                onSlideChange={syncNavigationState}
                onReachBeginning={syncNavigationState}
                onReachEnd={syncNavigationState}
                className="w-full"
            >
                {items.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={`h-auto ${
                            slidesPerView === "auto" ? "!w-auto" : ""
                        } ${slideClassName}`}
                    >
                        {renderItem(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={nextButtonRef}
                type="button"
                aria-label="اسلاید بعدی"
                className={`absolute -left-[-12px] top-1/2 z-20 ${hideNavigationOnMobile ? "hidden lg:flex" : "flex"} h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all duration-300 hover:bg-gray-50 ${
                    isAtEnd ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>

            <button
                ref={prevButtonRef}
                type="button"
                aria-label="اسلاید قبلی"
                className={`absolute -right-[-12px] top-1/2 z-20 ${hideNavigationOnMobile ? "hidden lg:flex" : "flex"} h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all duration-300 hover:bg-gray-50 ${
                    isAtBeginning
                        ? "pointer-events-none opacity-0"
                        : "pointer-events-auto opacity-100"
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5 15.75 12l-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SwiperSlider;