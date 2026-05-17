import {
    Instagram,
    Linkedin,
    Phone,
    Twitter,
} from "lucide-react";
import { footerColumns } from "../data";
import FooterColumn from "../ui/FooterColumn";
import aparatIcon from "../../../assets/images/footer/aparat-icon.svg";
import appLogo from "../../../assets/images/logo/footer.webp";

const FooterLinks = () => {
    return (
        <div>
            {/* mobile boxes */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between py-3 border-b border-b-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                            <Phone size={18} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-800">
                                تماس با پشتیبانی
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                ۷ روز هفته، ۲۴ ساعت
                            </p>
                        </div>
                    </div>

                    <a
                        href="tel:02191555155"
                        className="rounded-full bg-gray-100 px-4 py-2 text-xs text-gray-500"
                    >
                        تماس
                    </a>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-b-gray-200">
                    <div className="flex items-center gap-3">
                        <img
                            src={appLogo}
                            alt="اپلیکیشن دیجی‌کالا"
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-sm font-bold text-gray-800">
                                اپلیکیشن دیجی‌کالا
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                تجربه خرید بهتر
                            </p>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="flex items-center gap-1 rounded-full bg-gray-100 text-gray-500 px-3 py-2 text-xs"
                    >
                        دانلود
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[repeat(4,minmax(0,1fr))_320px]">
                <div className="grid grid-cols-1 lg:grid-cols-3  lg:col-span-4">
                    {footerColumns.map((column) => (
                        <FooterColumn key={column.title} column={column} />
                    ))}
                </div>

                {/* desktop aside */}
                <div className="hidden lg:flex flex-col gap-8">
                    <div>
                        <h3 className="mb-4 text-base font-bold text-gray-800">
                            همراه ما باشید!
                        </h3>

                        <div className="mb-6 flex items-center gap-4 text-gray-400">
                            <a href="#" className="transition hover:text-gray-600" aria-label="Instagram">
                                <Instagram size={28} />
                            </a>
                            <a href="#" className="transition hover:text-gray-600" aria-label="Twitter">
                                <Twitter size={28} />
                            </a>
                            <a href="#" className="transition hover:text-gray-600" aria-label="Linkedin">
                                <Linkedin size={28} />
                            </a>
                            <a
                                href="#"
                                className="flex h-[22px] items-center text-sm font-semibold transition hover:text-gray-600"
                                aria-label="Aparat"
                            >
                                <img src={aparatIcon} alt="آیکون آپارات" className="w-8" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-base font-bold text-gray-800">
                            با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید
                        </h4>

                        <form className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="ایمیل شما"
                                className="h-12 flex-1 rounded-lg border border-gray-200 bg-gray-100 px-4 text-sm outline-none placeholder:text-gray-500 focus:border-red-400 focus:bg-white"
                            />
                            <button
                                type="submit"
                                className="h-12 rounded-lg bg-gray-300 px-6 text-sm font-bold text-white transition hover:bg-gray-600"
                            >
                                ثبت
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;