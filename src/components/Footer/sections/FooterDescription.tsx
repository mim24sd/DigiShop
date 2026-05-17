import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { badgeItems, footerDescription } from "../data";
import BadgeCard from "../ui/BadgeCard";
import TextButton from "../../ui/base/TextButton.tsx";

const FooterDescription = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border-y border-gray-200 py-4">
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_auto] py-4">
                <div className="min-w-0">
                    <div className="relative">
                        <div
                            className={`relative overflow-hidden transition-all duration-300 ${
                                isExpanded ? "max-h-[4000px]" : "max-h-[140px]"
                            }`}
                        >
                            <div className="space-y-3">
                                {footerDescription.map((item, index) => {
                                    if (item.type === "title") {
                                        return (
                                            <h3
                                                key={`${item.type}-${index}`}
                                                className="pt-2 text-sm font-bold leading-8 text-gray-800"
                                            >
                                                {item.content}
                                            </h3>
                                        );
                                    }

                                    return (
                                        <p
                                            key={`${item.type}-${index}`}
                                            className="text-sm leading-8 text-gray-600"
                                        >
                                            {item.content}
                                        </p>
                                    );
                                })}
                            </div>

                            {!isExpanded && (
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent" />
                            )}
                        </div>

                        <TextButton
                            type="button"
                            variant="link"
                            size="text"
                            leftIcon={ChevronLeft}
                            onClick={() => setIsExpanded((prev) => !prev)}
                            className="mt-2 text-sm font-medium text-gray-400 lg:text-sky-500 lg:hover:text-sky-600 cursor-pointer"
                            iconClassName="size-4"
                        >
                            {isExpanded ? "بستن" : "مشاهده بیشتر"}
                        </TextButton>
                    </div>
                </div>

                <div className="hidden lg:flex shrink-0 flex-row items-start gap-2 lg:gap-3">
                    {badgeItems.map((item) => (
                        <BadgeCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterDescription;