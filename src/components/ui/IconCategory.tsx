import React from "react";

export interface ImageTextItem {
    image: string;
    title: string;
}

interface ImageTextListProps {
    items: ImageTextItem[];
}

type ItemType = {
    image?: string;
    title?: string;
    isMore?: boolean;
};

const IconCategory: React.FC<ImageTextListProps> = ({items}) => {
    const finalItems:ItemType[] = [...items.slice(0, 9), {isMore: true}];

    return (
        <div className="w-full max-w-[1320px] mx-auto">
            <div dir="rtl" className="flex w-full justify-between px-8 sm:gap-0 gap-2 overflow-x-auto md:overflow-visible">
                {finalItems.map((item:ItemType, index) => {
                    const isMore = item.isMore;

                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 cursor-pointer"
                        >
                            {/* circle */}
                            <div
                                className={`flex items-center justify-center rounded-full  ${
                                    isMore
                                        ? "bg-gray-200 min-w-[52px] max-w-[52px] aspect-square"
                                        : ""
                                }`}
                            >
                                {isMore ? (
                                    <span className="text-2xl text-gray-600">⋯</span>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="min-w-[52px] max-w-[52px] aspect-square object-cover rounded-full"
                                    />
                                )}
                            </div>

                            {/* title */}

                            <span className="text-xs text-gray-700 text-center line-clamp-2">
                                {isMore ? "بیشتر" : item.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IconCategory;