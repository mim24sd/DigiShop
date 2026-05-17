import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FooterColumnType } from "../types";

type Props = {
    column: FooterColumnType;
};

const FooterColumn = ({ column }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="hidden lg:block">
                <h3 className="mb-4 text-base font-bold text-gray-800">
                    {column.title}
                </h3>

                <ul className="mt-4 space-y-3">
                    {column.items.map((item) => (
                        <li
                            key={item}
                            className="text-sm text-gray-500 transition hover:text-gray-700"
                        >
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-b border-gray-200 lg:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between py-4 text-right"
                >
                    <span className="text-sm font-bold text-gray-800">
                        {column.title}
                    </span>

                    <ChevronDown
                        size={18}
                        className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                >
                    <ul className="space-y-3">
                        {column.items.map((item) => (
                            <li
                                key={item}
                                className="text-sm text-gray-500 transition hover:text-gray-700"
                            >
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterColumn;