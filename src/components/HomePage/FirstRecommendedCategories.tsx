import FeatureCardList from '../ui/FeatureCardList';
import FeatureCardListMobile from '../ui/FeatureCardListMobile';
import type { ProductSliderSection } from '../ui/FeatureCardListMobile';

const createProducts = (prefix: string) => [
    {
        id: `${prefix}-1`,
        title: "محصول اول",
        image: `https://picsum.photos/seed/${prefix}-1/300/300`,
        price: "۱۲۰,۰۰۰",
        discount: "۱۰%",
        oldPrice: "۱۳۵,۰۰۰"
    },
    {id: `${prefix}-2`, title: "محصول دوم", image: `https://picsum.photos/seed/${prefix}-2/300/300`, price: "۸۵,۰۰۰"},
    {
        id: `${prefix}-3`,
        title: "محصول سوم",
        image: `https://picsum.photos/seed/${prefix}-3/300/300`,
        price: "۲۴۰,۰۰۰",
        discount: "۲۰%",
        oldPrice: "۳۰۰,۰۰۰"
    },
    {id: `${prefix}-4`, title: "محصول چهارم", image: `https://picsum.photos/seed/${prefix}-4/300/300`, price: "۵۵,۰۰۰"},
];

const MOCK_RECOMMENDATIONS: ProductSliderSection[] = [
    {
        id: "1",
        title: "کیف و کاور گوشی",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/phone-cases",
        products: createProducts("phone-case")
    },
    {
        id: "2",
        title: "ویتامین‌ها و مواد معدنی",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/vitamins",
        products: createProducts("vitamins")
    },
    {
        id: "3",
        title: "گوشی موبایل",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/mobile",
        products: createProducts("mobile")
    },
    {
        id: "4",
        title: "هدفون، هدست و هندزفری",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/audio",
        products: createProducts("audio")
    },
];
export default function FirstRecommendedCategories() {
    return (
        <section className="w-full px-4">
            <div className="hidden lg:block">
                <FeatureCardList data={MOCK_RECOMMENDATIONS}/>
            </div>
            <div className="lg:hidden">
                <FeatureCardListMobile data={MOCK_RECOMMENDATIONS}/>
            </div>
        </section>
    );
}