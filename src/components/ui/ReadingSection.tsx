import React from "react";

export type ReadingItem = {
    id: number;
    title: string;
    image: string;
    href?: string;
};

type ReadingCardProps = {
    item: ReadingItem;
};

const ReadingCard: React.FC<ReadingCardProps> = ({ item }) => {
    return (
        <a
            href={item.href ?? "#"}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-sm"
        >
            <div className="h-[201px] w-full overflow-hidden bg-zinc-100">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            </div>

            <div className="flex items-start justify-start p-3 text-start">
                <h3 className="text-xs leading-6 text-gray-800">
                    {item.title}
                </h3>
            </div>
        </a>
    );
};

type SectionHeaderProps = {
    title: string;
    actionLabel?: string;
    actionHref?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                         title,
                                                         actionLabel,
                                                         actionHref = "#",
                                                     }) => {
    return (
        <div className="mb-8 flex items-center justify-between">
            <h2 className="text-lg text-zinc-950 max-md:text-base">
                {title}
            </h2>

            {actionLabel ? (
                <a
                    href={actionHref}
                    className="inline-flex items-center gap-2 text-xs font-extralight text-cyan-500 transition hover:text-cyan-600"
                >
                    <span>{actionLabel}</span>
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path
                            d="M12.5 15L7.5 10L12.5 5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            ) : null}
        </div>
    );
};

interface ReadingSectionProps {
    items?: ReadingItem[];
    title?: string;
    actionLabel?: string;
    actionHref?: string;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({
                                                           items = [],
                                                           title = "خواندنی‌ها",
                                                           actionLabel,
                                                           actionHref = "#",
                                                       }) => {
    if (!items.length) return null;

    return (
        <section dir="rtl" className="w-full bg-zinc-100 py-10">
            <div className="mx-auto w-full max-w-[1920px] px-4 md:px-8 lg:px-16 xl:px-48">
                <SectionHeader
                    title={title}
                    actionLabel={actionLabel}
                    actionHref={actionHref}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {items.map((item) => (
                        <ReadingCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReadingSection;