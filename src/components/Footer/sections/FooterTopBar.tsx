import { ChevronUp } from "lucide-react";
import fullLogo from "../../../assets/images/logo/full.svg";

const FooterTopBar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="">
            <div className="hidden lg:flex lg:items-center lg:justify-between">
                <div className="flex flex-col items-start gap-6">
                    <img
                        src={fullLogo}
                        alt="لوگوی دیجی‌کالا"
                        className="h-8 w-auto object-contain"
                    />

                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span>تلفن پشتیبانی ۹۱۵۵۵۱۵۵ - ۰۲۱</span>
                        <span className="mx-3 hidden h-4 w-px bg-gray-300 sm:block" />
                        <span>۵۲۱ - ۴۱۹۳۵۵۵۵</span>
                        <span className="mx-3 hidden h-4 w-px bg-gray-300 sm:block" />
                        <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={scrollToTop}
                    className="flex w-fit items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-400 hover:text-gray-800"
                >
                    <ChevronUp size={18} />
                    <span>برگشت به بالا</span>
                </button>
            </div>

            <div className="flex justify-center lg:hidden">
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-400 hover:text-gray-800"
                >
                    <ChevronUp size={18} />
                    <span>برگشت به بالا</span>
                </button>
            </div>
        </div>
    );
};

export default FooterTopBar;