import CountdownProductSlider from "../ui/CountdownProductSlider.tsx";
import type {DiscountedProduct} from "../ui/ProductCardList.tsx";

export const sampleProducts: DiscountedProduct[] = [
    {
        id: "1",
        title: "گوشی موبایل سامسونگ مدل Galaxy A14",
        image: "https://placehold.co/400x400/png?text=Samsung+A14",
        currentPrice: "۶,۸۹۰,۰۰۰",
        originalPrice: "۸,۵۰۰,۰۰۰",
        discountPercentage: "۱۹",
    },
    {
        id: "2",
        title: "گوشی موبایل شیائومی مدل Redmi Note 12",
        image: "https://placehold.co/400x400/png?text=Redmi+Note+12",
        currentPrice: "۹,۲۵۰,۰۰۰",
        originalPrice: "۱۱,۴۰۰,۰۰۰",
        discountPercentage: "۱۹",
    },
    {
        id: "3",
        title: "گوشی موبایل سامسونگ مدل Galaxy A24",
        image: "https://placehold.co/400x400/png?text=Samsung+A24",
        currentPrice: "۱۰,۷۰۰,۰۰۰",
        originalPrice: "۱۲,۹۰۰,۰۰۰",
        discountPercentage: "۱۷",
    },
    {
        id: "4",
        title: "گوشی موبایل اپل مدل iPhone 13",
        image: "https://placehold.co/400x400/png?text=iPhone+13",
        currentPrice: "۴۲,۵۰۰,۰۰۰",
        originalPrice: "۴۸,۰۰۰,۰۰۰",
        discountPercentage: "۱۱",
    },
    {
        id: "5",
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE",
        image: "https://placehold.co/400x400/png?text=Galaxy+S23+FE",
        currentPrice: "۲۸,۹۰۰,۰۰۰",
        originalPrice: "۳۲,۵۰۰,۰۰۰",
        discountPercentage: "۱۱",
    },
    {
        id: "6",
        title: "گوشی موبایل شیائومی مدل Poco X5 Pro",
        image: "https://placehold.co/400x400/png?text=Poco+X5+Pro",
        currentPrice: "۱۴,۸۰۰,۰۰۰",
        originalPrice: "۱۷,۳۰۰,۰۰۰",
        discountPercentage: "۱۴",
    },
    {
        id: "7",
        title: "گوشی موبایل سامسونگ مدل Galaxy A54",
        image: "https://placehold.co/400x400/png?text=Galaxy+A54",
        currentPrice: "۱۶,۴۰۰,۰۰۰",
        originalPrice: "۱۹,۲۰۰,۰۰۰",
        discountPercentage: "۱۵",
    },
    {
        id: "8",
        title: "گوشی موبایل اپل مدل iPhone 14",
        image: "https://placehold.co/400x400/png?text=iPhone+14",
        currentPrice: "۵۱,۹۰۰,۰۰۰",
        originalPrice: "۵۸,۰۰۰,۰۰۰",
        discountPercentage: "۱۰",
    },
    {
        id: "9",
        title: "گوشی موبایل شیائومی مدل Redmi 13C",
        image: "https://placehold.co/400x400/png?text=Redmi+13C",
        currentPrice: "۶,۳۰۰,۰۰۰",
        originalPrice: "۷,۴۰۰,۰۰۰",
        discountPercentage: "۱۵",
    },
    {
        id: "10",
        title: "گوشی موبایل سامسونگ مدل Galaxy A05",
        image: "https://placehold.co/400x400/png?text=Galaxy+A05",
        currentPrice: "۵,۹۰۰,۰۰۰",
        originalPrice: "۶,۸۰۰,۰۰۰",
        discountPercentage: "۱۳",
    },
    {
        id: "11",
        title: "گوشی موبایل نوکیا مدل G21",
        image: "https://placehold.co/400x400/png?text=Nokia+G21",
        currentPrice: "۷,۴۰۰,۰۰۰",
        originalPrice: "۸,۵۰۰,۰۰۰",
        discountPercentage: "۱۳",
    },
    {
        id: "12",
        title: "گوشی موبایل شیائومی مدل Poco C65",
        image: "https://placehold.co/400x400/png?text=Poco+C65",
        currentPrice: "۶,۸۰۰,۰۰۰",
        originalPrice: "۸,۰۰۰,۰۰۰",
        discountPercentage: "۱۵",
    },
    {
        id: "13",
        title: "گوشی موبایل سامسونگ مدل Galaxy M14",
        image: "https://placehold.co/400x400/png?text=Galaxy+M14",
        currentPrice: "۸,۶۰۰,۰۰۰",
        originalPrice: "۱۰,۱۰۰,۰۰۰",
        discountPercentage: "۱۵",
    },
    {
        id: "14",
        title: "گوشی موبایل اپل مدل iPhone 11",
        image: "https://placehold.co/400x400/png?text=iPhone+11",
        currentPrice: "۳۳,۸۰۰,۰۰۰",
        originalPrice: "۳۷,۵۰۰,۰۰۰",
        discountPercentage: "۱۰",
    },
    {
        id: "15",
        title: "گوشی موبایل شیائومی مدل Redmi Note 13 Pro",
        image: "https://placehold.co/400x400/png?text=Note+13+Pro",
        currentPrice: "۱۸,۲۰۰,۰۰۰",
        originalPrice: "۲۱,۰۰۰,۰۰۰",
        discountPercentage: "۱۳",
    },
    {
        id: "16",
        title: "گوشی موبایل سامسونگ مدل Galaxy S24",
        image: "https://placehold.co/400x400/png?text=Galaxy+S24",
        currentPrice: "۴۴,۵۰۰,۰۰۰",
        originalPrice: "۴۹,۰۰۰,۰۰۰",
        discountPercentage: "۹",
    },
    {
        id: "17",
        title: "گوشی موبایل شیائومی مدل Xiaomi 13T",
        image: "https://placehold.co/400x400/png?text=Xiaomi+13T",
        currentPrice: "۲۳,۷۰۰,۰۰۰",
        originalPrice: "۲۶,۴۰۰,۰۰۰",
        discountPercentage: "۱۰",
    },
    {
        id: "18",
        title: "گوشی موبایل سامسونگ مدل Galaxy Z Flip5",
        image: "https://placehold.co/400x400/png?text=Z+Flip5",
        currentPrice: "۴۹,۸۰۰,۰۰۰",
        originalPrice: "۵۵,۳۰۰,۰۰۰",
        discountPercentage: "۱۰",
    },
];

export default function AmazingDeals() {
    return (
        <section>
            <CountdownProductSlider products={sampleProducts}/>
        </section>
    )
}