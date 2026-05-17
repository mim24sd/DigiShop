import {
    House,
    LayoutGrid,
    ShoppingCart,
    Sparkles,
    User,
} from "lucide-react";

const navItems = [
    {
        id: "home",
        title: "خانه",
        href: "#",
        icon: House,
    },
    {
        id: "categories",
        title: "دسته‌بندی",
        href: "#",
        icon: LayoutGrid,
    },
    {
        id: "cart",
        title: "سبد خرید",
        href: "#",
        icon: ShoppingCart,
    },
    {
        id: "magnet",
        title: "مگنت",
        href: "#",
        icon: Sparkles,
    },
    {
        id: "profile",
        title: "دیجی‌کالای من",
        href: "#",
        icon: User,
    },
];

const MobileBottomNav = () => {
    return (
        <nav
            dir="rtl"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white lg:hidden"
        >
            <div className="grid grid-cols-5">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            className="flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 text-gray-500 transition hover:text-red-500"
                        >
                            <Icon className="size-6" strokeWidth={1.9} />
                            <span className="text-[10px] font-medium leading-none">
                                {item.title}
                            </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileBottomNav;