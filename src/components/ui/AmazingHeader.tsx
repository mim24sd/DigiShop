import { ChevronLeft } from "lucide-react";

// --- توابع کمکی برای فرمت زمان ---
const pad = (value: number) => value.toString().padStart(2, "0");

const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

interface AmazingHeaderProps {
    images: string[];
    remainingSeconds: number;
    className?: string;
}

export const AmazingHeader = ({
                                  images,
                                  remainingSeconds,
                                  className = "",
                              }: AmazingHeaderProps) => {
    return (
        <a
            href="/public"
            // کانتینر اصلی تبدیل به flex-col شد تا المان‌ها زیر هم قرار بگیرند
            className={`flex flex-col gap-4 text-white ${className}`}
        >
            {/* ردیف بالا: تایمر و تصاویر به صورت افقی */}
            <div className="flex w-full items-center justify-between sm:justify-start sm:gap-6">
                <div className="flex items-center gap-3">
                    <img
                        alt="amazing typo"
                        src={images[0]}
                        className="w-[72px] shrink-0 lg:w-[88px]"
                    />

                    <div className="text-sm font-bold lg:text-lg">
                        {formatTime(remainingSeconds)}
                    </div>

                    <img
                        alt="amazing image"
                        src={images[1]}
                        className="w-[56px] shrink-0 lg:w-[80px]"
                    />
                </div>
            </div>

            {/* ردیف پایین: دکمه مشاهده همه */}
            {/* با justify-end در حالت RTL، دکمه سمت چپ قرار می‌گیرد */}
            <div className="flex w-full items-center justify-end">
                <span className="flex items-center text-sm font-medium">
                    مشاهده همه
                    <ChevronLeft size={16} />
                </span>
            </div>
        </a>
    );
};