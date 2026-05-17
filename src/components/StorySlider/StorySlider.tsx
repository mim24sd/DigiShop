import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const storyItems = [
    {
        id: 1,
        title: "استوری ۱",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "استوری ۲",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "استوری ۳",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "استوری ۴",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "استوری ۵",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "استوری ۶",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 7,
        title: "استوری ۷",
        image:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 8,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 9,
        title: "استوری ۱",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 10,
        title: "استوری ۲",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 11,
        title: "استوری ۳",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 12,
        title: "استوری ۴",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 13,
        title: "استوری ۵",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 14,
        title: "استوری ۶",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 15,
        title: "استوری ۷",
        image:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 16,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 17,
        title: "استوری ۶",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 18,
        title: "استوری ۷",
        image:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 19,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 19,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 21,
        title: "استوری ۳",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 22,
        title: "استوری ۴",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 23,
        title: "استوری ۵",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 24,
        title: "استوری ۶",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 25,
        title: "استوری ۷",
        image:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 26,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 27,
        title: "استوری ۶",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 28,
        title: "استوری ۷",
        image:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 29,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        id: 30,
        title: "استوری ۸",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
];

export default function StorySlider() {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="relative w-full pt-8 pb-4 px-44 hidden lg:block" dir="rtl">
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={"auto"}
                spaceBetween={12}
                speed={500}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}
                freeMode={false}
                resistance={true}
                resistanceRatio={0.85}
                className="!pl-8"
            >
                {storyItems.map((item) => (
                    <SwiperSlide key={item.id} className="!w-auto">
                        <div className="flex w-[90px] flex-col items-center gap-1.5 select-none">
                            <div className="rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-600 p-[2px]">
                                <div className="rounded-full bg-white p-[2px]">
                                    <div className="h-[74px] w-[74px] overflow-hidden rounded-full border border-white">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            draggable={false}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <span className="line-clamp-1 text-center text-[11px] text-gray-700">
                {item.title}
              </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute left-2 top-2/3 z-20 flex justify-between w-full -translate-y-1/2 gap-2 px-52">
                <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 active:scale-95"
                >
                    <ChevronRight size={18} />
                </button>

                <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 active:scale-95"
                >
                    <ChevronLeft size={18} />
                </button>
            </div>
        </div>
    );
}