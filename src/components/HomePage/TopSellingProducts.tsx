import ProductSlider from "../ui/ProductSlider.tsx";
import ProductSliderMobile from "../ui/ProductSliderMobile.tsx";

const sampleData = [
    { id: "1",  rank: "۱",  title: "نوشیدنی آناناس رانی ۲۴۰ میلی‌لیتر بسته ۶ عددی",  image: "https://picsum.photos/seed/product1/400/400" },
    { id: "2",  rank: "۲",  title: "قرص بیوپانتن یوروویتال ۶۰ عددی",                 image: "https://picsum.photos/seed/product2/400/400" },
    { id: "3",  rank: "۳",  title: "گوشی موبایل سامسونگ Galaxy A14",                  image: "https://picsum.photos/seed/product3/400/400" },
    { id: "4",  rank: "۴",  title: "هدفون بلوتوثی شیائومی",                            image: "https://picsum.photos/seed/product4/400/400" },
    { id: "5",  rank: "۵",  title: "ساعت هوشمند امیزفیت مدل GTS",                     image: "https://picsum.photos/seed/product5/400/400" },
    { id: "6",  rank: "۶",  title: "پاوربانک 20000 میلی‌آمپری انکر",                  image: "https://picsum.photos/seed/product6/400/400" },
    { id: "7",  rank: "۷",  title: "ماوس بی‌سیم لاجیتک مدل M185",                     image: "https://picsum.photos/seed/product7/400/400" },
    { id: "8",  rank: "۸",  title: "کیبورد مکانیکی گیمینگ RGB",                        image: "https://picsum.photos/seed/product8/400/400" },
    { id: "9",  rank: "۹",  title: "اسپیکر بلوتوثی قابل حمل JBL",                     image: "https://picsum.photos/seed/product9/400/400" },
    { id: "10", rank: "۱۰", title: "مودم 4G قابل حمل ایرانسل",                         image: "https://picsum.photos/seed/product10/400/400" },
    { id: "11", rank: "۱۱", title: "فلش مموری 64 گیگابایت سن دیسک",                    image: "https://picsum.photos/seed/product11/400/400" },
    { id: "12", rank: "۱۲", title: "هارد اکسترنال 1 ترابایت وسترن دیجیتال",            image: "https://picsum.photos/seed/product12/400/400" },
    { id: "13", rank: "۱۳", title: "دوربین مداربسته وایرلس شیائومی",                   image: "https://picsum.photos/seed/product13/400/400" },
    { id: "14", rank: "۱۴", title: "میکروفون یقه‌ای بویا مدل BY-M1",                   image: "https://picsum.photos/seed/product14/400/400" },
    { id: "15", rank: "۱۵", title: "کنسول بازی دستی Game Stick",                       image: "https://picsum.photos/seed/product15/400/400" },
    { id: "16", rank: "۱۶", title: "چراغ مطالعه LED رومیزی",                           image: "https://picsum.photos/seed/product16/400/400" },
    { id: "17", rank: "۱۷", title: "دستگاه بخور سرد خانگی",                            image: "https://picsum.photos/seed/product17/400/400" },
    { id: "18", rank: "۱۸", title: "کتری برقی استیل فیلیپس",                           image: "https://picsum.photos/seed/product18/400/400" },
    { id: "19", rank: "۱۹", title: "گوشی موبایل شیائومی Redmi Note 12",                image: "https://picsum.photos/seed/product19/400/400" },
    { id: "20", rank: "۲۰", title: "لپ‌تاپ ایسوس VivoBook",                            image: "https://picsum.photos/seed/product20/400/400" },
];

export default function TopSellingProducts() {
    return (
    <section className="w-full px-4">
        <div className="hidden lg:block">
            <ProductSlider products={sampleData} />
        </div>

        <div className="lg:hidden">
            <ProductSliderMobile products={sampleData} />
        </div>
    </section>
    );
}