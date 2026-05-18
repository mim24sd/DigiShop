import {
    Bell,
    LogIn,
    ShoppingCart,
    Menu,
    Search,
    BadgePercent,
    ShoppingBasket,
    Boxes,
    Flame,
    MapPin,
} from "lucide-react";
import logo from "../../assets/images/logo/full.svg";

const DesktopHeader = () => {
    return (
        <div className="hidden lg:block">
            <div className="flex items-center justify-between gap-4 py-3">
                <div className="flex min-w-0 items-center gap-4">
                    <img
                        src={logo}
                        alt="دیجی کالا"
                        className="h-10 w-auto shrink-0 cursor-pointer"
                    />

                    <div className="relative w-[600px] max-w-full cursor-pointer">
                        <Search
                            size={20}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="جستجو"
                            className="h-11 w-full rounded-lg bg-gray-100 pr-12 pl-4 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                    <button className="cursor-pointer text-gray-500 transition hover:text-gray-700">
                        <Bell size={24} />
                    </button>

                    <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50">
                        <LogIn size={18} />
                        <span>ورود | ثبت‌نام</span>
                    </button>

                    <div className="h-6 w-px bg-gray-300" />

                    <button className="cursor-pointer text-gray-700 transition hover:text-black">
                        <ShoppingCart size={24} />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 py-1 text-sm text-gray-700">
                <div className="flex flex-wrap items-center gap-5">
                    <button className="flex cursor-pointer items-center gap-2 text-lg font-medium text-gray-800">
                        <Menu size={20} />
                        <span>دسته‌بندی کالاها</span>
                    </button>

                    <div className="h-4 w-px bg-gray-300" />

                    <button className="flex cursor-pointer items-center gap-2 hover:text-black">
                        <BadgePercent size={16} />
                        <span>شگفت‌انگیزها</span>
                    </button>

                    <button className="flex cursor-pointer items-center gap-2 hover:text-black">
                        <ShoppingBasket size={16} />
                        <span>سوپر مارکت</span>
                    </button>

                    <button className="flex cursor-pointer items-center gap-2 hover:text-black">
                        <Boxes size={16} />
                        <span>طلای دیجیتال</span>
                    </button>

                    <button className="flex cursor-pointer items-center gap-2 hover:text-black">
                        <Flame size={16} />
                        <span>پرفروش‌ها</span>
                    </button>

                    <div className="h-4 w-px bg-gray-300" />

                    <button className="cursor-pointer hover:text-black">سوالی دارید؟</button>
                    <button className="cursor-pointer hover:text-black">در دیجی‌کالا بفروشید</button>
                </div>

                <button className="flex cursor-pointer shrink-0 items-center gap-2 rounded-2xl bg-[#fff3e6] px-4 py-2 text-sm font-medium text-[#f57c00]">
                    <MapPin size={18} />
                    <span>شهر خود را انتخاب کنید</span>
                </button>
            </div>
        </div>
    );
};

export default DesktopHeader;