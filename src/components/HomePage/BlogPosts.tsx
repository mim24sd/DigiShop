import ReadingSection, { type ReadingItem } from "../ui/ReadingSection";

const readingItems: ReadingItem[] = [
    {
        id: 1,
        title: "هنگام حملات هوایی در خانه و خیابان چه کنیم؟",
        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 2,
        title: "لوازم بهداشتی و داروهای حیاتی زمان جنگ را بشناسید",
        image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 3,
        title: "لیست کامل وسایل ضروری ماشین در سفر ناگهانی + چک‌لیست اضطراری",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 4,
        title: "اگر آب، برق و گاز قطع شد چه کنیم؟ راهنمای مقابله با بحران",
        image:
            "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop",
        href: "#",
    },
];

const BlogPosts = () => {
    return (
        <ReadingSection
            items={readingItems}
            title="خواندنی‌ها"
            actionLabel="مطالب بیشتر در دیجی‌کالا مگ"
            actionHref="#"
        />
    );
};

export default BlogPosts;