import React from "react";
import { ChevronLeft, Flame } from "lucide-react";

type BestSellerItem = {
    id: number;
    rank: number;
    title: string;
    image: string;
    href?: string;
};

type BestSellerSectionProps = {
    items: BestSellerItem[];
    title?: string;
    actionLabel?: string;
    actionHref?: string;
};

type BestSellerCardProps = {
    item: BestSellerItem;
};

const BestSellerCard: React.FC<BestSellerCardProps> = ({ item }) => {
    return (
        <a
            href={item.href ?? "#"}
            className="group flex items-center gap-4 py-4 transition-opacity hover:opacity-90"
        >
            <div className="flex min-w-0 flex-1 items-center gap-4">
        <span className="min-w-8 text-lg font-bold leading-none text-cyan-400">
          {item.rank}
        </span>

                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                        loading="lazy"
                    />
                </div>

                <h3 className="line-clamp-2 text-sm leading-8 text-slate-700 md:text-md md:leading-10">
                    {item.title}
                </h3>
            </div>
        </a>
    );
};

const BestSellerSectionHeader: React.FC<{
    title: string;
    actionLabel?: string;
    actionHref?: string;
}> = ({ title, actionLabel, actionHref = "#" }) => {
    return (
        <div className="flex items-center justify-between gap-4 px-4 py-6 md:px-6">
            <a
                href={actionHref}
                className="inline-flex items-center gap-1 text-sm font-medium text-cyan-500 transition hover:text-cyan-600"
            >
                {actionLabel ? <span>{actionLabel}</span> : null}
            </a>

            <div className="flex items-center gap-2">
                <Flame className="h-6 w-6 text-orange-400" />
                <h2 className="text-lg font-bold text-slate-900 md:text-xl md:leading-normal">
                    {title}
                </h2>
            </div>

            <div className="w-[88px] md:w-[110px]" />
        </div>
    );
};

const BestSellerSection: React.FC<BestSellerSectionProps> = ({
                                                                 items,
                                                                 title = "پرفروش‌ترین کالاها",
                                                                 actionLabel = "مشاهده همه",
                                                                 actionHref = "#",
                                                             }) => {
    const columns = 3;
    const itemsPerColumn = Math.ceil(items.length / columns);

    const groupedItems = Array.from({ length: columns }, (_, columnIndex) =>
        items.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
    );

    return (
        <section dir="rtl" className="w-full">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
                <BestSellerSectionHeader
                    title={title}
                    actionLabel={actionLabel}
                    actionHref={actionHref}
                />

                <div className="grid grid-cols-1 px-3 pb-4 md:px-6 md:pb-6 xl:grid-cols-3">
                    {groupedItems.map((columnItems, columnIndex) => (
                        <div
                            key={columnIndex}
                            className={`${columnIndex !== 0 ? "xl:border-r xl:border-slate-200" : ""}`}
                        >
                            {columnItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`px-2 md:px-3 ${
                                        index !== columnItems.length - 1 ? "border-b border-slate-200" : ""
                                    }`}
                                >
                                    <BestSellerCard item={item} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="absolute hidden"
                    aria-label="قبلی"
                >
                    <ChevronLeft />
                </button>
            </div>
        </section>
    );
};

export default BestSellerSection;