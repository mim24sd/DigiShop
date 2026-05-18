import {useEffect, useRef, useState} from "react";
import {
    Bell,
    Search,
    MapPin,
    ChevronLeft,
} from "lucide-react";
import logo from "../../assets/images/logo/typo.svg";
import digikala from "../../assets/images/header/digikala.png";
import market from "../../assets/images/header/market.png";
import gold from "../../assets/images/header/gold.png";
import services from "../../assets/images/header/services.png";
import purchaseCredit from "../../assets/images/header/purchase-credit.png"

const mobileItems = [
    {
        id: "services",
        label: "سرویس‌ها",
        icon: services,
    },
    {
        id: "digikala",
        label: "دیجی‌کالا",
        icon: digikala,
    },
    {
        id: "fast",
        label: "۴۵ دقیقه‌ای",
        icon: market,
    },
    {
        id: "gold",
        label: "طلای دیجیتال",
        icon: gold,
    },
    {
        id: "supermarket",
        label: "سوپرمارکت",
        icon: market,
    },
    {
        id: "credit",
        label: "اعتبار خرید",
        icon: purchaseCredit,
    },
];

const fastSlides = ["۴۵ دقیقه‌ای", "کالابرگ", "۴۵ دقیقه‌ای"];
const SLIDE_HEIGHT = 20;

const GradientCameraIcon = ({className = "", size = 24}: { className?: string; size?: number }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <defs>
                <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(135, 78, 237, 1)"/>
                    <stop offset="100%" stopColor="rgba(65, 118, 250, 1)"/>
                </linearGradient>
            </defs>

            <path
                d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"
                stroke="url(#cameraGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="13"
                r="3"
                stroke="url(#cameraGradient)"
                strokeWidth="2"
            />
        </svg>
    );
};

const MobileHeader = () => {
    const [activeItem, setActiveItem] = useState("digikala");
    const [searchValue, setSearchValue] = useState("");
    const [fastIndex, setFastIndex] = useState(0);
    const [fastAnimate, setFastAnimate] = useState(true);
    const resetTimeout = useRef<number | null>(null);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setFastAnimate(true);
            setFastIndex((prev) => prev + 1);
        }, 1400);

        return () => {
            clearInterval(interval);
            if (resetTimeout.current) {
                window.clearTimeout(resetTimeout.current);
            }
        };
    }, []);

    useEffect(() => {
        if (fastIndex === fastSlides.length - 1) {
            resetTimeout.current = window.setTimeout(() => {
                setFastAnimate(false);
                setFastIndex(0);
            }, 500);
        }
    }, [fastIndex]);

    const currentFastLabel = fastIndex === 1 ? "کالابرگ" : "۴۵ دقیقه‌ای";

    return (
        <div className="flex flex-col gap-3 py-3 lg:hidden">
            <div className="no-scrollbar w-full overflow-x-auto pb-1">
                <div className="inline-flex min-w-full gap-2">
                    {mobileItems.map((item) => {
                        const isSelected = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveItem(item.id)}
                                className={`flex min-w-[88px] flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border px-3 py-2 transition-all duration-300 ${
                                    isSelected
                                        ? "border-[#ed1a44] bg-[#ed1a44] text-white"
                                        : "border-gray-200 bg-white text-gray-700"
                                }`}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="h-[36px] w-[36px] object-contain"
                                />

                                {item.id === "fast" ? (
                                    <div
                                        className="relative overflow-hidden text-[11px] font-medium leading-5"
                                        style={{height: `${SLIDE_HEIGHT}px`}}
                                    >
                                        <div
                                            className={fastAnimate ? "transition-transform duration-500" : ""}
                                            style={{
                                                transform: `translateY(-${fastIndex * SLIDE_HEIGHT}px)`,
                                            }}
                                        >
                                            {fastSlides.map((label, index) => {
                                                const isKalaBarg = label === "کالابرگ";
                                                const showKalaBargBadge =
                                                    currentFastLabel === "کالابرگ" &&
                                                    isKalaBarg &&
                                                    fastIndex === index;

                                                return (
                                                    <div
                                                        key={`${label}-${index}`}
                                                        className="flex h-5 items-center justify-center"
                                                    >
                                                        {showKalaBargBadge ? (
                                                            <span className="rounded-md bg-[#ed1a44] px-1.5 text-white">
                                            کالابرگ
                                        </span>
                                                        ) : (
                                                            <span>{label}</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <span className="whitespace-nowrap text-[11px] font-medium">
                    {item.label}
                </span>
                                )}
                            </button>
                        );
                    })}</div>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Search
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-{cameraBg}"
                    />

                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="h-12 w-full rounded-full border border-gray-200 bg-white pr-10 pl-10 text-sm text-gray-700 outline-none"
                    />

                    {!searchValue && (
                        <div
                            className="pointer-events-none absolute inset-y-0 right-10 left-10 flex items-center gap-2 text-sm text-gray-400">
                            <span>جستجو در</span>
                            <img
                                src={logo}
                                alt="دیجی کالا"
                                className="h-4 w-auto object-contain"
                            />
                        </div>
                    )}

                    <GradientCameraIcon
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                        size={22}
                    />
                </div>


                <button
                    type="button"
                    className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                        <Bell size={22} className="text-gray-700"/>
                    </div>
                </button>

            </div>

            <button
                type="button"
                className="self-start flex h-10 w-fit cursor-pointer items-center gap-1 rounded-xl"
            >
                <MapPin size={17} className="text-black"/>

                <div className="flex items-center gap-1 text-sm font-medium text-gray-800">
                    <span>انتخاب استان و شهر</span>
                    <ChevronLeft size={16} className="text-black"/>
                </div>
            </button>
        </div>
    );
};

export default MobileHeader;