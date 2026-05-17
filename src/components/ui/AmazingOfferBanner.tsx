import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import {ChevronLeft} from "lucide-react";

import freshPattern from "../../assets/images/supermarket/freshPattern.svg";
import freshIcon from "../../assets/images/supermarket/fresh.webp";
import freshTypo from "../../assets/images/supermarket/fresh-incredible-offer.svg";
import DiscountCircleItem from "./DiscountCircleItem";

type HeroImage = {
    src: string;
    className?: string;
};

type OfferItem = {
    id: string;
    image: string;
    discountPercent: number;
};

interface DiscountShowcaseProps {
    backgroundImage?: string;
    heroImages?: HeroImage[];
    items?: OfferItem[];
    maxDiscountLabel?: string;
    moreItemsLabel?: string;
}

const heroImagesList: HeroImage[] = [
    {
        src: freshIcon,
        className: "h-14 w-14",
    },
    {
        src: freshTypo,
        className: "h-[28px] w-full",
    },
];

const defaultItems: OfferItem[] = [
    {
        id: "1",
        image:
            "https://images.unsplash.com/photo-1585386959984-a4155223168c?q=80&w=400&auto=format&fit=crop",
        discountPercent: 12,
    },
    {
        id: "2",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop",
        discountPercent: 18,
    },
    {
        id: "3",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
        discountPercent: 25,
    },
    {
        id: "4",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop",
        discountPercent: 30,
    },
    {
        id: "5",
        image:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop",
        discountPercent: 40,
    },
    {
        id: "6",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
        discountPercent: 50,
    },
];

const ITEM_SIZE = 74;
const ITEM_GAP = 8;
const SIDE_GAP = 24;

function useVisibleItemsCount(
    itemsLength: number,
    containerRef: React.RefObject<HTMLDivElement | null>,
    startRef: React.RefObject<HTMLDivElement | null>,
    endButtonRef: React.RefObject<HTMLButtonElement | null>
) {
    const [visibleCount, setVisibleCount] = useState(itemsLength);

    const calculateVisibleCount = useCallback(() => {
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const startWidth = startRef.current?.offsetWidth ?? 0;
        const endButtonWidth = endButtonRef.current?.offsetWidth ?? 0;

        if (!containerWidth) return;

        const availableWidth =
            containerWidth - startWidth - endButtonWidth - SIDE_GAP * 2;

        if (availableWidth <= 0) {
            setVisibleCount(0);
            return;
        }

        const singleItemSpace = ITEM_SIZE + ITEM_GAP;
        const fittedCount = Math.floor((availableWidth + ITEM_GAP) / singleItemSpace);

        setVisibleCount(Math.max(0, Math.min(itemsLength, fittedCount)));
    }, [itemsLength, containerRef, startRef, endButtonRef]);

    useEffect(() => {
        calculateVisibleCount();

        const observer = new ResizeObserver(() => {
            calculateVisibleCount();
        });

        if (containerRef.current) observer.observe(containerRef.current);
        if (startRef.current) observer.observe(startRef.current);
        if (endButtonRef.current) observer.observe(endButtonRef.current);

        window.addEventListener("resize", calculateVisibleCount);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", calculateVisibleCount);
        };
    }, [calculateVisibleCount, containerRef, startRef, endButtonRef]);

    return visibleCount;
}

const AmazingOfferBanner: React.FC<DiscountShowcaseProps> = ({
                                                                 backgroundImage = freshPattern,
                                                                 heroImages = heroImagesList,
                                                                 items = defaultItems,
                                                                 maxDiscountLabel = "تا ۵۰٪ تخفیف",
                                                                 moreItemsLabel = "بیش از ۵۰ کالا",
                                                             }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const startSectionRef = useRef<HTMLDivElement>(null);
    const moreButtonRef = useRef<HTMLButtonElement>(null);

    const visibleCount = useVisibleItemsCount(
        items.length,
        containerRef,
        startSectionRef,
        moreButtonRef
    );

    const visibleItems = useMemo(
        () => items.slice(0, visibleCount),
        [items, visibleCount]
    );

    return (
        <div className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <section
                dir="rtl"
                className="relative h-[110px] w-full rounded-2xl p-4"
                style={{
                    backgroundColor: "#ecefee",
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    backgroundSize: "auto",
                }}
            >
                <div
                    ref={containerRef}
                    className="relative flex w-full items-center justify-between gap-4 overflow-hidden px-4"
                >
                    <div
                        ref={startSectionRef}
                        className="flex min-w-max items-center gap-4"
                    >
                        <div className="flex min-h-max min-w-max items-center gap-4">
                            {heroImages.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt={`hero-${index + 1}`}
                                    className={item.className ?? ""}
                                />
                            ))}
                        </div>

                        <button
                            className="flex min-w-max items-center justify-center rounded-full bg-green-600 px-5 py-2 text-sm font-bold text-white">
                            {maxDiscountLabel}
                        </button>
                    </div>

                    <div className="flex min-w-0 items-center gap-2 overflow-hidden">
                        {visibleItems.map((item) => (
                            <DiscountCircleItem
                                key={item.id}
                                image={item.image}
                                discountPercent={item.discountPercent}
                            />
                        ))}

                        <button
                            ref={moreButtonRef}
                            className="mr-2 inline-flex min-w-max items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-green-700"
                        >
                            <span>{moreItemsLabel}</span>
                            <ChevronLeft className="h-4 w-4"/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AmazingOfferBanner;