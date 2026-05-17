import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type ApiSliderItem = {
    id: number;
    title: string;
    image: string;
    webp_image?: string;
    url?: {
        uri?: string;
    };
    hex_code?: string;
};

type ApiWidget = {
    type: string;
    data?: ApiSliderItem[] | { identifier?: string };
    name?: string;
};

type DigikalaResponse = {
    status: number;
    data?: {
        widgets?: ApiWidget[];
    };
};

type BannerSlide = {
    id: number;
    title: string;
    image: string;
    link?: string;
    hexCode: string;
};

const stateBoxClassName =
    "flex h-[180px] w-full items-center justify-center rounded-2xl text-sm md:h-[220px] lg:h-[400px]";

const imageClassName =
    "block h-[180px] w-full object-cover md:h-[220px] lg:h-[400px]";

const normalizeSlides = (response: DigikalaResponse): BannerSlide[] => {
    const widgets = response.data?.widgets ?? [];
    const sliderWidget = widgets[2];

    const sliderItems =
        sliderWidget && Array.isArray(sliderWidget.data)
            ? sliderWidget.data
            : [];

    return sliderItems
        .filter((item) => item.image)
        .map((item) => ({
            id: item.id,
            title: item.title,
            image: item.webp_image || item.image,
            link: item.url?.uri,
            hexCode: item.hex_code ?? "",
        }));
};

const Slider = () => {
    const [slides, setSlides] = useState<BannerSlide[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchSlides = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("/api/digi/banner/", {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("دریافت اطلاعات بنرها با خطا مواجه شد.");
                }

                const result: DigikalaResponse = await response.json();
                const normalizedSlides = normalizeSlides(result);

                setSlides(normalizedSlides);
            } catch (err) {
                if (controller.signal.aborted) {
                    return;
                }

                const message =
                    err instanceof Error
                        ? err.message
                        : "خطای نامشخصی در دریافت بنرها رخ داد.";

                setError(message);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        void fetchSlides();

        return () => {
            controller.abort();
        };
    }, []);

    const canLoop = slides.length > 1;
    if (loading) {
        return (
            <section className="w-full overflow-hidden">
                <div className={`${stateBoxClassName} bg-gray-100 text-gray-500`}>
                    در حال دریافت بنرها...
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full overflow-hidden">
                <div className={`${stateBoxClassName} bg-red-50 text-red-500`}>
                    {error}
                </div>
            </section>
        );
    }

    if (!slides.length) {
        return (
            <section className="w-full overflow-hidden">
                <div className={`${stateBoxClassName} bg-gray-100 text-gray-500`}>
                    بنری برای نمایش وجود ندارد.
                </div>
            </section>
        );
    }

    return (
        <section className="w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={canLoop}
                centeredSlides
                slidesPerView={1.12}
                spaceBetween={12}
                autoplay={
                    canLoop
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }
                        : false
                }
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 1.08,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        centeredSlides: false,
                    },
                }}
                className="online-slider w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={`${slide.id}-${slide.image}`}
                        className="online-slider__slide"
                    >
                        <a
                            href={slide.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                            aria-label={slide.title}
                        >
                            <div className="relative overflow-hidden rounded-2xl lg:rounded-none">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={imageClassName}
                                    loading="lazy"
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;